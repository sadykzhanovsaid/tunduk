import React, {useEffect, useState} from "react"
import "./App.css"
import {Navigate, Route, Routes, useLocation} from "react-router-dom"

import Layout from "./Layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Authentication from "./pages/authentication/Authentication.jsx"

function App() {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(location.pathname)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("isAuthenticated") === "true"
    })

    useEffect(() => {
        const isAuthPage = !isAuthenticated || location.pathname === "/lock"

        if (isAuthPage) {
            document.body.classList.add("authentication")
            document.body.classList.remove("app")
        } else {
            document.body.classList.add("app")
            document.body.classList.remove("authentication")
        }
    }, [isAuthenticated, location.pathname])

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location.pathname])

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
                <Route
                    path="/lock"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/" replace/>
                        ) : (
                            <Authentication onLogin={() => setIsAuthenticated(true)}/>
                        )
                    }
                />

                <Route
                    path="/"
                    element={isAuthenticated ? <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}/> : <Navigate to="/lock" replace/>}
                >
                    <Route index element={<Home/>}/>
                    <Route path="/document" element={<p>document</p>}/>
                    <Route path="/services" element={<p>services</p>}/>
                    <Route path="/user" element={<p>user</p>}/>
                </Route>

                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/lock"} replace/>}/>
            </Routes>
        </div>
    )
}

export default App