<script setup>
import Path from "./Path.vue"
import Pic from "./Pic.vue"
const props = defineProps({
  pathes: {
    type: Array,
    required: true,
    default: () => []
  },
  redIndex: {
    type: Number,
    required: true,
    default: 0
  },
  word: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div >
    <!-- <Path :pathes="props.pathes" :redIndex="props.redIndex" lastRed /> -->
    <Pic :redIndex="props.redIndex" :word="props.word" />
    <div class="path-num">
     第 {{ redIndex + 1 }} 笔
    </div>
  </div>
</template>
<!-- -->
<style scoped>
.path-num {
  text-align: center;
  margin-top: 2px;
  width: 83px;
}
</style>
