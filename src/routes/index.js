import Chat from "../components/Chat/Chat";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { CHAT_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: Login,
  },
  {
    path: SIGNUP_ROUTE,
    element: Signup,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    element: Chat,
  },
];
