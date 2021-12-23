export default{
  
    pingfang(state) {
      return state.counter * state.counter;
    },
    more(state) {
      return state.stu.filter(s => s.age > 18);
    },
    morelength(state, getters) {
      return getters.more.length;
    },
    moreAgeStu(state) {
      return function(age) {
        return state.stu.filter(s => s.age > age);
      };
    }
  
}