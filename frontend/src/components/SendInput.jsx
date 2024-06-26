import React, { useState } from 'react';
import { IoSendOutline } from "react-icons/io5";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { setMessages } from '../redux/messageSlice';

const SendInput = () => {
    const [message, setMessage] = useState("");
    const {selectedUser} = useSelector(store => store.user);
    const {messages} = useSelector(store => store.message);
    const dispatch = useDispatch();
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/v4/message/send/${selectedUser?._id}`, {message}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            console.log(res);
            dispatch(setMessages([...messages, res?.data?.newMessage]));
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='px-4 pb-0 mt-2' >
                <div className='w-full relative'>
                <input
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a message..."
                    className="input input-bordered block w-full p-3 input-primary" />
                <button type='submit' className="absolute flex items-center inset-y-0 end-0 px-4 btn-outline btn-primary">
                    <IoSendOutline/>
                </button>
                </div>
            </form>
        </div>
    )
}

export default SendInput
