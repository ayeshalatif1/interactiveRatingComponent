import React from "react";
import { useLocation } from "react-router-dom";
import './Display.css'
import image from '../../assets/illustration-thank-you.svg'

function ThankYou() {
    const location = useLocation()
    const rating = location.state?.rating    //fetching state
    return (
        <>
            <section className="thankyou">
                <div className="separate">
                <div className="img">
                    <img src={image} alt="Thankyou page image illustration" />
                </div>
                <div className="selection">
                    <p>You selected {rating} out of 5</p>
                </div>
                </div>
                <div className="separate">
                <div className="thank">
                    <h3>Thank You!</h3>
                </div>
                <div className="appreciate">
                    <p>We appreciate you taking the time to give a rating. If you ever need more support. don't hesitate to get in touch</p>
                </div>
                </div>
            </section>


        </>
    )
}

export default ThankYou