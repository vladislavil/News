import VueRouter from "vue-router";
import Example from "./components/Example";
import Home from "./components/Home";
import postFull from "./components/postFull/postFull"

export default new VueRouter({
   routes: [
      {
         path:"/home",
         component: Home
      },
      {
         path:"/home/:id",
         component: postFull
      },
      {
         path:"/",
         component: Example
      },
   ],
   mode: 'history'
});
