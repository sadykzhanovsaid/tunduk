import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

function Layout() {

    return (
        <>
            <p className="title">Tunduk</p>

            <Outlet/>
        </>
    );
}

export default Layout