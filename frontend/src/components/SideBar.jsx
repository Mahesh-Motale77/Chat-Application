import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";
import OtherUsers from './OtherUsers.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUser } from '../redux/userSlice.js';

const SideBar = () => {
    const [search, setSearch] = useState("");
    const {otherUsers} = useSelector(store=>store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const logoutHandler = async() => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v4/user/logout`);
            navigate('/login')
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user)=> user.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversationUser){
            dispatch(setOtherUser([conversationUser]));
        }
        else{
            toast.error("User Not found !");
        }
    }

    return (
        <>
            <div className='flex flex-col'>
                <form onSubmit={searchSubmitHandler} className='flex gap-2 m-3' >
                    <input
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-primary w-full max-w-xs text-md" />
                    <button type='submit' className="btn btn-outline btn-primary">
                        <ImSearch />
                    </button>
                </form>
                <div className="divider mt-0 mb-1"></div>
                <OtherUsers />
                <button onClick={logoutHandler} className="btn btn-sm m-3 mt-6 btn-outline mb-3 text-lg  btn-error">Logout</button> 
            </div>

        </>
    )
}

export default SideBar
