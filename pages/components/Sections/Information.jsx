import React from 'react';


const Information = () => {
    return (
        <div>
            <div className='mt-10 bg-[#004191] sm:px-4 px-[5.625rem] py-10'>
                <h1 className='text-white font-bold text-3xl pb-8'>Information for students</h1>
                <div className='grid sm:grid-cols-1 grid-cols-2 gap-5'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, i) => {
                            return (
                                <div className='flex items-center h-full w-full gap-x-3 text-white'>
                                    <div className='sm:w-24 w-48 sm:h-16 h-24 border cursor-pointer group hover:bg-white border-white rounded-full flex flex-col  items-center justify-center'>
                                        <span className='group-hover:stroke-black'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='font-bold sm:text-xl text-2xl'>All study programs</h3>
                                        <p className='text-base text-[#b5cae1]'>
                                            On the webpages of your degree program you will find information on the study program structure, …</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Information;