import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen border-2 border-red-600">
            <h2>Header Component</h2>
            <div className="">
                <Outlet/>
            </div>
            <h2>Footer component</h2>
        </div>
    );
};

export default Main;