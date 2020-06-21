<template>
  <div id="app">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <router-link to="/menu1">Menu-Demo</router-link>
        </li>
        <li>
          <router-link to="/menu2">Menu-学生信息</router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <hr>
    <div id='storeDemo'>
      <h3> Store-Demo: </h3>
<!--      {{$store.state.name }}<br>-->
      {{$store.getters.current}}<br>
      <input type="text" v-model="sayMsg">
      <button @click="saySth()"> Say</button>
    </div>
  </div>
</template>

<script>
    import Index from './components/Index'
    import Menu1 from "./components/menu1/Menu1";

    export default {
        name: 'App',
        components: {
            Index,
            Menu1
        },
        data() {
            return {
                sayMsg: ''
            }
        },
        methods: {
            saySth() {
                // this.$store.commit('say', this.sayMsg) // 直接提交
                this.$store.dispatch('asynchronousSay', this.sayMsg) // 异步操作
                this.sayMsg = '';
            }
        },
        computed:{
            // 方法值计算一次，常用作缓存
        }
    }
</script>

<style scoped>
  ul li {
    float: left;
    padding-left: 20px;
    list-style-type: none;
  }

  ul li a {
    text-decoration: none;
  }

  .content {
    clear: both;
    padding: 60px;
  }
</style>
