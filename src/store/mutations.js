export default {
  jia(state) {
    state.counter++;
  },
  jian(state) {
    state.counter--;
  },
  // mutation第二个参数可以携带参数payload
  inccount(state, payload) {
    // payload是个对象，其内部包含所过来的参数count，直接调用
    return (state.counter += payload.count);
  },
  incStu1(state, student) {
    state.stu.push(student);
  },
  xiu(state) {
    // return Vue.set(state.info, "name", "hh");
    return (state.info.name = "hh");
  },
  auinfo(state) {
    state.info.name = "hh";
  }
};
