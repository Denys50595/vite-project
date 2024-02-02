import { Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import MainLayout from "./pages/Main/MainLayout";
import Menu from "./pages/Main/Menu";
import Basket from "./pages/Main/Basket";
import OrderForm from "./pages/Main/OrderForm";
import OrderDetails from "./pages/Main/OrderDetails";

export enum RoutesPath {
  Empty = "",
  Start = "/",
  Auth = "auth",
  Login = "login",
  SignUp = "sign-up",
  Main = "main",
  Menu = "menu",
  Basket = "basket",
  OrderForm = "order/new",
  OrderDetails = "order/:id",
  NotFound = "*",
}

export const MainRoutes: Array<{
  path: string;
  component: any;
  children?: Array<any>;
}> = [
  {
    path: RoutesPath.Start,
    component: <Navigate to="/auth" replace={true} />,
  },
  {
    path: RoutesPath.Auth,
    component: <AuthLayout />,
    children: [
      {
        path: RoutesPath.Empty,
        component: <Navigate to="login" replace={true} />,
      },
      {
        path: RoutesPath.Login,
        component: <Login />,
      },
      {
        path: RoutesPath.SignUp,
        component: <SignUp />,
      },
    ],
  },
  {
    path: RoutesPath.Main,
    component: <MainLayout />,
    children: [
      {
        path: RoutesPath.Empty,
        component: <Navigate to="menu" replace={true} />,
      },
      {
        path: RoutesPath.Menu,
        component: <Menu />,
      },
      {
        path: RoutesPath.Basket,
        component: <Basket />,
      },
      {
        path: RoutesPath.OrderForm,
        component: <OrderForm />,
      },
      {
        path: RoutesPath.OrderDetails,
        component: <OrderDetails />,
      },
    ],
  },
  {
    path: RoutesPath.NotFound,
    component: <PageNotFound />,
  },
];
