'use strict';

exports.__esModule = true;
exports.default = undefined;

var _AudioContext = require('./AudioContext');

var _AudioContext2 = _interopRequireDefault(_AudioContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* Reference this: https://gist.github.com/meziantou/edb7217fddfbb70e899e */
/*https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API*/


var recordingLength = 0; // why can you not put this in constructor?
var leftchannel = [];
var rightchannel = [];
var sampleRate = void 0;
var startTime = void 0;
var mediaOptions = void 0;
var recorder = void 0;
var audioInput = void 0;
var volume = void 0;
var onDataCallback = void 0;

var AudioRecorder = function () {
  function AudioRecorder(stream, mediaOptions, callbacks) {
    _classCallCheck(this, AudioRecorder);

    this.stream = stream;
    this.audioCtx = _AudioContext2.default.getAudioContext();
    this.analyser = _AudioContext2.default.getAnalyser();
    mediaOptions = mediaOptions;
    onDataCallback = callbacks.onData;
  }

  AudioRecorder.prototype.start = function start() {
    var self = this;
    var audioCtx = this.audioCtx,
        analyser = this.analyser;

    var bufferSize = 8192;

    volume = audioCtx.createGain();
    audioInput = audioCtx.createMediaStreamSource(this.stream);
    sampleRate = audioCtx.sampleRate;

    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    audioInput.connect(volume);

    if (audioCtx.createScriptProcessor) {
      recorder = audioCtx.createScriptProcessor(bufferSize, 2, 2);
    } else {
      recorder = audioCtx.createJavaScriptNode(bufferSize, 2, 2);
    }

    recorder.onaudioprocess = function (e) {
      console.log('recording');

      var left = e.inputBuffer.getChannelData(0);
      var right = e.inputBuffer.getChannelData(1);

      // // we clone the samples
      leftchannel.push(new Float32Array(left));
      rightchannel.push(new Float32Array(right));
      recordingLength += bufferSize;

      if (onDataCallback) {
        onDataCallback(self.exportWav());
      }
    };

    volume.connect(recorder);
    audioInput.connect(analyser);
    recorder.connect(analyser);
    startTime = Date.now();
  };

  AudioRecorder.prototype.pause = function pause() {
    var stream = this.stream,
        audioCtx = this.audioCtx;


    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    volume.disconnect(audioCtx);
    recorder.disconnect(audioCtx);
    audioCtx.suspend();
  };

  AudioRecorder.prototype.stop = function stop() {
    var stream = this.stream,
        audioCtx = this.audioCtx;


    recordingLength = 0;
    leftchannel = [];
    rightchannel = [];

    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    volume.disconnect(this.audioCtx);
    recorder.disconnect(this.audioCtx);
    audioCtx.suspend();
  };

  AudioRecorder.prototype.mergeBuffers = function mergeBuffers(channelBuffer, recordingLength) {
    var result = new Float32Array(recordingLength);
    var offset = 0;
    var lng = channelBuffer.length;
    for (var i = 0; i < lng; i++) {
      var buffer = channelBuffer[i];
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  };

  AudioRecorder.prototype.interleave = function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);

    var inputIndex = 0;

    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  };

  AudioRecorder.prototype.writeUTFBytes = function writeUTFBytes(view, offset, string) {
    var lng = string.length;
    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  AudioRecorder.prototype.exportWav = function exportWav() {
    // we flat the left and right channels down
    var leftBuffer = this.mergeBuffers(leftchannel, recordingLength);
    var rightBuffer = this.mergeBuffers(rightchannel, recordingLength);
    // we interleave both channels together
    var interleaved = this.interleave(leftBuffer, rightBuffer);

    // we create our wav file
    var buffer = new ArrayBuffer(44 + interleaved.length * 2);
    var view = new DataView(buffer);

    // RIFF chunk descriptor
    this.writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 44 + interleaved.length * 2, true);
    this.writeUTFBytes(view, 8, 'WAVE');
    // FMT sub-chunk
    this.writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // chunkSize
    view.setUint16(20, 1, true); // wFormatTag
    view.setUint16(22, 2, true); // wChannels: stereo (2 channels)
    view.setUint32(24, sampleRate, true); // dwSamplesPerSec
    view.setUint32(28, sampleRate * 4, true); // dwAvgBytesPerSec
    view.setUint16(32, 4, true); // wBlockAlign
    view.setUint16(34, 16, true); // wBitsPerSample
    // data sub-chunk
    this.writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true);

    // write the PCM samples
    var index = 44;
    var volume = 1;
    for (var i = 0; i < interleaved.length; i++) {
      view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
      index += 2;
    }

    // our final blob
    var blob = new Blob([view], { type: 'audio/wav' });

    var blobObject = {
      blob: blob,
      startTime: startTime,
      stopTime: Date.now(),
      options: mediaOptions,
      blobURL: window.URL.createObjectURL(blob)
    };

    return blobObject;
  };

  return AudioRecorder;
}();

exports.default = AudioRecorder;
module.exports = exports['default'];