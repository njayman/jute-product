import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
export default function Contact() {
    const [submited, setSubmitted] = useState(false)
    const history = useHistory()
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(sbmt => !sbmt)
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }
    return (
        <div className="container">
            <h1>Contact us</h1>
            <article style={{ padding: "20px" }}>
                <h2>Jute Company</h2>
                <p>12,2North street, Canada</p>
                <p>Phone: +12678462671, +12027953213, +8801711842891</p>
                <p>Email: juteproduct@gmail.com</p>
            </article>

            <p>or</p>

            <h1>Write to us now</h1>
            {submited ? <h2>Your response was submitted. We will contact with you soon.</h2> : (

                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="name">Full name :</label>
                        <input id="name" name="name" type="text" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email :</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" required />
                    </div>
                    <div className='form-control'>
                        <button type="submit">Send</button>
                    </div>
                </form>
            )}
        </div>
    )
}
