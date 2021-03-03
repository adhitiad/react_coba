import React from 'react'
import { Dok, Facebook, Instagram, Telegram, Twitter, Whatsapp } from '../../../assets'
import "./footer.scss"

const Icon = ({ img }) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-img" src={img} alt="icon"></img>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <div className="footer">
                <img className="logof" src={Dok} alt="logoblog" />
                <div className="sosial-wrap">
                    <Icon img={Facebook} />
                    <Icon img={Instagram} />
                    <Icon img={Telegram} />
                    <Icon img={Twitter} />
                    <Icon img={Whatsapp} />

                </div>
            </div>
            <div className="copy">
                <p>copyright</p>
            </div>
        </div>
    )
}

export default Footer
