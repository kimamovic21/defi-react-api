import React from 'react'
import './Signup.css'
import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>

                    {/* Left */}
                    <div className='left'>
                        <img src={Crypto} alt='/'></img>
                    </div>

                    {/* Right */}
                    <div className='right'>
                        <h2>Earn passive income with crypto.</h2>
                        <p>Earn up to 12% annual rewards 30+ digital assets.</p>
                        <div className='input-container'>
                            <input type='email' placeholder='Enter your email'/>
                            <button className='btn'>Learn more</button>
                        </div>
                    </div>

            </div>   {/* className='container' */}
        </div>   // className='signup'
    )
}

export default Signup

