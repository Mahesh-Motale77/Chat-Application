import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md rounded-lg  bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form action="">
                <div className=''>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username: </span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                </div>
                <div className=''>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password: </span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>
                <p className='text-center mt-4'>Don't have an account? <Link to="/register">Signup</Link> </p>
                <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
                
            </form>
      </div>
    </div>
  )
}

export default Login
