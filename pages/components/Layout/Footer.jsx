import React from 'react';
import Image from 'next/image';
import Wrapper from '../wrapper';
import LogoWhite from "../../../public/assets/logoWhite.svg"
import Facebook from "../../../public/assets/facebook.svg"

function Footer() {
    return (
        <Wrapper>
            <footer className='bg-[#333333] text-white sm:px-4 px-[5.625rem] pt-10 pb-20 flex flex-col gap-10'>
                <div className='flex md:flex-col gap-10 sm:items-start items-center'>
                    <div><Image src={LogoWhite} width={250} height={300} /></div>
                    <div className='flex flex-wrap justify-center items-center gap-3'>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, i) => {
                                return (
                                    <div className='flex flex-col items-center'>
                                        <button className='bg-black w-20 h-20 rounded-full flex flex-col  items-center justify-between p-10 text-white'>
                                            <span><Image src={Facebook} width={80} height={80} /></span>
                                        </button>
                                        <span>Facebook</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div></div>
                </div>
                <div className='grid sm:grid-cols-1 grid-cols-4 w-full gap-20'>
                    {
                        [1, 2, 3, 4].map((item, i) => {
                            return (
                                <div className='flex flex-col gap-y-5'>
                                    <h4 className='font-bold text-lg'>Audience</h4>
                                    <ul className='flex text-base flex-col'>
                                        <li className='underline hover:no-underline'>Students</li>
                                        <li className='underline hover:no-underline'>Students</li>
                                        <li className='underline hover:no-underline'>Students</li>
                                        <li className='underline hover:no-underline'>Students</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </footer>
        </Wrapper>
    );
}

export default Footer;