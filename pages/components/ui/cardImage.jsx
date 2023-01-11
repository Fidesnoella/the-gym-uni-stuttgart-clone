import React from 'react';

function cardImage({ image, text, para, style, size }) {
    return (
        <div className={`bg-white pb-8 flex flex-col gap-5 ${style}`}>
            <span className={`rounded-full overflow-hidden mx-auto ${size}`}>
                <img src={image} />
            </span>
            <p className='px-4 font-bold text-xl'>{text}</p>
            <p className='px-4 text-base'>{para}</p>
        </div>
    );
}

export default cardImage;