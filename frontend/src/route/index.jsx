import Home from "~/Pages/Home";
import AuthPage from "~/Pages/Auth";
import ChatPage from "~/Pages/Chat";
import GuestChat from "~/Pages/GuestChat";

export const pageRoute = [
  { path: "/", component: Home },
  { path: "/auth", component: AuthPage },
  { path: "/chat", component: ChatPage },
  { path: "/guest-chat", component: GuestChat },
];
