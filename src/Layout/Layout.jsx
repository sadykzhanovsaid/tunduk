import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

import Bar from "./bar/Bar.jsx"

function Layout({currentPage, setCurrentPage}) {

    return (
        <>
            <Outlet/>

            <Bar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    );
}

export default Layout