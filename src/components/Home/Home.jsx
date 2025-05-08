import { Outlet } from "react-router-dom";

export const Home = () => {
    console.log("привет");
    
    return(
        <div>
            <p>мои расходы</p>
            <Outlet /> 
        </div>
    )
}