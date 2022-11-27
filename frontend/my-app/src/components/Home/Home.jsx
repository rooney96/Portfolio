import React from 'react'
import './Home.scss'
import styled, { keyframes } from "styled-components"

export default function Home(){
    return (
        <div className="Home" id="Home">
            <div className="left">
                <div className="gifContainer">
                    <img src={require('../../assets/teze.jpg')} alt="loading..." />
                </div>
            </div>
            <div className="right">
                <div className="textContainer">
                    <Wrapper>
                        <div className="hi"> Hi There </div>
                        <div className="name"> My Name Is Rony</div>
                        <div className="job">A production Engineer </div>
                    </Wrapper>
                </div>
            </div>
        </div>
    )
}

const animation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
`

const Wrapper = styled.span`
    animation-name: ${animation};
    animation-duration:6s;
    animation-fill-mode: forwards;

`
