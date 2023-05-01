import React from "react";
import samarInput from '../img/samarImage.jpeg'
const Search = () => {
    return (
        <div className='search'>
           <div className='searchForm'>
               <input type='text' placeholder='find a user' />
           </div>
            <div className='userChat'>
                <img src={samarInput} alt='no image' />
                <div className='userChatInfo'>
                    <span>Samar</span>
                </div>
            </div>
        </div>
    )
}

export default Search;