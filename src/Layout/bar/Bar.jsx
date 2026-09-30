import React from "react"
import "./Bar.css"

function Bar() {
    return (
        <div className="bar">
            <div className="container">
                <div className="bar__box">
                    <div className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Главная</p>
                    </div>
                    <div className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Документы</p>
                    </div>
                    <div className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Услуги</p>
                    </div>
                    <div className="bar__link">
                        <div className="bar__icon"></div>
                        <p className="bar__title">Профиль</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar