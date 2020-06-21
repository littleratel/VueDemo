<template>
  <div class="menu">
    <a :href="webSite.url" :title="webSite.title" target="_blank">
      <img src="../../assets/aaa.gif" height="300" width="600">
      <!--      <img src="../assets/landscape.jpg" height="300" width="600">-->
    </a>

    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a :href="webSite.url + menu.id" target="_blank">{{menu.name}}</a>
      </li>
    </ul>

    <br>
    <br>
    <div class="addmenu">
      <input type="text" v-model="newMenu">
      <button @click="add">&nbsp 添加 &nbsp</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Menu',
        // 生命接受属性名称
        // props: ["menus", "webSite", "addMenu"],
        props: ["menus", "webSite"],  // 2. 自定义事件
        data() {
            return {
                newMenu: ""
            }
        },
        methods: {
            add(newMenu) {
                console.info(newMenu);
                const meun = this.newMenu.trim();
                if (!meun) {
                    alert("菜单名称不能为空！！！")
                    return;
                }

                // this.addMenu(meun); // 1.
                this.$emit('addMenu', meun); // 2. 出发自定义事件
            }

    }
    }
</script>

<style scoped>
  ul li {
    float: left;
    padding-left: 10px;
    list-style-type: none;
  }

  .addmenu {
    float: left;
    padding-left: 50px;
  }
</style>
