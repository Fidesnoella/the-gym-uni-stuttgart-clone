import React from 'react';

const wrapper = ({ children }) => {
    return (
        <div className='bg-[#dddddd]'>
            <div className='mx-auto max-w-6xl'>
                {children}
            </div>
        </div>
    )
}

export default wrapper;