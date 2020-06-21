import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from "../components/Index";

//
import Menu1 from "../components/menu1/Menu1";
import SubMenu1 from "../components/menu1/SubMenu1";
import SubMenu2 from "../components/menu1/SubMenu2";

//
import Menu2 from "../components/menu2/Menu2";
import SubMenu3 from "../components/menu2/SubMenu";

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: Index
    },
    {
      path: "/index",
      name: "index",
      component: Index
    },
    {
      path: "/menu2",
      component: Menu2,
      children: [
        {
          path: "st",
          component: SubMenu3
        }
      ]
    },
    {
      path: "/menu1",
      component: Menu1,
      children: [
        {
          path: "/",
          redirect: "subMenu2"
        },
        {
          name: "subMenu1",
          path: "subMenu1",
          component: SubMenu1
        },
        {
          name: "subMenu2",
          path: "subMenu2",
          component: SubMenu2
        }
      ]
    }
  ]

});
