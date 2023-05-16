import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VolentierRegister from "../pages/VolentierRegister";
import AllVoulentiers from "../pages/AllVoulentiers";
import MyEvents from "../pages/MyEvents";
import AddEvents from "../pages/AddEvents";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/myEvents",
            element: <MyEvents></MyEvents>
        },
        {
            path: "/addEvents",
            element: <AddEvents></AddEvents>
        },
        {
            path: "/allVolentiers",
            element: <AllVoulentiers></AllVoulentiers>
        },
        {
            path: "/volReg",
            element: <VolentierRegister></VolentierRegister>
        }
      ]
    },
]);

export default router;