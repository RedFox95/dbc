import React from 'react';
import pfp from './photos/PP.png'

export default function Info() {
    return (
        <div className='info'>
            <img className='info--pfp' src={pfp} alt='Profile Pic' />
            <h1>Ryan Weidling</h1>
            <h4>Software Engineer</h4>
            <a href='https://redfox95.github.io/'>Weidling Website</a>
            <button><img className='info--email' src='https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-512.png' alt='email icon'/></button>
        </div>
    )
}