import React from "react"
import "./Home.css"

import { MdArrowForwardIos } from "react-icons/md"
import { IoNotifications } from "react-icons/io5"
import { BsQuestionCircleFill } from "react-icons/bs"

function Home() {
    return (
        <main className="home">
            <section className="header">
                <div className="container">
                    <div className="header__box">
                        <div className="header__name">
                            <p className="header__name-title">Садыкжанов С.</p>

                            <MdArrowForwardIos className="header__name-arrow"/>
                        </div>

                        <div className="header__notifications">
                            <IoNotifications className="header__notification"/>
                            <BsQuestionCircleFill className="header__question"/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae, blanditiis deserunt facere id mollitia nostrum praesentium similique ut vitae! Adipisci autem consequuntur cupiditate deserunt dolorem eius, ex exercitationem illum inventore ipsa ipsam iusto laboriosam magnam maiores maxime nam non quas quo quod, quos recusandae repudiandae sapiente similique voluptates voluptatibus? Aliquam aspernatur consectetur corporis cupiditate, delectus eius fugiat illo incidunt ipsa labore maxime molestias natus neque, nobis nostrum numquam praesentium quod reiciendis rerum sit. Assumenda autem corporis culpa dicta earum eligendi excepturi, labore maxime quibusdam ratione? Accusamus consequuntur delectus, doloremque eos esse ex iste, molestias quo repudiandae sint, sunt tempora?
            </section>
        </main>
    );
}

export default Home