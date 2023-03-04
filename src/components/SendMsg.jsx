import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { UserAuth } from "../context/AuthContext";
import { db } from '../firebase';

const SendMsg = () => {

    const [value, setvalue] = useState('');
    const { currentUser } = UserAuth();

    const handleSendMessage = async(e) => {
        e.preventDefault();

        if(value.trim() === "") {
          alert("Enter valid message!");
          return;
        }

        try {
          const { uid, displayName, photoURL } = currentUser;
          await addDoc(collection(db, "messages"), {
            text: value,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
          })
        } catch (error) {
          console.log(error);
        }
        console.log(value)
        setvalue('');
    }

  return (
    <div className='fixed bottom-0 w-full'>
        <form onSubmit={handleSendMessage} className='flex container mx-auto md:max-w-4xl'>
            <input value={value} onChange={e => setvalue(e.target.value)} className='input w-full focus:outline-none rounded-none border-4 border-primary' type="text" />
            <button type='submit' className='btn btn-primary w-auto rounded-none'>SEND</button>
        </form>
    </div>
  )
}

export default SendMsg
