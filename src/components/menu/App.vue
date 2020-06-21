<template>
  <div id="app">
    <!--    <Menu :menus="menus" :webSite="webSite" :addMenu="addMenu"></Menu>-->
    <Menu :menus="menus" :webSite="webSite" @addMenu="addMenu"></Menu>
  </div>
</template>

<script>
    import Menu from './components/menu/Menu'

    export default {
        name: 'App',
        components: {
            Menu
        },
        data() {
            return {
                menus: [
                    {id: 1, name: "科技"},
                    {id: 2, name: "教育"},
                    {id: 3, name: "军事"},
                    {id: 4, name: "文化"},
                    {id: 5, name: "娱乐"}
                ],
                webSite: {
                    url: "http://localhost:8888/menulist/",
                    title: "girls, how are doing."
                }
            }
        },
        methods: {
            addMenu(menuElement) {
                console.info("menuElement is:" + menuElement)
                let exists = false;
                // this.menus.some(item => {
                //     if (item.name === menuElement) {
                //         exists = true;
                //         return exists;
                //     }
                // })

                this.menus.find(item => {
                    if (item.name === menuElement) {
                        exists = true;
                        return exists;
                    }
                })

                if (exists) {
                    console.info(menuElement + " already exists!")
                    alert(menuElement + " already exists!")
                    return;
                }

                let menu = {
                    id: this.menus.length + 1,
                    name: menuElement
                };

                this.menus.push(menu);
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
