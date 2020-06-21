// Getter, 就是一个“取”的操作，来拿 state 里面的数据。
const getters = {
  current(state) {
    return state.name
  }
}

export default getters;
