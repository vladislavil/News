import VueRouter from "vue-router";
import Example from "./components/Example";
import Home from "./components/Home";

export default new VueRouter({
   routes: [
      {
         path:"/home",
         component: Home
      },
      {
         path:"/",
         component: Example
      },
   ],
   mode: 'history'
});
