import React from 'react'
import './Menu.scss'

export default function Menu({ menuOpen, setMenuOpen }){
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#Home"> Home </a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#Experience"> Experience </a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#Skills"> Skills </a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#ContactMe"> Contact Me </a>
                </li>
            </ul>
        </div>
    )
}
