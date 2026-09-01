import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function RootLayout() {
    const location = useLocation();

    const getPageClass = () => {
        if (location.pathname === "/destination") return "page--destination";
        if (location.pathname === "/crew") return "page--crew";
        if (location.pathname === "/technology") return "page--technology";
        return "page--home";
    };

    return (
        <div className={getPageClass()}>
            <Header />
            <Outlet />
        </div>
    );
}
