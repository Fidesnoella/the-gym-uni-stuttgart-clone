import React from 'react';

function cardText({ title, para, style }) {
    return (
        <div className={`bg-white p-6 flex flex-col gap-3 ${style}`}>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='text-base'>{para}</p>
        </div>
    );
}

export default cardText;