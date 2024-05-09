import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store => store.user);
    const selectUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }

    return (
        // hover:bg-neutral-700
        <>
            <div onClick={()=> selectUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-slate-700' : ''}  flex items-center gap-2 cursor-pointer p-3 rounded hover:bg-slate-700`}>
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
        </>
    )   
}

export default OtherUser
