import React from 'react'

const Seperator = () => {
    return (
        <div className='flex items-center space-x-4 my-5'>
            <div className='w-16 h-px bg-gradient-to-r from-primary to-primary/50'></div>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <div className='w-8 h-px bg-gradient-to-r from-primary/50 to-transparent'></div>
        </div>
    )
}

export default Seperator