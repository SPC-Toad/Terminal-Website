import React from 'react'
import './Main.css';

export default function Main() {
  return (
    <div className='main-container'>
        <div className='intro-container'>
            <div id='title'>My name is Sangyun Kim</div>
            <div className='dynamic-container'>
                <div id='static-txt'>I am a </div>
                <ul id='dynamic-list'>
                    <li><span>SOFTWARE ENGINEER.</span></li>
                    <li><span>ARMY RESERVIST.</span></li>
                    <li><span>Vehicle MECHANIC.</span></li>
                    <li><span>FULL-TIME STUDENT.</span></li>
                </ul>
            </div>
        </div>
        <div className='about-container'></div>
        <div className='contact-container'></div>
    </div>
  )
}
