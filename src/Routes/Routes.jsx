import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {path:'/', element: <p>Home</p>},
        {path:'/about', element: <p>Abouts</p>},
    ]
  },
]);

export default Routes;