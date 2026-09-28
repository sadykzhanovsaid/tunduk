import React, {useEffect} from "react"
import "./App.css"
import {Navigate, Route, Routes} from "react-router-dom"

import Layout from "./Layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Authentication from "./pages/authentication/Authentication.jsx"

function App() {

    useEffect(() => {
        const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
            window.matchMedia("(display-mode: fullscreen)").matches ||
            window.navigator.standalone === true

        if (isStandalone) {
            document.querySelector("body").classList.add("is-webapp")
        }
    }, [])

    const isUnlocked = sessionStorage.getItem("unlocked") === "true"

    return (
        <div className="application">
            <Routes>
                <Route
                    path="/lock"
                    element={<Authentication/>}
                />

                <Route path="/" element={isUnlocked ? <Layout/> : <Navigate to="/lock" replace/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App