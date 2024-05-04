import React from 'react'

const OtherUser = () => {
    return (
        <div>
            <div className='flex items-center gap-2 cursor-pointer p-3 rounded hover:bg-neutral-700'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user-profile' />
                    </div>
                </div>
                <div>
                    Alena Desuza
                </div>
            </div>
            <div className="divider my-0 py-0 h-0"></div>
        </div>
    )   
}

export default OtherUser
