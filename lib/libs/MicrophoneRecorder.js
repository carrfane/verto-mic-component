'use strict';

exports.__esModule = true;
exports.MicrophoneRecorder = undefined;

var _AudioContext = require('./AudioContext');

var _AudioContext2 = _interopRequireDefault(_AudioContext);

var _AudioRecorder = require('./AudioRecorder');

var _AudioRecorder2 = _interopRequireDefault(_AudioRecorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var analyser = void 0;
var mediaRecorder = void 0;
var chunks = [];
var startTime = void 0;
var stream = void 0;
var mediaOptions = void 0;
var blobObject = void 0;
var onStartCallback = void 0;
var onStopCallback = void 0;
var onSaveCallback = void 0;
var onDataCallback = void 0;
var onBlockCallback = void 0;
var onPauseCallback = void 0;
var recorder = void 0;

var constraints = { audio: true, video: false }; // constraints - only audio needed

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var MicrophoneRecorder = exports.MicrophoneRecorder = function () {
  function MicrophoneRecorder(onStart, onStop, onSave, onData, onBlock, onPause, options) {
    _classCallCheck(this, MicrophoneRecorder);

    this.startRecording = function () {
      if (navigator.mediaDevices) {
        console.log('getUserMedia supported.');

        navigator.mediaDevices.getUserMedia(constraints).then(function (str) {
          stream = str;

          if (onStartCallback) {
            onStartCallback();
          };

          recorder = new _AudioRecorder2.default(str, mediaOptions, { onData: onDataCallback });
          recorder.start();
        }).catch(function (err) {
          if (onBlockCallback) {
            onBlockCallback(err);
          }
        });
      } else {
        alert('Your browser does not support audio recording.  If you have an Iphone, you need to use Safari to record audio.');
      }
    };

    onStartCallback = onStart;
    onStopCallback = onStop;
    onSaveCallback = onSave;
    onDataCallback = onData;
    onBlockCallback = onBlock;
    onPauseCallback = onPause;
    mediaOptions = options;
  }

  MicrophoneRecorder.prototype.pauseRecording = function pauseRecording() {
    if (recorder) {

      recorder.pause();
      _AudioContext2.default.resetAnalyser();

      if (onPauseCallback) {
        onPauseCallback();
      };
    }
  };

  MicrophoneRecorder.prototype.stopRecording = function stopRecording() {
    if (recorder) {
      var _blobObject = recorder.exportWav();

      recorder.stop();
      recorder = null;
      _AudioContext2.default.resetAnalyser();

      if (onStopCallback) {
        onStopCallback(_blobObject);
      };
      if (onSaveCallback) {
        onSaveCallback(_blobObject);
      };
    }
  };

  return MicrophoneRecorder;
}();