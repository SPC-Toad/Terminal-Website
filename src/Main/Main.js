import React from 'react'
import './Main.css';
import Typing from '../Typing/Typing';

function Main() {
  return (
    <div className='container'>
      <div className='intro-container'>
        <div id='title'>
        <Typing text={'Sangyun Kim'} />
        </div>
        <p id='sub-title'>
          <Typing text={'I am software engineer'} />
        </p>
      </div>
    </div>
  )
}

export default Main