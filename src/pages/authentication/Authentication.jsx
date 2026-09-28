import React, {useState} from "react"
import "./Authentication.css"
import {useNavigate} from "react-router-dom"

import {RiDeleteBack2Line} from "react-icons/ri"

function Authentication({onLogin}) {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === "1234") {
            sessionStorage.setItem("isAuthenticated", "true")
            onLogin()
            navigate("/", {replace: true})
        } else {
            setPassword("")
        }
    }

    return (
        <div className="authentication">
            <div className="container">
                <div className="authentication__box">
                    <div className="authentication__top">
                        <p className="authentication__title">Введите ПИН-код</p>

                        <div className="authentication__pins">
                            <div className="authentication__pin"></div>
                            <div className="authentication__pin"></div>
                            <div className="authentication__pin"></div>
                            <div className="authentication__pin"></div>
                        </div>
                    </div>

                    <div className="authentication__bottom">
                        <div className="authentication__numbers">
                            <div className="authentication__numbers-row1">
                                <button className="authentication__number">1</button>
                                <button className="authentication__number">2</button>
                                <button className="authentication__number">3</button>
                            </div>
                            <div className="authentication__numbers-row2">
                                <button className="authentication__number">4</button>
                                <button className="authentication__number">5</button>
                                <button className="authentication__number">6</button>
                            </div>
                            <div className="authentication__numbers-row3">
                                <button className="authentication__number">7</button>
                                <button className="authentication__number">8</button>
                                <button className="authentication__number">9</button>
                            </div>
                            <div className="authentication__numbers-row4">
                                <button className="authentication__number">0</button>
                                <button className="authentication__number"><RiDeleteBack2Line fontSize="32px"/></button>
                            </div>
                        </div>

                        <div className="authentication__other">
                            <p className="authentication__forgot">Забыли ПИН-код?</p>
                            <p className="authentication__recovery">Восстановить доступ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authentication

// <form onSubmit={handleSubmit}>
//     <input
// type="password"
// placeholder="Введите пароль"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// autoFocus
// />
// <button type="submit">Войти</button>
// </form>