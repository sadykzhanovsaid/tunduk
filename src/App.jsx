import React, {useEffect} from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"

import Layout from "./Layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"

function App() {

    useEffect(() => {
        const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
            window.matchMedia("(display-mode: fullscreen)").matches ||
            window.navigator.standalone === true

        if (isStandalone) {
            document.querySelector("body").classList.add("is-webapp")
        }
    }, [])

    return (
        <div className="application">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App