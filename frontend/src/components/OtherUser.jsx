import React from 'react'

const OtherUser = (props) => {
    const user = props.user;
    return (
        // hover:bg-neutral-700
        <div>
            <div className='flex items-center gap-2 cursor-pointer p-3 rounded hover:bg-slate-700'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={user?.profilePhoto}  alt='user-profile' />
                    </div>
                </div>
                <div>
                    {user?.fullName}
                </div>
            </div>
            <div className="divider my-0 py-0 h-0"></div>
        </div>
    )   
}

export default OtherUser
