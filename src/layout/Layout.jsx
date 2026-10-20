import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

function Layout() {

    return (
        <>
            <Outlet/>
        </>
    );
}

export default Layout