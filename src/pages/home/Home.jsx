import React from "react"
import "./Home.css"
import {Link} from "react-router-dom"

import { MdArrowForwardIos } from "react-icons/md"
import { IoNotifications } from "react-icons/io5"
import { BsQuestionCircleFill } from "react-icons/bs"

function Home() {
    return (
        <main className="home">
            <section className="header">
                <div className="container">
                    <div className="header__box">
                        <Link to="/user" className="header__name">
                            <p className="header__name-title">Садыкжанов С.</p>

                            <MdArrowForwardIos className="header__name-arrow"/>
                        </Link>

                        <div className="header__notifications">
                            <IoNotifications className="header__notification"/>
                            <BsQuestionCircleFill className="header__question"/>
                        </div>
                    </div>
                </div>
            </section>

            <section></section>
        </main>
    );
}

export default Home