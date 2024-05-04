import React from 'react'
import SideBar from './SideBar.jsx'
import MessageContainer from './MessageContainer.jsx'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
