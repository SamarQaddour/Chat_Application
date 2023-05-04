import React, {useContext, useEffect, useState} from 'react'
import Massege from './Massege'
import {ChatContext} from "../context/ChatContext";
import {doc,onSnapshot} from 'firebase/firestore';
import {db} from '../firebase'
const Masseges = () => {
    const [messages,setMessages] = useState([])
    const {data} =useContext(ChatContext)

    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"chats",data.chatId), (doc)=>{
            doc.exists() && setMessages(doc.data().messages)
        });
        return ()=> {
            unSub()
        };
    },[data.chatId])
    console.log(messages,"messages")
    return (
        <div className='masseges'>
            {messages.map(m=>(
                <Massege message={m} />
            ))}

        </div>
    )
}

export default Masseges;