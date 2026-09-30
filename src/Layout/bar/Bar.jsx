import React from "react"
import "./Bar.css"
import {NavLink} from "react-router-dom"

import { GoHome } from "react-icons/go"
import { GoHomeFill } from "react-icons/go"

import { IoDocumentTextOutline } from "react-icons/io5"
import { IoDocumentText } from "react-icons/io5"

import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { HiSquares2X2 } from "react-icons/hi2"

import { FaRegCircleUser } from "react-icons/fa6"
import { FaCircleUser } from "react-icons/fa6"

function Bar({currentPage,setCurrentPage}) {
    return (
        <div className="bar">
            <div className="container">
                <div className="bar__box">
                    <NavLink to="/" className="bar__link">
                        {currentPage === "/" ? <GoHomeFill/> : <GoHome/>}
                        <p className="bar__title">Главная</p>
                    </NavLink>
                    <NavLink to="/document" className="bar__link">
                        {currentPage === "/document" ? <IoDocumentText/> : <IoDocumentTextOutline/>}
                        <p className="bar__title">Документы</p>
                    </NavLink>
                    <NavLink to="/services" className="bar__link">
                        {currentPage === "/services" ? <HiSquares2X2/> : <HiOutlineSquares2X2/>}
                        <p className="bar__title">Услуги</p>
                    </NavLink>
                    <NavLink to="/user" className="bar__link">
                        {currentPage === "/user" ? <FaCircleUser/> : <FaRegCircleUser/>}
                        <p className="bar__title">Профиль</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Bar