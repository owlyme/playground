const errCode= function(code , fun){
  if(code==1001){
    fun('参数错误')
  }else if(code==1002){
    fun('请求异常')
  }else if(code==1006){
    fun('AccessToken过期或异常')
  }else if(code==2002){
    fun('设备不在线')
  }else if(code==2008){
    fun('设备不存在')
  }else if(code==2009){
    fun('视频通道号不合法')
  }else if(code==4001){
    fun('获取视频链接地址异常')
  }
};

export default {errCode}