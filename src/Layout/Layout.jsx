import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

import Bar from "./bar/Bar.jsx"

function Layout() {

    return (
        <>
            <Outlet/>

            <Bar/>
        </>
    );
}

export default Layout