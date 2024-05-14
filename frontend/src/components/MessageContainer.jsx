import React, { useEffect } from 'react'
import SendInput from './SendInput.jsx'
import Messages from './Messages.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice.js'

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector(store => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
    <>

      {
        selectedUser !== null ? (<div className='md:min-w-[550px] flex flex-col px-8 py-4'>
          <div className='md:min-w-[550px] flex items-center gap-2'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt='user-profile' />
              </div>
            </div>
            <div className='text-xl px-2'>
              {selectedUser?.fullName}
            </div>
          </div>
          <div className="divider my-0 mt-4 py-0 h-0"></div>
          <Messages />
          <SendInput />
        </div>) : (
          <div className='md:min-w-[550px] flex-col flex items-center gap-2 justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>Hey, Welcome {authUser.fullName}</h1> 
            <h2 className='text-2xl text-white '>Let's Start Conversation !!!</h2>

          </div>
        )
      }
    </>

  )
}

export default MessageContainer
