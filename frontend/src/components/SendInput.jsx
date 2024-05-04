import React from 'react';
import { IoSendOutline } from "react-icons/io5";

const SendInput = () => {
    return (
        <div>
            <form action="" className='px-4 pb-0 mt-2' >
                <div className='w-full relative'>
                <input
                    type="text"
                    placeholder="Send a message..."
                    className="input input-bordered block w-full p-3 input-primary" />
                <button className="absolute flex items-center inset-y-0 end-0 px-4 btn-outline btn-primary">
                    <IoSendOutline/>
                </button>
                </div>
            </form>
        </div>
    )
}

export default SendInput
