import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import BlogPost from "../components/BlogPost.vue";
import Blog from "../views/Blog.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: BlogPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
