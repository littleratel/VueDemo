<template>
  <div id="app">
    <div class="menu">
      <ul>
        <li>
          <!--          <a href="">首页</a>-->
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <router-link to="/menu1">菜单Menu</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
            return {}
        },
        methods: {}
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
