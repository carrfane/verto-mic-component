/*!
 * @hackingbeautyllc/react-mic-plus v3.5.6 - https://hackingbeauty.github.io/react-mic
 * SEE LICENCE IN license.txt Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-mic"] = factory(require("react"));
	else
		root["react-mic"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(3)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);

// CONCATENATED MODULE: ./src/libs/AudioContext.js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var AudioContext_analyser = audioCtx.createAnalyser();

var AudioContext = {
  getAudioContext: function getAudioContext() {
    return audioCtx;
  },
  getAnalyser: function getAnalyser() {
    return AudioContext_analyser;
  },
  resetAnalyser: function resetAnalyser() {
    AudioContext_analyser = audioCtx.createAnalyser();
  },
  decodeAudioData: function decodeAudioData() {
    audioCtx.decodeAudioData(audioData).then(function (decodedData) {
      // use the decoded data here
    });
  }
};

/* harmony default export */ var libs_AudioContext = (AudioContext);
// CONCATENATED MODULE: ./src/libs/AudioRecorder.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Reference this: https://gist.github.com/meziantou/edb7217fddfbb70e899e */
/*https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API*/


var recordingLength = 0; // why can you not put this in constructor?
var leftchannel = [];
var rightchannel = [];
var sampleRate = void 0;
var startTime = void 0;
var AudioRecorder_mediaOptions = void 0;
var recorder = void 0;
var audioInput = void 0;
var volume = void 0;
var onDataCallback = void 0;

var AudioRecorder_AudioRecorder = function () {
  function AudioRecorder(stream, mediaOptions, callbacks) {
    _classCallCheck(this, AudioRecorder);

    this.stream = stream;
    this.audioCtx = libs_AudioContext.getAudioContext();
    this.analyser = libs_AudioContext.getAnalyser();
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
      options: AudioRecorder_mediaOptions,
      blobURL: window.URL.createObjectURL(blob)
    };

    return blobObject;
  };

  return AudioRecorder;
}();


// CONCATENATED MODULE: ./src/libs/MicrophoneRecorder.js
function MicrophoneRecorder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MicrophoneRecorder_analyser = void 0;
var mediaRecorder = void 0;
var chunks = [];
var MicrophoneRecorder_startTime = void 0;
var MicrophoneRecorder_stream = void 0;
var MicrophoneRecorder_mediaOptions = void 0;
var blobObject = void 0;
var onStartCallback = void 0;
var onStopCallback = void 0;
var onSaveCallback = void 0;
var MicrophoneRecorder_onDataCallback = void 0;
var onBlockCallback = void 0;
var onPauseCallback = void 0;
var MicrophoneRecorder_recorder = void 0;

var constraints = { audio: true, video: false }; // constraints - only audio needed

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var MicrophoneRecorder_MicrophoneRecorder = function () {
  function MicrophoneRecorder(onStart, onStop, onSave, onData, onBlock, onPause, options) {
    MicrophoneRecorder_classCallCheck(this, MicrophoneRecorder);

    this.startRecording = function () {
      if (navigator.mediaDevices) {
        console.log('getUserMedia supported.');

        navigator.mediaDevices.getUserMedia(constraints).then(function (str) {
          MicrophoneRecorder_stream = str;

          if (onStartCallback) {
            onStartCallback();
          };

          MicrophoneRecorder_recorder = new AudioRecorder_AudioRecorder(str, MicrophoneRecorder_mediaOptions, { onData: MicrophoneRecorder_onDataCallback });
          MicrophoneRecorder_recorder.start();
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
    MicrophoneRecorder_onDataCallback = onData;
    onBlockCallback = onBlock;
    onPauseCallback = onPause;
    MicrophoneRecorder_mediaOptions = options;
  }

  MicrophoneRecorder.prototype.pauseRecording = function pauseRecording() {
    if (MicrophoneRecorder_recorder) {

      MicrophoneRecorder_recorder.pause();
      libs_AudioContext.resetAnalyser();

      if (onPauseCallback) {
        onPauseCallback();
      };
    }
  };

  MicrophoneRecorder.prototype.stopRecording = function stopRecording() {
    if (MicrophoneRecorder_recorder) {
      var _blobObject = MicrophoneRecorder_recorder.exportWav();

      MicrophoneRecorder_recorder.stop();
      MicrophoneRecorder_recorder = null;
      libs_AudioContext.resetAnalyser();

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
// CONCATENATED MODULE: ./src/libs/Visualizer.js


var drawVisual = void 0;

var Visualizer = {
  visualizeSineWave: function visualizeSineWave(canvasCtx, canvas, width, height, backgroundColor, strokeColor) {
    var analyser = libs_AudioContext.getAnalyser();

    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, width, height);

    function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser = libs_AudioContext.getAnalyser();

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = backgroundColor;
      canvasCtx.fillRect(0, 0, width, height);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = strokeColor;

      canvasCtx.beginPath();

      var sliceWidth = width * 1.0 / bufferLength;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = v * height / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    };

    draw();
  },
  visualizeFrequencyBars: function visualizeFrequencyBars(canvasCtx, canvas, width, height, backgroundColor, strokeColor) {
    var self = this;
    var analyser = libs_AudioContext.getAnalyser();
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, width, height);

    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser = libs_AudioContext.getAnalyser();
      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = backgroundColor;
      canvasCtx.fillRect(0, 0, width, height);

      var barWidth = width / bufferLength * 2.5;
      var barHeight = void 0;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var rgb = self.hexToRgb(strokeColor);

        // canvasCtx.fillStyle = `rgb(${barHeight+100},${rgb.g},${rgb.b})`;
        canvasCtx.fillStyle = strokeColor;
        canvasCtx.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
      }
    };

    draw();
  },
  visualizeFrequencyCircles: function visualizeFrequencyCircles(canvasCtx, canvas, width, height, backgroundColor, strokeColor) {
    var self = this;
    var analyser = libs_AudioContext.getAnalyser();
    analyser.fftSize = 32;
    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);
    canvasCtx.clearRect(0, 0, width, height);

    function draw() {

      drawVisual = requestAnimationFrame(draw);
      analyser = libs_AudioContext.getAnalyser();
      analyser.getByteFrequencyData(dataArray);
      var reductionAmount = 3;
      var reducedDataArray = new Uint8Array(bufferLength / reductionAmount);

      for (var i = 0; i < bufferLength; i += reductionAmount) {
        var sum = 0;
        for (var j = 0; j < reductionAmount; j++) {
          sum += dataArray[i + j];
        }
        reducedDataArray[i / reductionAmount] = sum / reductionAmount;
      }

      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.beginPath();
      canvasCtx.arc(width / 2, height / 2, Math.min(height, width) / 2, 0, 2 * Math.PI);
      canvasCtx.fillStyle = backgroundColor;
      canvasCtx.fill();
      var stepSize = Math.min(height, width) / 2.0 / reducedDataArray.length;
      canvasCtx.strokeStyle = strokeColor;

      for (var _i = 0; _i < reducedDataArray.length; _i++) {
        canvasCtx.beginPath();
        var normalized = reducedDataArray[_i] / 128;
        var r = stepSize * _i + stepSize * normalized;
        canvasCtx.arc(width / 2, height / 2, r, 0, 2 * Math.PI);
        canvasCtx.stroke();
      }
    };
    draw();
  },
  hexToRgb: function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
};

/* harmony default export */ var libs_Visualizer = (Visualizer);
// CONCATENATED MODULE: ./src/components/ReactMic.js
function ReactMic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// cool blog article on how to do this: http://www.smartjava.org/content/exploring-html5-web-audio-visualizing-sound
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

// distortion curve for the waveshaper, thanks to Kevin Ennis
// http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion








var ReactMic_ReactMic = function (_Component) {
  _inherits(ReactMic, _Component);

  function ReactMic(props) {
    ReactMic_classCallCheck(this, ReactMic);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.visualize = function () {
      var self = _this;
      var _this$props = _this.props,
          backgroundColor = _this$props.backgroundColor,
          strokeColor = _this$props.strokeColor,
          width = _this$props.width,
          height = _this$props.height,
          visualSetting = _this$props.visualSetting;
      var _this$state = _this.state,
          canvas = _this$state.canvas,
          canvasCtx = _this$state.canvasCtx;


      if (visualSetting === 'sinewave') {
        libs_Visualizer.visualizeSineWave(canvasCtx, canvas, width, height, backgroundColor, strokeColor);
      } else if (visualSetting === 'frequencyBars') {
        libs_Visualizer.visualizeFrequencyBars(canvasCtx, canvas, width, height, backgroundColor, strokeColor);
      } else if (visualSetting === 'frequencyCircles') {
        libs_Visualizer.visualizeFrequencyCircles(canvasCtx, canvas, width, height, backgroundColor, strokeColor);
      }
    };

    _this.state = {
      microphoneRecorder: null,
      canvas: null,
      canvasCtx: null
    };
    return _this;
  }

  ReactMic.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props = this.props,
        onSave = _props.onSave,
        onStop = _props.onStop,
        onStart = _props.onStart,
        onData = _props.onData,
        onBlock = _props.onBlock,
        onPause = _props.onPause,
        audioElem = _props.audioElem,
        audioBitsPerSecond = _props.audioBitsPerSecond,
        mimeType = _props.mimeType;
    var visualizer = this.refs.visualizer;

    var canvas = visualizer;
    var canvasCtx = canvas.getContext("2d");
    var options = {
      audioBitsPerSecond: audioBitsPerSecond,
      mimeType: mimeType
    };

    if (audioElem) {
      AudioRecorder.create(audioElem);

      this.setState({
        canvas: canvas,
        canvasCtx: canvasCtx
      }, function () {
        _this2.visualize();
      });
    } else {

      this.setState({
        microphoneRecorder: new MicrophoneRecorder_MicrophoneRecorder(onStart, onStop, onSave, onData, onBlock, onPause, options),
        canvas: canvas,
        canvasCtx: canvasCtx
      }, function () {
        _this2.visualize();
      });
    }
  };

  ReactMic.prototype.clear = function clear() {
    var _props2 = this.props,
        width = _props2.width,
        height = _props2.height;
    var canvasCtx = this.state.canvasCtx;

    canvasCtx.clearRect(0, 0, width, height);
  };

  ReactMic.prototype.render = function render() {
    var _props3 = this.props,
        record = _props3.record,
        onStop = _props3.onStop,
        pause = _props3.pause,
        width = _props3.width,
        height = _props3.height;
    var _state = this.state,
        microphoneRecorder = _state.microphoneRecorder,
        canvasCtx = _state.canvasCtx;


    if (record) {
      if (microphoneRecorder) {
        if (pause) {
          microphoneRecorder.pauseRecording();
        } else {
          microphoneRecorder.startRecording();
        }
      }
    } else {
      if (microphoneRecorder) {
        microphoneRecorder.stopRecording(onStop);
        this.clear();
      }
    }

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('canvas', { ref: 'visualizer', height: height, width: width, className: this.props.className });
  };

  return ReactMic;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);




ReactMic_ReactMic.propTypes = {
  backgroundColor: prop_types["string"],
  strokeColor: prop_types["string"],
  className: prop_types["string"],
  audioBitsPerSecond: prop_types["number"],
  mimeType: prop_types["string"],
  height: prop_types["number"],
  record: prop_types["bool"].isRequired,
  onStop: prop_types["func"],
  onData: prop_types["func"]
};

ReactMic_ReactMic.defaultProps = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  strokeColor: '#000000',
  className: 'visualizer',
  audioBitsPerSecond: 128000,
  mimeType: 'audio/webm;codecs=opus',
  record: false,
  width: 640,
  height: 100,
  visualSetting: 'sinewave'
};
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ReactMic", function() { return ReactMic_ReactMic; });




/***/ })
/******/ ])["default"];
});