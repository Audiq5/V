export default{
  ainfo(context){
    setTimeout(() => {
      // context相当于store，这里actions里面不能修改state的状态，
      // 必须提交给mutation去修改
      context.commit('auinfo')
    },1000)
  }
}
