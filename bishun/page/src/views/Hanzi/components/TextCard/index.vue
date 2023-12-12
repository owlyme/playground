<script setup>
import {ref} from "vue"
import { Divider} from "vant"
import PinYin from '../WordPinyin/index.vue'
import WordPath from '../WordPath/index.vue'
import Path from '../WordPath/Path.vue'

const props = defineProps({
  wordInfo: {
    type: Object,
    required: true,
    default: () => ({
      cn: '朝',
      img: '/b49e14ddc427711e5be06c8e0eb15ce01.gif',
      pinyin:'chao',
      baiduUrl: 'https://hanyu.baidu.com/zici/s?from=aladdin&srcid=51368&wd=朝',
      path: []
    })
  }
})

const imgErr = ref(false);

</script>

<template>
  <div class="word-box">
    <div class="word-top">
      <Path v-if="imgErr" :pathes="wordInfo.path" :red-index="99" />
      <img v-else class="word-img" v-baidugifsrc="wordInfo.cn" @error="() => {
        imgErr = true
      }" />
      <PinYin :pinyin="wordInfo.pinyin"/>
      <a class="word-baiduUrl" v-baidupagehref="wordInfo.cn">百度查看</a>
    </div>
    <Divider />
    <div class="word-path"> 
      <WordPath
        v-for="(item, index) in wordInfo.path"
        :pathes="wordInfo.path"
        :red-index="index"
        :key="index"
      />
    </div>
  </div>
</template>
<!-- -->
<style scoped>
.word-box {
  width: 100%;
  height: 75vh;
  overflow: auto;
}
.word-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.word-img {
  width: 100px;
  height: 100px;
  display: block;
}
.word-path{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.word-cn {
}
.word-baiduUrl {

}
</style>
