<template>
  <div class="home">
    <input type="text" v-model="inputVal" />
    <button @click="clickEventBind">提交</button>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: "home",
  data() {
    return {
      inputVal: ""
      // list:[]
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    clickEventBind() {
      this.$store.commit("EventValue", this.inputVal);
      this.inputVal = "";
    }
  },
  watch: {
    //监听input value值得变化
    inputVal(v) {
      // console.log(v,'v')
    }
  },
  components: {
  }
};
</script>
