import React, {useState} from "react";
import samarInput from '../img/samarImage.jpeg'
import {collection, query, where,getDocs} from 'firebase/firestore'
import {db} from "../firebase";

const Search = () => {
    const [username,setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)
    const handleSearch = async () =>{
        const q = query(collection(db,"database"), where("displayName", "==",username))
        const querySnapshot = await  getDocs(q)
       try {
           querySnapshot.forEach((doc)=>{
               setUser(doc.data())
               console.log(doc.id, '=>',doc.data())
           });
       }catch (err){
            setErr(true)
       }
    };
     const handleKey = e =>{
        e.code === "Enter" && handleSearch()
     };
     const handleSelect = () =>{

     }
    return (
        <div className='search'>
           <div className='searchForm'>
               <input type='text' placeholder='find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
           </div>
            {err && <div>user not found</div>}
            {user &&  <div className='userChat' onClick={handleSelect}>
                <img src={user.photoURL} alt=''  />
                <div className='userChatInfo'>
                    <span>{user.displayName}</span>
                </div>
            </div>}
         </div>
    )
}

export default Search;