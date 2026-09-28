import React, {useState} from "react"
import "./Authentication.css"
import {useNavigate} from "react-router-dom"

function Authentication() {
    const [pin, setPin] = useState("")
    const navigate = useNavigate()

    const correctPin = "1234"

    const handleSubmit = () => {
        if (pin === correctPin) {
            sessionStorage.setItem("unlocked", "true")
            navigate("/")
        } else {
            setPin("")
            alert("Неверный PIN")
        }
    }

    return (
        <main className="authentication">
            <div className="lock-screen">
                <h1>Введите PIN</h1>

                <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    maxLength={4}
                />

                <button onClick={() => handleSubmit()}>
                    Войти
                </button>
            </div>
        </main>
    );
}

export default Authentication