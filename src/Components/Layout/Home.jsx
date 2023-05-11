
import { Outlet } from "react-router-dom";
import "../../Styles/Layout/Home.css"
import Sider from "./Sider";

const Home =()=> {
    return (
        <div className="Home">
            <div className="Panel">
                <Sider/>
            </div>

            <div className="Contents">
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;