function Decoder(){this.logger=new Logger("Decoder"),this.coreLogLevel=0,this.wasmLoaded=!1,this.tmpReqQue=[],this.cacheBuffer=null,this.decodeTimer=null,this.videoCallback=null,this.audioCallback=null,this.requestCallback=null,this.responseCallback=null,this.eventCallback=null,this.decoderCmdCallback=null,this.recordWriteCallback=null,this.recordUpdateCallback=null,this.key="",this.iv="",this.allChunks=[],this.recoding=!1,this.handShakeData=null,this.deviceReadyStatus=!1}self.Module={onRuntimeInitialized:function(){onWasmLoaded()},locateFile:function(e,o){return console.log("libffmpeg.wasm ==="+location.origin+self.name+e),location.origin+self.name+e}},self.importScripts("enumConstant.js","logger.js","libffmpeg.js"),Decoder.prototype.initDecoder=function(e,o,t,a,r){var l=Module._initDecoder(this.coreLogLevel,this.eventCallback,this.decoderCmdCallback,this.responseCallback);if(this.logger.logInfo("initDecoder return "+l+"."),0==l){if(t&&""!=t&&a&&""!=a&&r&&""!=r){var s=allocateUTF8(t),c=allocateUTF8(a),n=allocateUTF8(r);Module._setCipherInfo(n,s,c)}null==this.cacheBuffer&&(this.cacheBuffer=Module._malloc(o)),Module._setPlayMode(e)}var d={t:common.kInitDecoderRsp,e:l};self.postMessage(d)},Decoder.prototype.uninitDecoder=function(){this.closeDecoder();var e=Module._uninitDecoder(),o={t:common.kCloseDecoderRsp,e:0};self.postMessage(o),this.logger.logInfo("Uninit ffmpeg decoder return "+e+"."),null!==this.cacheBuffer&&(Module._free(this.cacheBuffer),this.cacheBuffer=null)},Decoder.prototype.getParam=function(e){var o,t,a,r,l,s,c,n,d,i,u=2002==e?3:4,g=Module._malloc(4*u),m=2002==e?Module._getAudioParam(g,u):Module._getVideoParam(g,u);this.logger.logInfo("getParam return "+m),0==m?(t=g>>2,a=Module.HEAP32.subarray(t,t+u),r=2002==e?"":a[0],l=2002==e?"":a[1],s=2002==e?"":a[2],c=2002==e?"":a[3],n=2002==e?a[0]:"",d=2002==e?a[1]:"",i=2002==e?a[2]:"",o={t:common.kGetParamRsp,e:m,type:2002==e?"audio":"video",v:{d:r,p:l,w:s,h:c},a:{f:n,c:d,r:i}},self.postMessage(o)):(o={t:common.kGetParamRsp,e:m},self.postMessage(o)),Module._free(g)},Decoder.prototype.openDecoder=function(){Module._setRecordCallback(this.recordWriteCallback,this.recordUpdateCallback);var e,o=Module._openDecoder(this.videoCallback,this.audioCallback,this.requestCallback);this.logger.logInfo("openDecoder return "+o),0==o&&(e={t:common.kOpenDecoderRsp,e:o},self.postMessage(e))},Decoder.prototype.closeDecoder=function(){isGetParams=!1,isSendDataCallback=!1,this.logger.logInfo("closeDecoder."),this.decodeTimer&&(clearInterval(this.decodeTimer),this.decodeTimer=null,this.logger.logInfo("Decode timer stopped.")),console.log("_closeDecoder");var e=Module._closeDecoder();this.logger.logInfo("Close ffmpeg decoder return "+e+".")},Decoder.prototype.startDecoding=function(e){this.logger.logInfo("Start decoding."),this.decodeTimer&&clearInterval(this.decodeTimer),this.decodeTimer=setInterval(this.decode,e)},Decoder.prototype.pauseDecoding=function(){this.logger.logInfo("Pause decoding."),this.decodeTimer&&(clearInterval(this.decodeTimer),this.decodeTimer=null)};var isGetParams=!1;let a1=0;Decoder.prototype.decode=function(){var e=Module._decodeOnePacket();for(7==e&&self.decoder.logger.logInfo("Decoder finished."),0==e&&(isGetParams=!0);9==e&&this.decodeTimer;)e=Module._decodeOnePacket()},Decoder.prototype.sendData=function(e){var o=new Uint8Array(e);Module.HEAPU8.set(o,this.cacheBuffer),Module._sendData(this.cacheBuffer,o.length)},Decoder.prototype.getSetPlayBackSpeedReq=function(e){var o,t,a,r,l,s=Module._malloc(4),c=Module._malloc(1024),n=allocateUTF8(e),d=Module._getSetPlayBackSpeedReq(c,s,1024,n);this.logger.logInfo("_getSetPlayBackSpeedReq return "+d),0==d&&(t=s>>2,a=Module.HEAP32.subarray(t,t+1)[0],r=Module.HEAPU8.subarray(c,c+a),l=new Uint8Array(r),o={t:common.getSetPlayBackSpeedReq,b:l},self.postMessage(o),l=null),Module._free(s),Module._free(c)},Decoder.prototype.getSetPlayBackStartReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getSetPlayBackStartReq(s,l,1024);this.logger.logInfo("_getSetPlayBackStartReq return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getSetPlayBackStartReq,b:r},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.getSetPlayBackStartTimeReq=function(e){var o,t,a,r,l,s=Module._malloc(4),c=Module._malloc(1024),n=allocateUTF8(String(e.s)),d=allocateUTF8(String(e.q)),i=Module._getSetPlayBackStartTimeReq(c,s,1024,n,d);this.logger.logInfo("_getSetPlayBackStartTimeReq return "+i),0==i&&(t=s>>2,a=Module.HEAP32.subarray(t,t+1)[0],r=Module.HEAPU8.subarray(c,c+a),l=new Uint8Array(r),o={t:common.getSetPlayBackStartTimeReq,b:l},self.postMessage(o)),Module._free(s),Module._free(c)},Decoder.prototype.getHeartbeatPing=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getHeartbeatPing(s,l,1024);this.logger.logInfo("_getHeartbeatPing return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getHeartBeatRequest,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.handshakeReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getHandshakeReq(s,l,1024);this.logger.logInfo("_getHandshakeReq return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getHandshakeReq,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.talkhandshakeReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getHandshakeReq(s,l,1024);this.logger.logInfo("_getHandshakeReq return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getTalkHandshakeReq,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.getHandsharkReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getHandsharkReq(s,l,1024);this.logger.logInfo("_getHeartbeatPing return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getHandsharkRes,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.processReq=function(e){switch(e.t){case common.kInitDecoderReq:this.initDecoder(e.s,e.c,e.k,e.i,e.ct);break;case common.kUninitDecoderReq:this.uninitDecoder();break;case common.kOpenDecoderReq:this.openDecoder();break;case common.kCloseDecoderReq:this.closeDecoder();break;case common.kStartDecodingReq:this.startDecoding(e.i);break;case common.kPauseDecodingReq:this.pauseDecoding();break;case common.kFeedDataReq:this.sendData(e.d);break;case common.getHeartBeatRequest:this.getHeartbeatPing();break;case common.getHandshakeReq:this.handshakeReq();break;case common.resetDecoderFifo:this.resetDecoderFifo();break;case common.getSetPlayBackSpeedReq:this.getSetPlayBackSpeedReq(e.l);break;case common.getSetPlayBackStartReq:this.getSetPlayBackStartReq();break;case common.getSetPlayBackStartTimeReq:this.getSetPlayBackStartTimeReq(e);break;case common.getHandsharkReq:this.getHandsharkReq();break;case common.recoderStart:this.recoderStart();break;case common.recoderPause:this.recoderPause(e.s);break;case common.initTalkEncode:this.initEncoder();break;case common.kGetDeviceInfo:this.sendTalkData(e.d);break;case common._getTalkStartReq:this._getTalkStartReq();break;case common.kStartTalkEncoderRsp:if(console.log(e.b+"start talk devic info"),e.b){let o=JSON.parse(e.b);this.startTalkEncoder(8e3,16,1,o.audio_codec,o.sample,o.bitwidth,o.channel)}else this.startTalkEncoder();break;case common.pcmDataReq:this.encodePcmDataReq(e);break;case common.DestroyTalkReq:this.getTalkStopReq();break;case common.talkStopResponse_to_dec:this.closeTalkEncoder(),this.uninitTalkDecoder();break;default:this.logger.logError("Unsupport messsage "+e.t)}},Decoder.prototype.cacheReq=function(e){e&&this.tmpReqQue.push(e)},Decoder.prototype.resetDecoderFifo=function(e){Module._resetDecoderFifo()};var isSendDataCallback=!1;function onWasmLoaded(){self.decoder?self.decoder.onWasmLoaded():console.log("[ER] No decoder!")}Decoder.prototype.recoderStart=function(){this.recoding=!0,this.allChunks=[],Module._recoderStart()},Decoder.prototype.recoderPause=function(e){if(this.recoding=!1,Module._recoderPause(),1==e)return void(this.allChunks=[]);let o=this.allChunks;var t={t:common.kVideoDownRep,s:(new Date).getTime(),d:o};self.postMessage(t)},Decoder.prototype.onWasmLoaded=function(){let e=this;this.logger.logInfo("Wasm loaded."),this.wasmLoaded=!0,this.videoCallback=Module.addFunction((function(e,o,t,a,r){var l=Module.HEAPU8.subarray(e,e+o),s=new Uint8Array(l),c={t:common.kVideoFrame,s:t,d:s};self.postMessage(c,[c.d.buffer])}),"viidid"),this.audioCallback=Module.addFunction((function(e,o,t,a,r){var l=Module.HEAPU8.subarray(e,e+o),s=new Uint8Array(l),c={t:common.kAudioFrame,s:t,d:s};self.postMessage(c,[c.d.buffer]),s=null}),"viidid"),this.requestCallback=Module.addFunction((function(e,o){}),"vii"),this.TalkEventCallback=Module.addFunction((function(e,o){if(console.log("TalkEventCallback evtType:"+e),e>=4&&e<=18){const o={t:common.serverDecoderTalkError,s:e};self.postMessage(o)}if(20==e){const o={t:common.ServerMaxTalkDurationReached,s:e};self.postMessage(o)}}),"vii"),this.TalkCmdCallback=Module.addFunction((function(o,t,a,r,l,s,c){console.log("cmd_type",o,t);let n=Number(t);if(console.log("TalkCmdCallback  cmd_type ==="+o),console.log("TalkCmdCallback  errCode ==="+n),0===n)switch(o){case 1:let t={t:common.kStartTalkEncoderdeviceready,b:""};e.deviceReadyStatus||(console.log("设备准备好了"+o),e.deviceReadyStatus=!0,self.postMessage(t));break;case 10:let a=UTF8ToString(s,c),r={t:common.kStartTalkEncoderRsp,b:a};self.postMessage(r);break;case 11:let l={t:common.talkStopResponse};self.postMessage(l)}else{let e={t:common.closeTalk,b:"",errCode:n};self.postMessage(e)}}),"vijiijii"),this.TalkUserDataCallback=Module.addFunction((function(e,o){}),"vii"),this.recordWriteCallback=Module.addFunction(((e,o,t)=>{var a=Module.HEAPU8.subarray(o,o+t);o=new Uint8Array(a);if(this.allChunks.push(o),this.recoding){let e=this.allChunks;var r={t:common.kVideoDownChumksRep,s:(new Date).getTime(),d:e};self.postMessage(r)}}),"viii"),this.recordUpdateCallback=Module.addFunction(((e,o,t,a)=>{var r=Module.HEAPU8.subarray(o,o+t)||[0];this.allChunks[0][a]=r[0]}),"viiii"),this.decoderCmdCallback=Module.addFunction((function(e,o,t,a,r,l,s){var c,n,d,i,u;let g=Number(o);if(782!=g&&778!=g&&784!=g)switch(e){case 1:i={t:common.deviceReady},self.postMessage(i);break;case 2:break;case 3:d={t:common.responseCurDateTime,d:r},self.postMessage(d);break;case 4:console.log("PLAYBACKOVER"),d={t:common.PlaybackOver},self.postMessage(d);break;case 8:n=UTF8ToString(l,s),c={t:common.playbakcRecordList,d:n},self.postMessage(c);break;case 9:u={t:common.heartPingResp},self.postMessage(u)}else{let e={t:common.closeWebSocket,b:"",errCode:g};self.postMessage(e)}}),"vijiijii"),this.responseCallback=Module.addFunction((function(e,o){}),"vii");const o=this;this.eventCallback=Module.addFunction((function(e,t){if(e>=4&&e<=18){const o={t:common.serverDecoderError,s:e};self.postMessage(o)}switch(e){case 0:if(!isSendDataCallback){const e={t:common.sendDataCallback};self.postMessage(e),isSendDataCallback=!0}break;case 1:case 2:case 3:const t={t:common.socketLinkState,s:e};self.postMessage(t);break;case 2e3:const a={t:common.eventTypeFifoFull};self.postMessage(a);break;case 2001:const r={t:common.eventTypeFifoEnough};self.postMessage(r);break;case 2002:o.getParam(2002);break;case 2003:o.getParam(2003);break;case 2004:o.recoderPause();break;case 17:const l={t:common.serverDataTimeout};self.postMessage(l);break;case 20:const s={t:common.ServerMaxPlayDurationReached};self.postMessage(s)}}),"vii");let t={t:common.onWasmLoaded};var a;for(self.postMessage(t);this.tmpReqQue.length>0;)a=this.tmpReqQue.shift(),this.processReq(a)},Decoder.prototype.initEncoder=function(){var e=Module._initTalkEncoder(this.TalkEventCallback,this.TalkCmdCallback,this.TalkUserDataCallback);this.logger.logInfo("initEecoder return "+e+".")},Decoder.prototype._getTalkStartReq=function(){this.getTalkStartReq()},Decoder.prototype.getTalkStartReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getTalkStartReq(s,l,1024);this.logger.logInfo("_getTalkStartReq return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.getTalkStartReq,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.sendTalkData=function(e){var o=new Uint8Array(e);Module.HEAPU8.set(o,this.cacheBuffer),Module._sendTalkData(this.cacheBuffer,o.length)},Decoder.prototype.getTalkStopReq=function(){var e,o,t,a,r,l=Module._malloc(4),s=Module._malloc(1024),c=Module._getTalkStopReq(s,l,1024);this.logger.logInfo("_getTalkStopReq return "+c),0==c&&(o=l>>2,t=Module.HEAP32.subarray(o,o+1)[0],a=Module.HEAPU8.subarray(s,s+t),r=new Uint8Array(a),e={t:common.talkStopResponse_to_talkWorker,b:r,l:t},self.postMessage(e)),Module._free(l),Module._free(s)},Decoder.prototype.startTalkEncoder=function(e=8e3,o=16,t=1,a=1,r=8e3,l=16,s=1){var c=Module._startTalkEncoder(e,o,t,a,r,l,s);if(this.logger.logInfo("startTalkEncoder return "+c),0==c){let e={t:common.kGetAudioDataReq,b:""};self.postMessage(e)}},Decoder.prototype.closeTalkEncoder=function(){var e=Module._closeTalkEncoder();this.deviceReadyStatus=!1,console.log("_closeTalkEncoder "+e)},Decoder.prototype.uninitTalkDecoder=function(){var e=Module._uninitTalkDecoder();console.log("_uninitTalkDecoder "+e)},Decoder.prototype.encodePcmDataReq=function(e){let o=e.p.d,t=e.p.h;if(0==t)return;e.p.t;var a=Module._malloc(4),r=Module._malloc(51200),l=Module._malloc(51200),s=new Uint8Array(o);Module.HEAPU8.set(s,r);var c,n,d,i,u,g=t+10240,m=a,f=l;0==Module._getAudioData(r,t,0,l,a,g)&&(n=m>>2,d=Module.HEAP32.subarray(n,n+1)[0],i=Module.HEAPU8.subarray(f,f+d),u=new Uint8Array(i),c={t:common.kgetTalkStartRep,b:u,l:d},self.postMessage(c)),Module._free(m),Module._free(f),Module._free(a),Module._free(r),Module._free(l)},self.decoder=new Decoder,self.onmessage=function(e){if(self.decoder){var o=e.data;if(!self.decoder.wasmLoaded)return self.decoder.cacheReq(o),void self.decoder.logger.logInfo("Temp cache req "+o.t+".");self.decoder.processReq(o)}else console.log("[ER] Decoder not initialized!")};