import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {path:'/', element: <Home></Home>},
        {path:'/about', element: <p>Abouts</p>},
    ]
  },
]);

export default Routes;