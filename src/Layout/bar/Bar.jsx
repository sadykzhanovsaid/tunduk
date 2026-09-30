import React from "react"
import "./Bar.css"
import {NavLink} from "react-router-dom"

function Bar() {
    return (
        <div className="bar">
            <div className="container">
                <div className="bar__box">
                    <NavLink to="/" className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Главная</p>
                    </NavLink>
                    <NavLink to="/document" className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Документы</p>
                    </NavLink>
                    <NavLink to="/services" className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Услуги</p>
                    </NavLink>
                    <NavLink to="/user" className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Профиль</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Bar