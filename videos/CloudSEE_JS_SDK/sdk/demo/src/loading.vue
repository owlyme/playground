<template>
  <div>
    <div
      style="top: 50%;margin-top: -21px;width: 100%;text-align: center;position: absolute;"
      @click="alert('00')"
    >
      <img src="./assets/hf.png" alt="">  
      <p style="color: #A4A9B3;margin: 3px 0;font-size: 14px;">视频连接中...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    alert(a) {
      alert(a);
    },
  },
};
</script>

<style></style>
