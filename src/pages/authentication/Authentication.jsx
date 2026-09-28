import React, {useState} from "react"
import "./Authentication.css"
import {useNavigate} from "react-router-dom"

function Authentication({onLogin}) {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === "1234") { // Ваш пароль
            sessionStorage.setItem("isAuthenticated", "true")
            onLogin() // Обновляем состояние в App.jsx
            navigate("/", { replace: true })
        } else {
            alert("Неверный пароль")
            setPassword("")
        }
    }

    return (
        <main className="authentication">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                />
                <button type="submit">Войти</button>
            </form>
        </main>
    );
}

export default Authentication