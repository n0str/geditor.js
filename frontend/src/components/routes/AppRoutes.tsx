import React, {FC, useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/home/Home";
import Join from "../../pages/join/Join";
import NotFound from "../../pages/404/NotFound";

const AppRoutes: FC = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'join'} element={<Join/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;