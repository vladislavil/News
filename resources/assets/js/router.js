import VueRouter from "vue-router";
import Example from "./components/Example";
import Home from "../../views/Home/Home";

import {store} from "../js/store/store";

export default new VueRouter({
   routes: [
      {
         path:"/home",
         component: Home,
         beforeEnter(from, to, next) {
            store.dispatch('posts/getPosts');
            console.log(2);
            next();
         }
      },
      {
         path:"/",
         component: Example
      },
   ],
   mode: 'history'
});
