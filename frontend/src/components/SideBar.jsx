import React from 'react'
import { ImSearch } from "react-icons/im";
import OtherUsers from './OtherUsers.jsx';

const SideBar = () => {
    return (
        <>
            <div className='flex flex-col'>
                <form action="" className='flex gap-2 m-3' >
                    <input
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-primary w-full max-w-xs text-md" />
                    <button className="btn btn-outline btn-primary">
                        <ImSearch />
                    </button>
                </form>
                <div className="divider mt-0 mb-1"></div>
                <OtherUsers />
                <button className="btn btn-sm m-3 mt-6 btn-outline mb-3 text-lg  btn-error">Logout</button>
                
            </div>

        </>
    )
}

export default SideBar
