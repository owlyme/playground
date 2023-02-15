<template>
  <div>
    <div class="player_container" style="width: 960px; margin: 100px auto">
      <div id="player">
        <div class="p_top">
          <div>设备名称</div>
          <div>
            <i class="ico ico-jietu-d" v-show="!isPlaying"></i>
            <el-tooltip class="item" effect="dark" content="截图" placement="top" v-show="isPlaying">
              <i class="ico ico-jietu" @click="screenshot"></i>
            </el-tooltip>

            <i class="ico ico-luxiang-d" v-if="!isPlaying"></i>
            <template v-if="isPlaying">
              <el-tooltip class="item" effect="dark" content="开始录像" placement="top">
                <i class="ico ico-luxiang" v-show="!isRecord" @click="getVideo"></i>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="结束录像" placement="top">
                <i class="ico ico-luxiang_a" v-show="isRecord" @click="getVideoEnd"></i>
              </el-tooltip>
            </template>
            
            <i class="el-icon-loading" v-if="audio==3"></i>
            <i class="ico ico-yy_s" v-if="audio == 0"></i>
            <i class="ico ico-yy" @click="talk" v-if="audio == 1"></i>
            <i class="ico ico-yy_a" @click="stopTalk" v-if="audio == 2"></i>
            <span></span>
          </div>
          <div class="recordTime" v-show="isRecord">
            <i class="ico2 ico-dian"></i>
            <span>{{ h > 10 ? h : "0" + h }}</span>:<span>{{ m >= 10 ? m : "0" + m }}</span>:<span>{{ s >= 10 ? s : "0" + s }}</span>
          </div>
        </div>
        <div id="container" class="p_container" @click="playOrPause"></div>
        <div class="p_bottom_container">
          <div id="canvas-container" class="canvas-container" v-show="!isLive">
            <canvas id="canvas" v-if="!isStop" class="time-line-body" height="48px" width="960px" style="display: inline-block">
              该浏览器不支持canvas
            </canvas>
          </div>
          <div class="current-time" v-show="!isLive">{{ recordCurrentTime }}</div>

          <div class="p_bottom">
            <div class="scale">
              <i class="ico ico-jian" @click="onReduce" v-show="!isLive"></i>
              <div class="dot-container" v-show="!isLive">
                <div class="dot-container-dot"></div>
              </div>
              <i class="ico ico-jia" v-show="!isLive" @click="onAdd"></i>
            </div>

            <div>
              <el-tooltip class="item" effect="dark" content="倍速" placement="top">
                <el-button v-show="!isLive" size="mini" class="speed" @click="setSpeed">{{
                  speed + "X"
                }}</el-button>
              </el-tooltip>
              <span style="
                  width: 100px;
                  display: inline-block;
                  height: 20px;
                  margin-right: 20px;
                ">
                <el-slider v-model="volume" @change="setVolume"></el-slider>
              </span>
              <el-tooltip class="item" effect="dark" content="停止" placement="top">
                <span style="font-size: 12px; margin-right: 5px; cursor: pointer" @click="stop">停止</span>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="预览" placement="top">
                <i class="ico ico-yulan" @click="live"></i>
              </el-tooltip>

              <el-tooltip class="item" effect="dark" content="回放" placement="top">
                <i class="ico ico-huifang" @click="record"></i>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="全屏" placement="top">
                <i class="ico ico-quanping" @click="fullscreen"></i>
              </el-tooltip>
            </div>
          </div>
        </div>
        <el-dialog title="获取录播地址以及录播列表" :visible.sync="recordDialogVisible" width="50%" :modal-append-to-body="false" :before-close="handleClose">
          <el-form ref="recordform" :model="recordform" :rules="recordRules" label-width="100px">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
              <div slot="header">
                <span>获取token</span>
              </div>
              <el-form-item label="ak" prop="ak">
                <el-input v-model="recordform.ak" placeholder="ak"></el-input>
              </el-form-item>
              <el-form-item label="sk" prop="sk">
                <el-input v-model="recordform.sk" placeholder="sk"></el-input>
              </el-form-item>
              <el-button type="primary" size="mini" @click="getTokenRecord">获取token</el-button>
              <el-input type="textarea" v-model="tokenRecord" placeholder=""></el-input>
            </el-card>

            <el-card shadow="always" :body-style="{ padding: '20px' }">
              <div slot="header">
                <span>获取播放地址及播放列表</span>
              </div>
              <el-form-item label="开始时间" prop="start_time">
                <el-date-picker value-format="yyyyMMddHHmmss" v-model="recordform.start_time" type="datetime" placeholder="请选择开始时间"></el-date-picker>
              </el-form-item>

              <el-form-item label="结束时间" prop="end_time">
                <el-date-picker v-model="recordform.end_time" value-format="yyyyMMddHHmmss" type="datetime" placeholder="请选择结束时间"></el-date-picker>
              </el-form-item>
              <el-form-item label="回放类型" prop="playback_protocol">
                <el-select v-model="playback_protocol" placeholder="请选择回放类型">
                  <el-option v-for="item in recordTypeLists" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="设备序列号">
                <el-input v-model="recordform.deviceid"></el-input>
                <span class="msgt">提示：国标设备时请输入设备国标编码</span>
              </el-form-item>
              <el-form-item label="视频通道号">
                <el-input v-model="recordform.chanelid"></el-input>
              </el-form-item>
              <el-button type="primary" size="mini" @click="getlist">获取录像列表</el-button>
              <el-input type="textarea" v-model="recordList" placeholder=""></el-input>
              <el-button type="primary" size="mini" @click="getUrlRecord">获取url</el-button>
              <el-input type="textarea" v-model="recordUrl" placeholder=""></el-input>
            </el-card>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="recordSubmitForm('recordform')">播 放</el-button>
            <el-button @click="recordResetForm('recordform')">取 消</el-button>
          </span>
        </el-dialog>

        <el-dialog title="获取直播地址" :visible.sync="liveDialogVisible" width="50%" :modal-append-to-body="false" :before-close="liveHandleClose">
          <el-form ref="liveform" :model="liveform" :rules="liveRules" label-width="110px">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
              <div slot="header">
                <span>获取token</span>
              </div>
              <el-form-item label="ak" prop="ak">
                <el-input v-model="liveform.ak" placeholder="ak"></el-input>
              </el-form-item>
              <el-form-item label="sk" prop="sk">
                <el-input v-model="liveform.sk" placeholder="sk"></el-input>
              </el-form-item>
              <el-button type="primary" size="mini" @click="getTokenLive">获取token</el-button>
              <el-input type="textarea" v-model="tokenLive" placeholder=""></el-input>
            </el-card>
            <el-card shadow="always" :body-style="{ padding: '20px' }">
              <div slot="header">
                <span>获取直播地址</span>
              </div>
              <el-form-item label="设备序列号" prop="device_id">
                <el-input v-model="liveform.device_id" placeholder="设备序列号"></el-input>
                <span class="msgt">提示：国标设备时请输入设备国标编码</span>
              </el-form-item>
              <el-form-item label="视频通道号" prop="channel_id">
                <el-input v-model="liveform.channel_id" placeholder="视频通道号"></el-input>
              </el-form-item>
              <el-form-item label="流类型" prop="stream_type">
                <el-select v-model="liveform.stream_type" placeholder="请选择流类型">
                  <el-option label="主码流" :value="0">主码流</el-option>
                  <el-option label="次码流" :value="1">次码流</el-option>
                </el-select>
              </el-form-item>
              <el-button type="primary" size="mini" @click="getLiveUrl">获取直播地址</el-button>
              <el-input type="textarea" v-model="liveform.url" placeholder=""></el-input>
            </el-card>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="liveSubmitForm('liveform')">播 放</el-button>
            <el-button @click="liveResetForm('liveform')">取 消</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import JTimeLine from "./js/JtimeLine";
import dayjs from "dayjs";
export default {
  name: "player",
  components: {},
  data() {
    return {
      timerMs: 1000,
      h: 0,
      m: 0,
      s: 0,
      recordTime: null,
      isRecord: false,
      isStop: false,
      recordCurrentTime: this.date2str(new Date().getTime()),
      tokenRecord: "",
      tokenLive: "",
      recordUrl: "",
      recordList: "",
      jTimeLineArr: [],
      isPlaying: false,
      timeLineTimer: null,
      isLive: true,
      loadingState: false,
      recordDialogVisible: false,
      liveDialogVisible: false,
      playback_protocol: "device",
      // recordform: {
      //  ak: "25a98b8ab0764c539ec3c182fa24af49",
      //   sk: "38c7415a95014051a8e320963495db20",
      //   start_time: new Date(
      //     `2021-${new Date().getMonth() + 1}-${new Date().getDate()} 00:00:00`
      //   ),
      //   end_time: new Date(
      //     `2021-${new Date().getMonth() + 1}-${new Date().getDate()} 23:59:59`
      //   ),
      //   record_type: "",
      //   device_type: "GB28181",
      //   deviceid: "10000000001320000999",//12421SSKEAM5
      //   chanelid: "0",
      // },
      liveform: {
        url: "",
        ak: "25a98b8ab0764c539ec3c182fa24af49", //b7a4bcf2c25c4f39a8acf2510b7e26ad     25a98b8ab0764c539ec3c182fa24af49
        sk: "4865d8a03259f73198037df6e9895fd4", // 018dee82e2e058b904dcc475a050b8f1    38c7415a95014051a8e320963495db20
        live_protocol: "WSM",
        stream_type: 0,
        device_id: "12221S4QAL2L",//12421SSKEAM5 12421SS8JYBF  12345000001320000021     10000000001320000119  10000000001320000999
        channel_id: "0",
      },
      recordform: {
       ak: "25a98b8ab0764c539ec3c182fa24af49",
        sk: "4865d8a03259f73198037df6e9895fd4",
        start_time: new Date(
          `2021-${new Date().getMonth() + 1}-${new Date().getDate()} 00:00:00`
        ),
        end_time: new Date(
          `2021-${new Date().getMonth() + 1}-${new Date().getDate()} 23:59:59`
        ),
        record_type: "",
        device_type: "GB28181",
        deviceid: "12221S4QAL2L",//12421SSKEAM5
        chanelid: "0",
      },
      // liveform: {
      //   url: "",
      //   ak: "",
      //   sk: "",
      //   live_protocol: "WSM",
      //   stream_type: 0,
      //   device_id: "",//12421SSKEAM5  12345000001320000021     10000000001320000119  10000000001320000999 12421SS8JYBF
      //   channel_id: "0",
      // },
      recordTypeLists: [
        { id: "device", name: "设备端录像" },
        { id: "cloud", name: "云端录像" },
      ],
      loading: false,
      player: null,
      jTimeLine: null,
      playerStatePlaying: null,
      currentScale: 0,
      liveRules: {
        url: [{ required: true, message: "请输入直播地址", trigger: "blur" }],
      },
      recordRules: {},
      speed: "1",
      volume: 100,
      speedindex: 0,
      talkUrl: "",
      audio: 0,
      timer: null,
      network: false,
      records: 0,
      ontalk: false,
    };
  },
  mounted() {
    let Player = jPlayer.default;
    this.playerStatePlaying = jPlayer.playerStatePlaying; //1
    this.player = new Player(document.getElementById("container"));
    window.addEventListener("offline", () => {
      this.network = true;
      this.timer = setInterval(() => {
        this.records++;
      }, 1000);
    });
    window.addEventListener("online", () => {
      clearInterval(this.timer);
      if (this.records >= 15) {
        return;
      }
      if (this.network) {
        this.playVideo();
        this.network = false;
      }
      if (this.ontalk) {
        this.getTalkUrl();
      }
      this.timer = null;
    });
    // 未知错误
    this.player.event.on("UNKNOWN_ERROR", (s) => {
      this.$message.error(s.msg);
      this.isPlaying = false;
      this.isRecord = false;
      this.audio = 0;
      clearInterval(this.recordTime);
    });

    // 服务器服务已停止
    this.player.event.on("STOPPED", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    this.player.event.on("CLIENT_LINK_ERROR_ONE", async () => {
      // this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });
    this.player.event.on("CLIENT_LINK_ERROR_THREE", () => {
      // this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });
    // 服务器端用户主动断开
    this.player.event.on("USER_ABORT", (s,flag) => {
       if(flag == 'talk'){
        this.audio = 1;
        this.$message.error(s.msg);
      }else{
        this.$message.error(s.msg);
        this.audio = 0;
        this.isPlaying = false;
        this.isRecord = false;
        clearInterval(this.recordTime);
      }
    });

    // 服务器服务已中断
    this.player.event.on("ABORT", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 连接设备失败
    this.player.event.on("CONNECT_DEV_FAILED", (s,flag) => {

      if(flag == 'talk'){
        this.audio = 1;
        this.$message.error(s.msg);
      }else{
        this.$message.error(s.msg);
        this.audio = 0;
        this.isPlaying = false;
        this.isRecord = false;
        clearInterval(this.recordTime);
      }

    });

    // 订阅设备流失败
    this.player.event.on("SUBDEV_STREAM_ERR", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 不合法的上下文
    this.player.event.on("INVALID_CONTEXT", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 设备超时
    this.player.event.on("DEVICE_TIMEOUT", (s,flag) => {

      if(flag == 'talk'){
        this.audio = 1;
         this.$message.error("设备超时");
      }else{
        
        this.$message.error(s.msg);
        this.audio = 0;
        this.isPlaying = false;
        this.isRecord = false;
        clearInterval(this.recordTime);
      }

    });

    // 客户端超时
    this.player.event.on("CLIENT_TIMEOUT", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 超过设备最大连接数
    this.player.event.on("OVER_DEV_LIMIT", (s) => {
      this.$message.error(s.msg);
      this.audio = 0;
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });
    // 无权限
    this.player.event.on("PERM_DENIED", (s) => {
      this.$message.error(s.msg);
      this.isPlaying = false;
      this.audio = 0;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 数据超时
    this.player.event.on("DATA_TIMEOUT", (s) => {
      this.$message.error(s.msg);

      this.isPlaying = false;
      this.audio = 0;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 服务器端设备主动断开
    this.player.event.on("DEVICE_ABORT", (s,flag) => {
      if(flag == 'talk'){
        this.audio = 1;
        this.$message.error(s.msg);
      }else{
        console.log('服务器端设备主动断开18')
        this.$message.error(s.msg);
        this.isPlaying = false;
        this.audio = 0;
        this.isRecord = false;
        clearInterval(this.recordTime);
      }
    });

    // 服务器未准备好
    this.player.event.on("NOT_READY", (s) => {
      this.$message.error(s.msg);
      this.isPlaying = false;
      this.audio = 0;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 服务器流停止
    this.player.event.on("STREAM_STOP", (s) => {
      this.$message.error(s.msg);
      this.isPlaying = false;
      this.audio = 0;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    // 已达最大播放时长
    this.player.event.on("MAX_PLAY_DURATION_REACHED", (s,flag) => {
      this.$message.error('已达最大播放时长');
      this.audio = 0;
      this.player.stop();
      this.jTimeLine = null;
      this.isStop = true;
      let timer = setTimeout(() => {
        this.isStop = false;
        clearInterval(timer);
      });
      clearInterval(this.timeLineTimer);
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
      if (this.audio == 2) {
        this.player.talkDestroy();
      }
    });

    // wasm加载完成
    this.player.event.on("WASMLOADED", () => {
      console.log("WASMLOADED");
    });

    // 视频下载最大 超过100M 停止下载
    this.player.event.on("GET_VIDEO_MAX_END", () => {
      // 打开可以一直下载 直至手动关闭
      //this.getVideo();

      this.isPlaying = false;
      this.audio = 0;
      this.isRecord = false;
      clearInterval(this.recordTime);
    });

    this.player.event.on("MEDIA_ERROR", (s) => {
      this.$message.error(s.msg);
    });

    // 监听倍速
    this.player.event.on("speedNum", (s) => {
      this.speed = s;
      if (s == "0") {
        this.speed = "1";
      }
    });

    this.player.event.on("GET_MEDIA_PLAY", (s) => {
      this.isPlaying = true;
      console.log("GET_MEDIA_PLAY");
    });
    this.player.event.on("GET_MEDIA_STOP", (s) => {
      console.log('接收到停止了 GET_MEDIA_STOP')
      this.isPlaying = false;
      this.audio = 0;
      clearTimeout(this.recordTime);
    });
    this.player.event.on("GET_MEDIA_PAUSE", (s) => {
      this.isPlaying = false;
      this.audio = 0;
      clearTimeout(this.recordTime);
    });
    this.player.event.on("CLIENT_TALK_ERROR_ONE", (s) => {
      console.log('CLIENT_TALK_ERROR_ONE',s)
      this.audio = 1;
      switch (s.errCode) {
        case 1:
          this.$message.error("只支持单路对讲");
          break;
        case 2:
          this.$message.error("设备请求超时");
          break;
        case 3:
          this.$message.error("设备语音通道ID不匹配");
          break;
        case 4:
          this.$message.error("设备请求错误");
          break;
        default:
          break;
      }
    });

    this.player.event.on("CLIENT_TALK_END", (s) => {
      this.$message.error("已达最大对讲时间，对讲关闭");
      this.audio = 1;
    })

    this.player.event.on("CLIENT_TALK_ERROR_THREE", (s) => {
      this.audio = 1;
      this.$message.error("服务端请求超时");
    });

    this.player.event.on("GET_VISIBILITY_TALK_CHANGE", (s,g) => {
      if(s && this.ontalk){
        this.talk();
      }else{
        this.stopTalk2();
      }
    });

     this.player.event.on("GET_TALK_START", (s) => {
       this.audio = 2;
        this.$message.success("对讲开启成功");
     });
     this.player.event.on("GET_TALK_END", (s) => {
       this.audio = 1;
        this.$message.success("对讲结束成功");
     });

    
    
    //GET_DEVICE_RECORD_LIST
    this.player.event.on("GET_DEVICE_RECORD_LIST", (s) => {
      let recordList = s;
      console.log(s, "timelist");
      //通过回调来传递时间轴数据 初始化时间轴
      let recordArr = recordList.rec_file_infos;
      recordArr.forEach((item) => {
        item.startTime = dayjs(item.start_time).valueOf();
        item.endTime = item.startTime + item.duration;
      });
      this.jTimeLineArr = recordArr;
      this.initTimeLine();
      let timer = setInterval(() => {
        if (!this.player.loadingState) {
          clearInterval(timer);
          if (!this.isLive) {
            this.changeTimer();
          }
        }
      }, 1000);
    });
    this.player.stop();
  },
  methods: {
    // 调整声音
    setVolume(volume) {
      let vol = volume / 100;
      this.player.volume(vol);
    },
    showmessage(msg) {
      this.$message.error(msg);
    },
    stop() {
      this.audio = 0;
      this.player.stop();
      this.jTimeLine = null;
      this.isStop = true;
      let timer = setTimeout(() => {
        this.isStop = false;
        clearInterval(timer);
      });
      clearInterval(this.timeLineTimer);
      this.isPlaying = false;
      this.isRecord = false;
      clearInterval(this.recordTime);
      if (this.audio == 2) {
        this.player.talkDestroy();
      }
    },
    async getTokenRecord() {
      let { ak, sk } = this.recordform;
      let res = await this.$axios({
        method: "post",
        url: "/v1/api/token/get_token",
        data: { appKey: ak, appSecret: sk },
      });
      if (res.data.code == 1000) {
        this.tokenRecord = res.data.data.accessToken;
      } else {
        this.showmessage(res.data.msg);
      }
    },
    async getTokenLive() {
      let { ak, sk } = this.liveform;
      let res = await this.$axios({
        method: "post",
        url: "/v1/api/token/get_token",
        data: { appKey: ak, appSecret: sk },
      });
      if (res.data.code == 1000) {
        this.tokenLive = res.data.data.accessToken;
        localStorage.setItem("token", this.tokenLive);
      } else {
        this.showmessage(res.data.msg);
      }
    },
    async getLiveUrl() {
      this.liveform.url = "";
      let token = this.tokenLive;
      let {
        channel_id,
        device_id,
        live_protocol,
        stream_type,
      } = this.liveform;
      let params = {
        deviceSn: device_id,
        channelId: parseInt(channel_id),
        streamId: stream_type,
        protocolType: "wss",
      };
      let url = "/v1/api/device/video/get_realtime_url_standard";
      this.$axios({
        method: "post",
        url: url,
        data: params,
        headers: {
          "X-Token": token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.data.code == 1000) {
            this.liveform.url = res.data.data.url;
            if (!this.liveform.url) {
              this.$message.error("url 为空");
            }
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((res) => {
          this.$message.error(res.data.data.msg);
        });
    },
    async getlist() {
      this.recordList = "";
      let {
        start_time,
        end_time,
        record_type,
        deviceid,
        chanelid,
      } = this.recordform;
      start_time = this.date2str(start_time);
      end_time = this.date2str(end_time);
      record_type = record_type == "" ? undefined : record_type;
      let listParams = {
        startTime: start_time,
        endTime: end_time,
        deviceSn: deviceid,
        channelId: parseInt(chanelid),
        pageStart: 1,
        pageSize: 500,
      };
      let listUrlDevice = "/v1/api/device/record/get_record_list";
      let listUrlCloud = "/v1/api/device/cloudstorage/get_record_list";
      let listUrl = this.playback_protocol == "cloud" ? listUrlCloud : listUrlDevice;
      let [res_list] = await this.$axios.all([
        this.getRecordList(listParams, encodeURI(listUrl)),
      ]);
      if (res_list.data.code == 1000) {
        this.recordList = JSON.stringify(res_list.data.data.items) || "";
        let recordArr = res_list.data.data.items;

        recordArr.forEach((item) => {
          item.startTime = dayjs(item.startTime).valueOf();
          item.endTime = dayjs(item.endTime).valueOf();
        });
        this.jTimeLineArr = recordArr;
        if (!this.recordList) {
          this.$message.error("设备录像列表为空");
        }
      } else {
        this.$message.error(res_list.data.msg);
      }
    },
    async getUrlRecord() {
      if (!this.recordList) {
        this.$message.error("设备录像列表为空");
        return;
      }
      this.recordUrl = "";
      let {
        start_time,
        end_time,
        record_type,
        deviceid,
        chanelid,
      } = this.recordform;
      start_time = this.date2str(start_time);
      end_time = this.date2str(end_time);
      record_type = record_type == "" ? undefined : record_type;
      let urlParams = {
        startTime: start_time,
        endTime: end_time,
        deviceSn: deviceid,
        channelId: parseInt(chanelid),
      };
      let deviceUrl = "/v1/api/device/video/get_playback_wss_url_bytime";

      let cloudUrl = "/v1/api/device/cloudstorage/get_playback_wss_url_bytime";
      let url = this.playback_protocol == "cloud" ? cloudUrl : deviceUrl;
      // 获取录播地址 和 列表
      // if(this.playback_protocol=='cloud'){//只有云存录像,国标设备 需要拉列表
      let [res_url] = await this.$axios.all([
        this.getUrl(urlParams, encodeURI(url)),
      ]);
      if (res_url.data.code == 1000) {
        this.recordUrl = res_url.data.data.url;
        if (!this.recordUrl) {
          this.$message.error("url 设备录像播放地址为空");
        }
      } else {
        this.$message.error(res_url.data.msg);
      }
    },
    getUrl(params, url) {
      let token = this.tokenRecord;
      return this.$axios({
        method: "post",
        url: url,
        data: params,
        headers: {
          "X-Token": token,
          "Content-Type": "application/json",
        },
      }).catch((res) => {
        this.$message.error(res.response.data.error_msg);
      });
    },
    getRecordList(params, url) {
      let token = this.tokenRecord;
      return this.$axios({
        method: "post",
        url: url,
        data: {},
        data: params,
        headers: {
          "X-Token": token,
          "Content-Type": "application/json",
        },
      }).catch((res) => {
        this.$message.error(res.response.data.error_msg);
      });
    },
    handleTimeChange(nowTime) {
      let start_time = dayjs(nowTime).format("YYYYMMDDHHmmss")+'000';
      this.player.seekTo(nowTime,start_time);
      // seek后要将speed置为1状态；
      this.speed = 1;
    },
    initTimeLine() {
      this.isStop = false;
      this.jTimeLine = null;
      this.currentScale = 0;
      this.speed = 1;
      this.jTimeLine = new JTimeLine();
      this.jTimeLine.init({
        id: "canvas",
        onChange: this.handleTimeChange,
      });
      this.mathchDot(0);

      let arr2 = this.jTimeLineArr;
      this.jTimeLine.getRecord(arr2);
      this.jTimeLine.run({ time: dayjs(arr2[0].startTime).valueOf() });
      this.recordCurrentTime = this.date2str(
        parseInt(dayjs(arr2[0].startTime).valueOf()),
        "YYYY-MM-DD HH:mm:ss"
      );
    },
    playVideo() {
      if (this.player.getState() == 0) {
        if (this.isLive) {
          this.audio = 1;
        } else {
          this.audio = 0;
        }
        let el = document.getElementById("container");
        let options = {
          url: this.isLive ? this.liveform.url : this.recordUrl,
          endtime: this.isLive ? null : this.recordform.end_time,
          isStream: this.isLive,
          encrypted_key: "",
          encrypted_iv: "",
          encrypted_type: "",
          prefixPath:"/websdk/"
        };
        this.player.play(options);
      } else {
        this.player.stop();
        this.player.talkDestroy();
      }
    },
    playOrPause() {
      // state 1 播放
      if (this.player.getState() == 1) {
        if (this.isLive) {
          // this.player.stop();
        } else {
          this.player.pause();
        }
      } else if (this.player.getState() == 0) {
        // state 0 空闲
        if (this.isLive) {
          // if (this.liveform.url) {
          //   this.playVideo();
          // } else {
          //   this.liveDialogVisible = true;
          // }
        } else {
          this.recordDialogVisible = true;
        }
      } else {
        // state 2 暂停
        if (this.isLive) {
          // this.playVideo();
        } else {
          this.player.resume();
        }
      }
    },
    liveSubmitForm(formName) {
      localStorage.setItem("deviceid", this.liveform.device_id);
      localStorage.setItem("chanelid", this.liveform.channel_id);
      this.jTimeLine = null;
      clearInterval(this.timeLineTimer);
      if (this.player.getState() != 0) {
        this.player.stop();
        if (this.audio == 2) {
          this.player.talkDestroy();
        }
        setTimeout(() => {
          this.liveDialogVisible = false;
          this.isLive = true;
          this.playVideo();
        }, 1000);
      } else {
        this.liveDialogVisible = false;
        this.isLive = true;
        setTimeout(() => {
          this.playVideo();
        }, 1000);
      }
    },
    recordSubmitForm(formName) {
      localStorage.setItem("deviceid", this.recordform.deviceid);
      localStorage.setItem("chanelid", this.recordform.chanelid);
      this.jTimeLine = null;
      clearInterval(this.timeLineTimer);
      if (this.player.getState() != 0) {
        this.stop();
        this.player.event.once("GET_MEDIA_STOP", () => {
          this.recordPlay();
        });
      } else {
        this.recordPlay();
      }
    },
    recordPlay() {
      this.recordDialogVisible = false;
      this.isLive = false;
      this.audio = 0;
      setTimeout(() => {
        this.playVideo();
        if (
          this.playback_protocol == "cloud" ||
          this.recordform.device_type == "GB28181"
        ) {
          this.initTimeLine();
          let timer = setInterval(() => {
            if (!this.player.loadingState) {
              clearInterval(timer);
              if (!this.isLive) {
                this.changeTimer();
              }
            }
          }, 1000);
        }
      }, 1000);
    },
    changeTimer() {
      if (this.timeLineTimer) {
        clearInterval(this.timeLineTimer);
        if (!this.jTimeLine) {
          return;
        }
        this.timeLineTimer = setInterval(() => {
          let CurTime = parseInt(this.player.getCurTimestamp())+'';
          if(CurTime.length == 14){
            this.recordCurrentTime = this.setTime(CurTime);
            this.jTimeLine.run({ time: parseInt(new Date(this.recordCurrentTime).getTime()) });
          }else{
            this.recordCurrentTime = this.date2str(parseInt(this.player.getCurTimestamp()),"YYYY-MM-DD HH:mm:ss");
            this.jTimeLine.run({ time: parseInt(this.player.getCurTimestamp())});
          }
          console.log("定时器" + this.timerMs);
          console.log("定时器时间戳" + new Date(this.recordCurrentTime).getTime());
        }, this.timerMs);
      } else {
        if (!this.jTimeLine) {
          return;
        }
        this.timeLineTimer = setInterval(() => {
          let CurTime = parseInt(this.player.getCurTimestamp())+'';
          if(CurTime.length == 14){
            this.recordCurrentTime = this.setTime(CurTime);
            this.jTimeLine.run({ time: parseInt(new Date(this.recordCurrentTime).getTime()) });
          }else{
            this.recordCurrentTime = this.date2str(parseInt(this.player.getCurTimestamp()),"YYYY-MM-DD HH:mm:ss");
            this.jTimeLine.run({ time: parseInt(this.player.getCurTimestamp())});
          }
          console.log("定时器" + this.timerMs);
          console.log("定时器时间戳" + new Date("2021-11-11 11:37:02").getTime());
        }, this.timerMs);
      }
    },
    recordResetForm(formName) {
      this.recordDialogVisible = false;
    },
    liveResetForm(formName) {
      this.liveDialogVisible = false;
    },
    handleClose() {
      this.recordDialogVisible = false;
    },
    liveHandleClose() {
      this.liveDialogVisible = false;
    },
    record() {
      this.recordDialogVisible = true;
    },
    live() {
      this.liveDialogVisible = true;
    },
    fullscreen() {
      this.player.fullscreen();
    },
    async screenshot() {
      if (this.player.getState() == 1) {
        this.player.snapshot();
        this.$message.success("图片已保存至浏览器默认下载地址");
      } else {
        this.$message.error("截图失败");
      }
    },
    setSpeed() {
      if (this.player.getState() == 2) return;
      const arr = ["1", "2", "4", "8", "4", "2", "1", "1/2", "1/4", "1/8", "1/4", "1/2"];
      const arr2 = [1, 2, 4, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.25, 0.5];
      this.speedindex++;
      if (this.speedindex == 12) {
        this.speedindex = 0;
      }
      this.speed = arr[this.speedindex];
      this.player.setSpeed(arr2[this.speedindex] + "");
      this.timerMs = parseInt(1000 / arr2[this.speedindex]);
      this.changeTimer();
    },
    getVideo() {
      this.player.recoderStart();
      this.isRecord = true;
      this.h = 0;
      this.m = 0;
      this.s = 0;
      this.recordTime = setInterval(() => {
        this.s++;
        if (this.s >= 60) {
          this.m++;
          this.s = 0;
          if (this.m >= 60) {
            this.h++;
            this.s = 0;
            this.m = 0;
          }
        }
      }, 1000);
    },
    getVideoEnd() {
      this.player.recoderPause();
      this.isRecord = false;
      this.h = 0;
      this.m = 0;
      this.s = 0;
      clearTimeout(this.recordTime);
      this.$message.success("录像已保存至浏览器默认下载地址");
    },
    mathchDot(currentScale) {
      var position = 0;
      switch (currentScale) {
        case 0:
          (position = 0), this.jTimeLine.changeSize(0);
          break;
        case 1:
          (position = 30), this.jTimeLine.changeSize(1);
          break;
        case 2:
          (position = 60), this.jTimeLine.changeSize(2);
          break;
        case 3:
          (position = 100), this.jTimeLine.changeSize(3);
      }
      document.getElementsByClassName("dot-container-dot")[0].style.left = position + "%";
    },
    onReduce() {
      this.currentScale > 0 && (--this.currentScale, this.mathchDot(this.currentScale));
    },
    onAdd() {
      this.currentScale < 3 && (++this.currentScale, this.mathchDot(this.currentScale));
    },
    date2str(date, formatstr = "YYYYMMDDHHmmss") {
      return dayjs(date).format(formatstr);
    },

    setTime(data){
      var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
      var formatedDate = data.replace(pattern, '$1-$2-$3 $4:$5:$6');
      return formatedDate
    },
    /**
     * 对讲
     * */

    getTalkUrl() {
      let talkparams = {
        deviceSn: localStorage.getItem("deviceid") || "",
        channelId: localStorage.getItem("chanelid") || "",
      };
      let token = this.tokenRecord || localStorage.getItem("token");
      this.$axios({
        method: "post",
        url: "/v1/api/device/video/get_voice_url_wss",
        data: talkparams,
        headers: {
          "X-Token": token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.data.code == 1000) {
            this.talkUrl = res.data.data.url;
            this.player.talk(this.talkUrl);
            
            this.ontalk = true;
          } else {
            this.audio=1;
            this.$message.error(res.data.msg);
          }
        })
        .catch((res) => {
          this.audio=1;
          this.$message.error(res.response.data.error_msg);
        });
    },

    talk() {
      this.audio=3;
      this.getTalkUrl();
    },
    // 切换页面的关闭对讲
    stopTalk2() {
      this.audio = 1;
      this.player.talkDestroy();
    },
    stopTalk() {
      this.audio = 3;
      this.ontalk = false;
      this.player.talkDestroy();
    },
  },
};
</script>

<style lang="less" scoped>
#player {
  width: 960px;
  .p_top {
    height: 48px;
    background: #292b36;
    padding: 14px 21px 0 21px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .p_container {
    overflow: hidden;
    position: relative;
    height: 540px;
    width: 960px;
    background: #000;
    // text-align: center;
  }
  .p_bottom_container {
    position: relative;
    width: 960px;
    .p_bottom {
      width: 960px;
      position: absolute;
      height: 48px;
      background: #292b36;
      padding: 14px 21px 0 21px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .scale .dot-container {
        display: inline-block;
        height: 16px;
        width: 60px;
        position: relative;
        background: #fff;
        height: 2px;
        margin: 7px 10px;
        line-height: 16px;
        vertical-align: middle;
        .dot-container-dot {
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 100%;
          top: -3.5px;
          left: 0;
        }
      }
    }
    .current-time {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 12px;
      z-index: 99;
      background: #06070b;
      border-radius: 12px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      width: 176.5px;
    }
    .canvas-container {
      position: absolute;
      top: -48px;
      opacity: 0.8;
      background: #292b36;
      width: 960px;
      z-index: 100;
      height: 48px;
    }
  }

  .ico {
    min-width: 22px;
    min-height: 22px;
    margin-right: 4px;
    display: inline-block;
    cursor: pointer;
    // background-size: 100% 100%;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
  }
  .ico2 {
    min-width: 3px;
    min-height: 3px;
    margin-right: 3px;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
  }
  .ico-guanbi {
    background-image: url("~@/assets/gb.png");
  }
  .ico-huifang {
    background-image: url("~@/assets/hf.png");
  }
  .ico-jia {
    background-image: url("~@/assets/j.png");
  }
  .ico-jian {
    background-image: url("~@/assets/ja.png");
  }
  .ico-jietu {
    background-image: url("~@/assets/jie.png");
  }
  .ico-jietu-d {
    background-image: url("~@/assets/jie_d.png");
  }
  .ico-luxiang {
    background-image: url("~@/assets/lx.png");
  }
  .ico-luxiang-d {
    background-image: url("~@/assets/lx_d.png");
  }
  .ico-luxiang_a {
    background-image: url("~@/assets/luxiang_a.png");
    background-repeat: no-repeat;
  }
  .ico-quanping {
    background-image: url("~@/assets/qp.png");
  }
  .ico-yulan {
    background-image: url("~@/assets/yl.png");
  }
  .ico-zhankai {
    background-image: url("~@/assets/zk.png");
  }
  .ico-dian {
    background-image: url("~@/assets/dian.png");
  }
  .ico-yy {
    background-image: url("~@/assets/yy.png");
  }
  .ico-yy_s {
    background-image: url("~@/assets/yy_s.png");
  }
  .ico-yy_a {
    background-image: url("~@/assets/yy_a.png");
  }
}
.iconPlay {
  width: 120px;
  height: 120px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.speed {
  background: rgba(255, 255, 255, 0.1);
  display: inline-block;
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 10px;
  color: #fff;
  margin-right: 8px;
  border: #ccc 1px solid;
}
</style>
<style>
.el-loading-spinner i {
  font-size: 30px;
}
.el-dialog__footer {
  text-align: center !important;
}
.recordTime {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 63px;
  z-index: 9999;
  color: #fff;
  opacity: 0.9;
  background: #292b36;
  border-radius: 4px;
  border-radius: 100px;
  width: 81px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
}
.msgt {
  font-size: 12px;
  color: #606266;
}
</style>
