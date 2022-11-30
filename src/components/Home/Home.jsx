import React from 'react'
import './Home.scss'
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";

export default function Home(){
    return (
        <div className="Home" id="Home">

            <div className="gifContainer">
                <img src={require('../../assets/my-avatar.jpg')} alt="loading..." />
            </div>


            <div className="textContainer">
                <div className="socialMediaIcons">
                    <a href="https://www.facebook.com/rooney.shaer"
                        className="fb">
                        <FontAwesomeIcon icon={faFacebook} size="xl" />
                    </a>
                    <a href="https://www.instagram.com/roney_sh/"
                        className="instagram">
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/rony-shaer-593830197/"
                        className="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>

                </div>
                <div className="hi">  Hello, Im Rony </div>
                <div className="name">
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Production Engineer 😎",
                        1000,
                        "Backend Engineer 💻",
                        1000,
                        "Devops Engineer ∞",
                        1000,
                    ]}
                    />
                </div>
                <div className="job">
                    Keep Calm! <br/> & <br/> Deploy to production!
                </div>

                <a href={require('../../assets/ResumeRonyShaer.pdf')} downlaod='RonyShaerResume.pdf' >
                    <button className="cvButton"> Resume </button>
                </a>

            </div>
        </div>
    )
}
