import React, {useEffect} from "react"
import "./Layout.css"

function Layout() {

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
            Түндүк
        </div>
    );
}

export default Layout