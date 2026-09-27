import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

function Layout() {

    return (
        <>
            Түндүк

            <Outlet/>
        </>
    );
}

export default Layout