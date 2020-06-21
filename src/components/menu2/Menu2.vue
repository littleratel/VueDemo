<template>
  <div>学生信息列表
    <ul>
      <li v-for="(st,index) in this.students" :key="index">
<!--        <router-link :to="`/menu2/subMenu3/${st.eid}`">{{st.name}}</router-link>  -->
        <router-link :to="`/menu2/st?eid=${st.eid}`">{{st.name}}</router-link> <!-- 动态取值要加：号 -->
      </li>
      <hr/>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
    import SubMenu from "./SubMenu";
    export default {
        name: "Menu2",
        components: {SubMenu},
        data() {
            return {
                students: [
                    {
                        name: "张三",
                        eid: "zhangsan",
                        age: 3
                    },
                    {
                        name: "李四",
                        eid: "lisi",
                        age: 4
                    },
                    {
                        name: "王五",
                        eid: "wangwu",
                        age: 5
                    },
                    {
                        name: "赵六",
                        eid: "zhaoliu",
                        age: 6
                    }
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
</style>
