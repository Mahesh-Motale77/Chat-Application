import React from 'react'
import SendInput from './SendInput.jsx'
import Messages from './Messages.jsx'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user);
  return (
    <div className='md:min-w-[550px] flex flex-col px-8 py-4'>
      <div className='flex items-center gap-2'>
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
      <Messages/>
      <SendInput/>
    </div>
  )
}

export default MessageContainer
