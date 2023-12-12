<script setup>
import { watch, reactive, ref } from 'vue'
import { Swipe, SwipeItem, Popup } from 'vant'
import TextCard from '../TextCard/index.vue'
import Path from '../WordPath/Path.vue'

const props = defineProps({
  words: {
    type: String,
    required: true
  }
})

const wordsList = reactive({
  list: [],
  hanziLib: window.hanziLib || {}
})

const showPop = reactive({
  show: false,
  index: 0
})

watch(
  () => props.words,
  (newWord, oldWord) => {
    // if (!newWord) return
    
    const unClectedWords = {};
    wordsList.list = [];
    newWord.replace(/[^\u4e00-\u9fa5]/g, '').split('').forEach((word, index) => {
     
      if (wordsList.hanziLib[word]) {
        wordsList.list[index] = wordsList.hanziLib[word]
      } else {
        if (unClectedWords[word]) unClectedWords[word].push(index)
        unClectedWords[word] = [index]
      }
    })

    const words = Object.keys(unClectedWords).join('')
    if (!words) return
    // fetch('http://localhost:3000/api/fetch/bishu?wd=' + words)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     res.forEach((item) => {
    //       const wd = item.cn
    //       if (unClectedWords[wd] === undefined || !item.detail) return
    //       unClectedWords[wd].forEach((strIndex) => {
    //         wordsList.list[strIndex] = item
    //       })
    //     })
    //   })
  }
)
</script>

<template>
  <div class="flex-box">
    <div
      v-for="(item, index) in wordsList.list"
      :key="index"
      :class="{active: showPop.index == index}"
      @click="
        () => {
          showPop.show = true
          showPop.index = index
        }
      "
    >
      <!-- <img class="word-gif" v-baidugifsrc="(item || {}).cn" /> -->
      <Path :pathes="(item || {}).path" :redIndex="100" />
    </div>

    <Popup
      lock-scroll
      round
      position="bottom"
      v-model:show="showPop.show"
      @close="
        () => {
          showPop.show = false
        }
      "
    >
      <Swipe lazy-render :initial-swipe="showPop.index" :loop="false" @change="(index) => {
        showPop.index = index
      }">
        <SwipeItem
          v-for="(item, index) in wordsList.list"
          :key="index"
          style="width: calc(100vw - 20px); padding: 10px"
        >
          <TextCard :wordInfo="item"></TextCard>
        </SwipeItem>
      </Swipe>
    </Popup>
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;
  flex-wrap: wrap;
}
.word-gif {
  width: 100px;
  height: 100px;
}
.active /deep/ .word-path{
  border: 1px solid red;
}
</style>/
