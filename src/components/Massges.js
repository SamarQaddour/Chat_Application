import React , {useContext,useEffect,useState} from 'react';
import {doc, onSnapshot} from 'firebase/firestore';
import {ChatContext} from "../context/ChatContext";
import {db} from '../firebase';
import Massege from './Massege'

const Masseges = () => {
    const [messages , setMessages] = useState([])
    const {data} = useContext(ChatContext);
    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "chats", data.chatId), doc.exists() && setMessages(doc.data().messages))
        return () => {
            unSub();
        };
    },[data.chatId])
    console.log(messages, "messages")
    return (
        <div className='masseges'>
            {messages.map((m)=>{
                <Massege message={m} key={m.id}/>
            })}
        </div>
    );
};

export default Masseges;