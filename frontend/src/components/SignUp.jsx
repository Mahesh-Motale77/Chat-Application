import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const SignUp = () => {
    const [User, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })
    const navigate = useNavigate();

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v4/user/register",User, {
                headers:{
                    'Content-Type':'application/json',
                },
                withCredentials:true 
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        
        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        })
    }

    const handleCheckBox = (gender) => {
        setUser({ ...User, gender });
    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md rounded-lg  bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
                <h1 className='text-3xl font-bold text-center'>SignUp</h1>
                <form onSubmit={onSubmitHandler} action="">
                    <div className=''>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name: </span>
                        </label>
                        <input
                            value={User.fullName}
                            onChange={(e) => setUser({ ...User, fullName: e.target.value })}
                            type="text"
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div className=''>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username: </span>
                        </label>
                        <input
                            value={User.username}
                            onChange={(e) => setUser({ ...User, username: e.target.value })}
                            type="text"
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div className=''>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password: </span>
                        </label>
                        <input
                            value={User.password}
                            onChange={(e) => setUser({ ...User, password: e.target.value })}
                            type="password"
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div className=''>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password: </span>
                        </label>
                        <input
                            value={User.confirmPassword}
                            onChange={(e) => setUser({ ...User, confirmPassword: e.target.value })}
                            type="password"
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div className='flex items-center my-4'>
                        <div className='flex items-center'>
                            <p className=''>Male</p>
                            <input
                                checked={User.gender === "male"}
                                onChange={() => handleCheckBox("male")}
                                type="checkbox"
                                className="checkbox mx-2" />
                        </div>
                        <div className='flex items-center'>
                            <p className=''>Female</p>
                            <input
                                checked={User.gender === "female"}
                                onChange={() => handleCheckBox("female")}
                                type="checkbox"
                                className="checkbox mx-2" />
                        </div>
                    </div>
                    <p className='text-center'>Already have an account? <Link to="/login">Sign in</Link> </p>
                    <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>

                </form>
            </div>
        </div>
    )
}

export default SignUp
