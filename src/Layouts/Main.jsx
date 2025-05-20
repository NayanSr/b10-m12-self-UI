import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen border-2 border-red-600">
            <h2>Header Component</h2>
            <div className="">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;