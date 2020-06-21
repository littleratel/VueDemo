/**
 * 由于直接在mutation方法中进行异步操作，将会引起数据失效, 所以提供了Actions来专门进行异步操作，但是最终提交还是mutation方法
 * Actions中的方法有两个默认参数
 * 1. context 上下文(相当于箭头函数中的this)对象
 * 2. payload 挂载参数
 * */
const actions = {

  asynchronousSay(context, payload) {
    //承诺将来会执行
    return new Promise((resolve, reject) => {
      // setTimeout(callback, 1000); // 1秒后调用callback函数
      console.log('actions before setTimeout.');
      setTimeout(() => {
        context.commit('say', payload)
        resolve()
      }, 20)
      console.log('actions after setTimeout.');
    });
  }

}

export default actions
