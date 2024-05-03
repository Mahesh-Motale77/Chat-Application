import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

const Login = () => {
  const [User, setUser] = useState({
    username: "",
    password: "",
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v4/user/login", User, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      console.log(res);
      dispatch(setAuthUser(res.data));
      navigate("/");
       
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    })
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md rounded-lg  bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} action="">
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
          <p className='text-center mt-4'>Don't have an account? <Link to="/register">Signup</Link> </p>
          <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
