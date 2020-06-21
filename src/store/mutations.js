import Base from "./mutations_type"

const mutations = {
  say(state, payload) {
    console.log("payload is " + payload.trim() + ", and len is " + payload.trim().length)
    if (payload.trim().length === 0) {
      console.log("payload len is " + payload.trim().length)
      state.name = Base.DEFAULT_NAME
      return
    }
    state.name = payload;
  }
}

export default mutations
