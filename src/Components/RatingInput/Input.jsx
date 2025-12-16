import {React, useState } from "react";
import './Input.css'
import star from '../../assets/icon-star.svg'
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function InputRating() {
    const buttons = [1, 2, 3, 4, 5]
    const btnRef = useRef(null)     //for submit btn
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()


    const handleSubmit = () => {
        btnRef.current.style.backgroundColor = 'white'  //change bg
        if (rating) {    //if rating is selected, navigate to next component
            navigate('/thankyou', { state: { rating: rating } })   //sending rating in state
        }
        else {
            alert("Select Rating")
        }
    }


    return (
        <>
            <section className="rating">
                <div className="star">
                    <img src={star} alt="An orange color star" />
                </div>

                <div className="question">
                    <h3>How did we do?</h3>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>

                <div className="buttons" >
                    {buttons.map((num) => (
                        <button
                            key={num}
                            value={num}
                            onClick={() => {
                                setRating(num)
                            }

                            }
                            className={rating === num ? 'click' : ''}
                        >{num}</button>
                    ))
                    }
                </div>

                <div className="submitBtn">
                    <button className="submit" ref={btnRef} onClick={handleSubmit}>SUBMIT</button>
                </div>
            </section>
        </>
    )
}

export default InputRating