<template>
  <div>
    <div class="main">
      <div class="menu">
        <ul>
          <li>
            <router-link to="/menu1/subMenu1">子菜单1</router-link>
          </li>
          <li>
            <router-link to="/menu1/subMenu2">子菜单2</router-link>
          </li>
        </ul>
      </div>

      <div class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Menu1"
    }
</script>

<style scoped>
  .main {
    display: flex;
  }

  .content {
    padding: 100px;
  }
</style>
