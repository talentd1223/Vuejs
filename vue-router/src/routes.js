import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Header from "./components/layouts/Header.vue";
import NotFound from "./components/NotFound.vue";

export const routes = [
  {
    path: "/",
    name: "homepage",
    components: {
      default: Home,
      header: Header,
    },
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      { path: "", name: "index", component: UserStart },
      {
        path: ":id",
        name: "userdetail",
        component: UserDetail,
        // beforeEnter: (to, from, next) => {
          beforeEnter: () => {
          console.log("Action route guards");
        },
      },
      { path: ":id/edit", name: "useredit", component: UserEdit },
    ],
  },
  { path: "/auth-redirect", redirect: { name: "homepage" } },
  { path: "/404", name: "errorpage", component: NotFound },
  { path: "*", redirect: "/404" },
];
