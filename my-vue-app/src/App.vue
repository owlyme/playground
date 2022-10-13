<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import {
  ref,
  onMounted,
  watch,
  computed,
  reactive,
  toRefs,
  shallowRef,
  watchEffect,
  triggerRef,
} from "vue";

export default {
  setup(props) {
    const counter = ref(0);
    const value = ref("请输入");
    const obj = reactive({
      name: "00",
      age: "00",
    });

    let { name, age } = toRefs(obj);
    const list = ref([]);

    onMounted(() => {
      console.log("onMounted");
    });

    const todoLength = computed(() => "当前有" + list.value.length + "项");

    const shallow = shallowRef({
      greet: "Hello, world",
    });


    watch(
      () => shallow.value.greets,
      (val) => {
        console.log(val);
        obj.age = val;
        age = val;
      }
    );

    // 第一次运行时记录一次 "Hello, world"
    watchEffect(() => {
      console.log(shallow.value.greet);
    });

    // 这不会触发作用 (effect)，因为 ref 是浅层的
    shallow.value.greet = "Hello, universe";

    // 记录 "Hello, universe"
    setTimeout(() => {  
      triggerRef(shallow);
    }, 4000)
        

    return {
      name,
      age,
      value,
      counter,
      list,
      todoLength,
      obj,
      onDel(index) {
        list.value.splice(index, 1);
      },
      onAddItem() {
        list.value.push(value.value);
        obj.name = value.value;
        name = value.value;
        value.value = "请输入";
      },
      onCream() {
        counter.value++;
      },
      onInputChange(e) {
        console.log(e.target.value);
        value.value = e.target.value;
      },
    };
  },
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    getData() {
      console.log(this.counter, this.value, this.list);
    },
  },
};
</script>

<template>
  <div>
    <span v-pre>{{ this will not be compiled }}</span>
    <div>{{ name }} |{{ obj.name }} {{ age }} | {{ obj.age }}</div>
    <div>
      counter: {{ counter }}
      <button @click="onCream">+ increame</button>
    </div>
    <div>
      <button @click="getData">getData</button>
    </div>
    <div>
      <input type="text" v-model="value" />
      <button @click="onAddItem">+ add</button>
    </div>
    <div>
      {{ todoLength }}
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
        <button @click="onDel(index)">- del</button>
      </li>
    </ul>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
