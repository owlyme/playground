<script setup>
import { computed } from 'vue'

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
  lastRed: {
    type: Boolean,
    default: false
  }
})

function resortPath(pathes = [], redIndex = 0) {
  const _pathes = [...pathes]
  const redPath = _pathes.splice(redIndex, 1)
  const blackPath = _pathes.splice(0, redIndex)

  return [..._pathes, ...blackPath, ...redPath]
}

const newPahths = computed(() => {
  //  const _pathes = [...props.pathes]
  //  const redPath = _pathes.splice(props.redIndex, 1);
  //  return _pathes.concat(redPath)

  return resortPath(props.pathes, props.redIndex)
})

const newRedIndex = computed(() => {
  console.log('newRedIndex', props.lastRed)

  return props.lastRed ? newPahths.value.length - 1 : 999
})
</script>

<template>
  <div class="word-path">
    <svg>
      <g transform="translate(3, 70) scale(0.07, -0.07)">
        <!-- 先将完整的字以灰色字体绘制完成，层级位于下面 -->
        <path
          v-for="(path, index) in newPahths"
          :d="path"
          :key="index"
          :style="`fill: ${
            // index === redIndex ? '#FF1111' : index < redIndex ? '#1F1F1F' : '#b8b8b8'
            index === newRedIndex ? '#FF1111' : index < redIndex ? '#1F1F1F' : '#b8b8b8'
          }`"
        ></path>
      </g>
    </svg>
  </div>
</template>
<!-- -->
<style scoped>
.word-path {
  width: 83px;
  height: 86px;
  background-image: url(/pic/tianzige.jpg);
  background-size: 100% 100%;
  margin-right: 3px;
  border-radius: 5px;
  border: 1px solid #b8b8b8;
}
svg {
  width: 83px;
  height: 83px;
}
</style>
