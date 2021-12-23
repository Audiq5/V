<template>
  <div>
    <h3>{{ $store.state.info }}</h3>
    <button @click="xiugai">修改信息</button>
    <h3>--------action-------</h3>
    <button @click="upinfo">异步修改信息</button>
    <h3>{{ $store.state.info }}</h3>

    <h3>{{ $store.state.counter }}</h3>
    <button @click="my">+</button>
    <button @click="you">-</button>
    <h3>{{ $store.state.stu }}</h3>

    <button @click="inc(5)">+5</button>
    <button @click="inc(10)">+10</button>

    <button @click="incStu">增加学生</button>

    <h3>--------getters-------</h3>
    <!-- <h3>{{$store.getters.pingfang}}</h3> -->
    <h3>{{ $store.getters.pingfang }}</h3>

    <h3>{{ $store.getters.more }}</h3>
    <h3>{{ $store.getters.morelength }}</h3>
    <h3>{{ $store.getters.moreAgeStu(25) }}</h3>

    <h3>------组件信息------</h3>
    <my-vuex />
  </div>
</template>

<script>
import MyVuex from "./components/MyVuex";
export default {
  components: {
    MyVuex
  },
  methods: {
    my() {
      // 执行mutation里面的方法 jia
      this.$store.commit("jia");
    },
    you() {
      this.$store.commit("jian");
    },
    inc(count) {
      // 向mutation提交count过去
      // this.$store.commit('inccount',count)
      // 特殊的提交封装
      this.$store.commit({
        type: "inccount",
        count
      });
    },
    incStu() {
      const student = { id: 5, name: "rw", age: 16 };
      //
      this.$store.commit("incStu1", student);
    },
    xiugai() {
      this.$store.commit("xiu");
    },
    upinfo() {
      // 向actions提交异步操作
      this.$store.dispatch("ainfo");
    }
  },
  computed: {
    // more20stu(age){
    //   this.$store.commit('more',age)
    // }
  }
};
</script>

<style></style>
