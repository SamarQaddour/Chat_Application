import React from 'react'
import samarImage from '../img/samarImage.jpeg';
import jacket from '../img/jecket.jpg'
const Massege = () => {
    return (
        <div className='massege owner'>
            <div className='messageInfo'>
                <img src={samarImage} alt='...' />
                <span>Just Now</span>
            </div>
            <div className='messageContent'>
                <p>hello</p>
                <img src={jacket} alt='...' />
            </div>
        </div>
    )
}

export default Massege;