import React, {useEffect, useState} from "react"
import "./Authentication.css"
import {useNavigate} from "react-router-dom"

import {RiDeleteBack2Line} from "react-icons/ri"

function Authentication({onLogin}) {
    const [password, setPassword] = useState("")
    const [activeBtn, setActiveBtn] = useState(null)
    const navigate = useNavigate()
    const [errorState, setErrorState] = useState("none")

    const handlePress = (digit) => {
        if (errorState !== "none") {
            setErrorState("none")
        }

        setPassword((prev) => (prev.length < 4 ? prev + digit : prev))

        setActiveBtn(digit)
        setTimeout(() => setActiveBtn(null), 300)
    }

    const handleDelete = () => {
        setPassword((prev) => prev.slice(0, -1))
        setActiveBtn("delete")
        setTimeout(() => setActiveBtn(null), 300)
    }

    useEffect(() => {
        if (password.length === 4) {
            if (password === "1234") {
                sessionStorage.setItem("isAuthenticated", "true")
                onLogin()
                navigate("/", {replace: true})
            } else {
                setErrorState("full")

                setTimeout(() => {
                    setErrorState("border")
                    setPassword("")
                }, 500)
            }
        }
    }, [password, onLogin, navigate])

    return (
        <div className="authentication">
            <div className="container">
                <div className="authentication__box">
                    <div className="authentication__top">
                        <p className="authentication__title">Введите ПИН-код</p>

                        <div className="authentication__pins">
                            {[0, 1, 2, 3].map((index) => (
                                <div
                                    key={index}
                                    className={`authentication__pin ${
                                        password.length > index ? "active" : ""
                                    }
                                        ${errorState !== "none" ? `error-${errorState}` : ""}
                                    `}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="authentication__bottom">
                        <div className="authentication__numbers">
                            <div className="authentication__numbers-row1">
                                <button className={`authentication__number ${activeBtn === "1" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("1")}
                                        tabIndex="1">1
                                </button>
                                <button className={`authentication__number ${activeBtn === "2" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("2")}
                                        tabIndex="2">2
                                </button>
                                <button className={`authentication__number ${activeBtn === "3" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("3")}
                                        tabIndex="3">3
                                </button>
                            </div>
                            <div className="authentication__numbers-row2">
                                <button className={`authentication__number ${activeBtn === "4" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("4")}
                                        tabIndex="4">4
                                </button>
                                <button className={`authentication__number ${activeBtn === "5" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("5")}
                                        tabIndex="5">5
                                </button>
                                <button className={`authentication__number ${activeBtn === "6" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("6")}
                                        tabIndex="6">6
                                </button>
                            </div>
                            <div className="authentication__numbers-row3">
                                <button className={`authentication__number ${activeBtn === "7" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("7")}
                                        tabIndex="7">7
                                </button>
                                <button className={`authentication__number ${activeBtn === "8" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("8")}
                                        tabIndex="8">8
                                </button>
                                <button className={`authentication__number ${activeBtn === "9" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("9")}
                                        tabIndex="9">9
                                </button>
                            </div>
                            <div className="authentication__numbers-row4">
                                <button className={`authentication__number ${activeBtn === "0" ? "is-clicked" : ""}`}
                                        onClick={() => handlePress("0")}
                                        tabIndex="0">0
                                </button>
                                <button
                                    className={`authentication__number ${activeBtn === "delete" ? "is-clicked" : ""}`}
                                    onClick={() => handleDelete()} tabIndex="10">
                                    <RiDeleteBack2Line
                                        fontSize="32px"/></button>
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