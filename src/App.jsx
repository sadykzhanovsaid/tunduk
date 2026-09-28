import React, {useEffect, useState} from "react"
import "./App.css"
import {Route, Routes, Navigate} from "react-router-dom"

import Layout from "./Layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Authentication from "./pages/authentication/Authentication.jsx"

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("isAuthenticated") === "true"
    })

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
                {/* Если уже авторизован — редиректим с /lock на главную, иначе показываем форму */}
                <Route
                    path="/lock"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/" replace />
                        ) : (
                            <Authentication onLogin={() => setIsAuthenticated(true)} />
                        )
                    }
                />

                {/* Защищенный маршрут */}
                <Route
                    path="/"
                    element={isAuthenticated ? <Layout /> : <Navigate to="/lock" replace />}
                >
                    <Route index element={<Home />} />
                </Route>

                {/* Все остальные пути */}
                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/lock"} replace />} />
            </Routes>
        </div>
    )
}

export default App