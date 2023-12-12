/*
one decode thread for both audio and video
 */

var Module = {
    onRuntimeInitialized: function () {
        onWasmLoaded();
    }
};

importScripts("libffmpeg.js");

const WasmMediaConst = {

    // decode worker request code
    kInitReq: 100,
    kUninitReq: 101,
    kOpenDecoderReq: 102,
    kCloseDecoderReq: 103,
    kSendVideoSampleReq: 104,
    kSendAudioSampleReq: 105,
    kProcessVideoReq: 106,
    kProcessAudioReq: 107,
    
    // decode worker response code
    kInitRsp: 100,
    kUninitRsp: 101,
    kOpenDecoderRsp: 102,
    kCloseDecoderRsp: 103,
    kSendVideoSampleRsp: 104,
    kSendAudioSampleRsp: 105,
    kProcessVideoRsp: 106,
    kProcessAudioRsp: 107,
    kVideoFrameRsp: 108,
    kAudioFrameRsp: 109,
    
    // error code
    kOk: 0,
    kErrorNeedRetry: 1,
    kErrorWasmNotLoaded: 2,
    kErrorInvalidUrl: -1,
    kErrorInvalidCanvas: -2,
    kErrorInvalidState: -3,
    
    // initial cache buffer size is 512K bytes
    kInitialCacheBufferSize: 524288,
    kExpandReservedBufferSize: 131072
    
    };

class uluDecodeThread {

    constructor() {
        this.TAG = 'uluDecodeThread';
            // 0 - none; 1 - core; 2 - all (with ffmpeg);
        this.coreLogLevel   = 0;
        this.wasmLoaded     = false;
        this.videoCallback  = null;
        this.audioCallback  = null;
        this.videoSamples = [];
        this.audioSamples = [];

        // we must use the buffer allocated by wasm module to pass data to wasm module!
        this.cacheBuffer = null;
        this.cacheBufferSize = 0;

        this.audioCacheBuffer = null;
        this.audioCacheSize = 0;
    }
    
    init() {
        var ret = Module._init(this.coreLogLevel);
        console.log("[uluDecodeThread] init ffmpeg return " + ret + ".");
        if (WasmMediaConst.kOk == ret) {
            this.cacheBuffer = Module._malloc(WasmMediaConst.kInitialCacheBufferSize);
            this.cacheBufferSize = WasmMediaConst.kInitialCacheBufferSize;

            this.audioCacheBuffer = Module._malloc(WasmMediaConst.kInitialCacheBufferSize);
            this.audioCacheSize = WasmMediaConst.kInitialCacheBufferSize;
        }
        return ret;
    };
    
    uninit() {
        if (this.cacheBuffer) {
            Module._free(this.cacheBuffer);
            this.cacheBuffer = null;
        }
        this.cacheBufferSize = 0;

        if (this.audioCacheBuffer) {
            Module._free(this.audioCacheBuffer);
            this.audioCacheBuffer = null;
        }
        this.audioCacheSize = 0;
    
        this.videoSamples = [];
        this.audioSamples = [];
    
        var ret = Module._uninit();
        console.log("[uluDecodeThread] uninit ffmpeg return " + ret + ".");
        return ret;
    };
    
    openDecoder(isVideo, decoderType) {
        var ret = Module._openDecoder(isVideo, decoderType, isVideo ? this.videoCallback : this.audioCallback);
        console.log("[uluDecodeThread] open ffmpeg decoder (" + decoderType + ") return " + ret + ".");
        return ret;
    };

    setAudioOutputSampleRate(sampleRate) {
        var ret = Module._setAudioOutputSampleRate(sampleRate);
        console.log("[uluDecodeThread] set audio output sample rate (" + sampleRate + ") return " + ret + ".");
        return ret;
    }
    
    setInputData(isVideo, cacheBuffer, cacheBufferLength, timestamp) {
        var ret = Module._setInputData(isVideo, cacheBuffer, cacheBufferLength, timestamp);
    //    console.log("[uluDecodeThread] set input data return " + ret + ".");
        return ret;
    };
    
    closeDecoder(isVideo) {
        var ret = Module._closeDecoder(isVideo);
        console.log("[uluDecodeThread] close ffmpeg decoder return " + ret + ".");
    };
    
    onWasmLoaded() {
        console.log("[uluDecodeThread] Wasm loaded.");
        this.wasmLoaded = true;
    
        this.videoCallback = Module.addFunction(function (buff, size, width, height, yStride, uvStride, timestamp) {
            if (!buff) {
                return;
            }
    
            var outArray = Module.HEAPU8.subarray(buff, buff + size);
            var data = new Uint8Array(outArray);
            var objData = {
                t: WasmMediaConst.kVideoFrameRsp,
                ts: timestamp,
                data: data,
                w: width,
                h: height,
                y: yStride,
                uv: uvStride
            };
            postMessage(objData, [objData.data.buffer]);
        }, "videocb");
    
        this.audioCallback = Module.addFunction(function (buff, size, sampleRate, channels, sampleFormat, timestamp) {
            if (!buff) {
                return;
            }
    
            var outArray = Module.HEAPU8.subarray(buff, buff + size);
            var data = new Uint8Array(outArray);
            var objData = {
                t: WasmMediaConst.kAudioFrameRsp,
                ts: timestamp,
                data: data,
                r: sampleRate,
                c: channels,
                f: sampleFormat
            };
            postMessage(objData, [objData.data.buffer]);
        }, "audiocb");
    };
    
    processReq = function (req) {
        //console.log("[uluDecodeThread] processReq " + req.t + ".");
        switch (req.t) {
            case WasmMediaConst.kInitReq:
                this.onInitReq();
                break;
            case WasmMediaConst.kUninitReq:
                this.onUninitReq();
                break;
            case WasmMediaConst.kOpenDecoderReq:
                this.onOpenDecoderReq(req);
                break;
            case WasmMediaConst.kCloseDecoderReq:
                this.onCloseDecoderReq(req);
                break;
            case WasmMediaConst.kSendVideoSampleReq:
                this.onSendVideoSampleReq(req);
                break;
            case WasmMediaConst.kSendAudioSampleReq:
                this.onSendAudioSampleReq(req);
                break;
            case WasmMediaConst.kProcessVideoReq:
                this.onProcessVideoReq();
                break;
            case WasmMediaConst.kProcessAudioReq:
                this.onProcessAudioReq();
                break;
            default:
                Log.e("[uluDecodeThread] Unsupport messsage " + req.t);
                break;
        }
    };
    
    onInitReq() {
        var errCode = WasmMediaConst.kOk;
        if (!this.wasmLoaded) {
            errCode = WasmMediaConst.kErrorWasmNotLoaded;
        } else {
            errCode = this.init();
        }
    
        postMessage({
            t: WasmMediaConst.kInitRsp,
            e: errCode
        });
    };
    
    onUninitReq() {
        this.uninit();
    
        postMessage({
            t: WasmMediaConst.kUninitRsp
        });
    };
    
    onOpenDecoderReq(req) {
        var ret = this.openDecoder(req.v, req.d);
        if (req.v == 0) {
            ret = this.setAudioOutputSampleRate(req.sr);
        }

        if (WasmMediaConst.kOk == ret && req.v && req.seq) {
            // if has sequence header, we need set to decoder first
            this.updateCacheBuffer(req.seq, req.seq.byteLength);
            var ret2 = this.setInputData(1, this.cacheBuffer, req.seq.byteLength, 0);
            console.log("[uluDecodeThread] [video_decode]input sequence header, size: " + req.seq.byteLength + ", ret: " + ret2);
        }
    
        postMessage({
            t: WasmMediaConst.kOpenDecoderRsp,
            e: ret
        });
    }
    
    onCloseDecoderReq(req) {
        this.closeDecoder(req.v);
    
        postMessage({
            t: WasmMediaConst.kCloseDecoderRsp,
        });
    }
    
    updateCacheBuffer(data, size) {
        if (size > this.cacheBufferSize) {
            var expandSize = ((size + WasmMediaConst.kExpandReservedBufferSize) / WasmMediaConst.kExpandReservedBufferSize) * WasmMediaConst.kExpandReservedBufferSize;
            console.log("[uluDecodeThread] need expand cache buffer from " + this.cacheBufferSize + " to " + expandSize + "(" + size + ")");
            this.cacheBuffer = Module._malloc(expandSize);
            this.cacheBufferSize = expandSize;
        }
    
        Module.HEAPU8.set(data, this.cacheBuffer);
    }

    updateAudioCacheBuffer(data, size) {
        if (size > this.audioCacheSize) {
            var expandSize = ((size + kExpandReservedBufferSize) / kExpandReservedBufferSize) * kExpandReservedBufferSize;
            console.log("[uluDecodeThread] need expand cache buffer from " + this.audioCacheSize + " to " + expandSize + "(" + size + ")");
            this.audioCacheBuffer = Module._malloc(expandSize);
            this.audioCacheSize = expandSize;
        }
    
        Module.HEAPU8.set(data, this.audioCacheBuffer);
    }
    
    onSendVideoSampleReq(req) {
        if(this.videoSamples.length > 30 && req.isKeyFrame) {
            this.videoSamples = [];
        }

        this.videoSamples.push({
            pts: req.pts,
            isKeyFrame: req.isKeyFrame,
            data: req.data,
            size: req.size
        });
    
    //    console.log("[uluDecodeThread] [v]pts: " + req.pts + ", keyframe: " + req.isKeyFrame + ", size: " + this.videoSamples.length);
    
        postMessage({
            t: WasmMediaConst.kSendVideoSampleRsp,
        });
    };
    
    onSendAudioSampleReq(req) {
        this.audioSamples.push({
            pts: req.pts,
            isKeyFrame: req.isKeyFrame,
            data: req.data,
            size: req.size
        });
   
       postMessage({
           t: WasmMediaConst.kSendAudioSampleRsp,
       });
    };
    
    onProcessVideoReq() {
        // while(videoCounts--) {
        //     let sample = this.videoSamples.shift();
        //     this.updateCacheBuffer(sample.data, sample.size);
        //     var ret = this.setInputData(1, this.cacheBuffer, sample.size, sample.pts);
        // }
        if (this.videoSamples.length > 0) {
            let sample = this.videoSamples.shift();
            console.log("[uluDecodeThread] [onProcessVideoReq]  len:" + this.videoSamples.length);
            this.updateCacheBuffer(sample.data, sample.size);
            var ret = this.setInputData(1, this.cacheBuffer, sample.size, sample.pts);
            console.log("[uluDecodeThread] [onProcessVideoReq]pts: " + sample.pts + ", keyframe: " + sample.isKeyFrame + ", size: " + sample.size + ", ret: " + ret);
        }

        var ww = this;
        var postmsg = function(ww) {
            if(ww.videoSamples.length > 0) {
                postMessage({
                    t: WasmMediaConst.kProcessVideoRsp,
                });
            } 
            else {
                setTimeout(function(){
                    postmsg(ww);
                }, 5);
            }
        };
        postmsg(ww);
    };
    
    onProcessAudioReq() {
        if (this.audioSamples.length > 0) {
            let sample = this.audioSamples.shift();
            this.updateAudioCacheBuffer(sample.data, sample.size);
            var ret = this.setInputData(0, this.audioCacheBuffer, sample.size, sample.pts);
        }

        var ww = this;
        var postmsg = function(ww) {
            if(ww.audioSamples.length > 0) {
                postMessage({
                    t: WasmMediaConst.kProcessAudioRsp,
                });
            } 
            else {
                setTimeout(function(){
                    postmsg(ww);
                }, 5);
            }
        };
        postmsg(ww);
    };
}

decodethread = new uluDecodeThread();

function onWasmLoaded() {
    if (decodethread) {
        decodethread.onWasmLoaded();
    } else {
        console.log("[uluDecodeThread] [ERR]No WASM module!");
    }
}

onmessage = function (evt) {
    if (!decodethread) {
        console.log("[uluDecodeThread] [ERR]Decode thread not initialized!");
        return;
    }

    var req = evt.data;
    decodethread.processReq(req);
};
