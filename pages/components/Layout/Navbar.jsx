import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/assets/logo.svg"
import LogoWhite from "../../../public/assets/logoWhite.svg"
import Search from "../../../public/assets/search.svg"
import SearchWhite from "../../../public/assets/searchWhite.svg"
import Menu from "../../../public/assets/menu.svg"
import Lang from "../../../public/assets/lang.svg"
import cross from "../../../public/assets/cross.svg"
import chevron from "../../../public/assets/chevron-rights.svg"
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <nav>
                <div className='sm:flex hidden  bg-[#004191] text-white justify-between px-4 py-2'>
                    <button className='text-xs flex gap-3 items-center'>University of Stuttgart<span className='rounded-full border w-5 h-5'><Image src={chevron} width={20} height={20} /></span></button>
                    <button className='flex gap-2'>
                        <span><Image src={Lang} width={40} height={40} /></span>
                        <span>|</span>
                        <span><Image src={Search} width={30} height={30} /></span>
                    </button>
                </div>
                <div className='sm:hidden bg-[#004191] text-white flex justify-between px-[5.625rem] py-2'>
                    <button />
                    <button className='text-xs flex gap-3 items-center'>University of Stuttgart<span className='rounded-full border w-5 h-5'><Image src={chevron} width={20} height={20} /></span></button>
                </div>
                <div className='bg-white flex items-center justify-between sm:px-4 px-[5.625rem] py-10'>
                    <div><Image src={Logo} /></div>
                    <div className='flex items-center gap-3'>
                        <span className='sm:hidden block'><Image src={Lang} width={40} height={40} /></span>
                        <span className='sm:hidden block'><Image src={Search} width={30} height={30} /></span>
                        <span onClick={() => setShow(!show)}><Image src={Menu} width={30} height={30} /></span>
                    </div>
                </div>
            </nav>
            {
                show && (
                    <div className='h-screen bg-[#333333] bg-opacity-90 text-white -mt-36 duration-300'>
                        <div className='flex items-center bg-[#333333] justify-between px-[5.625rem] py-10'>
                            <div><Image src={LogoWhite} /></div>
                            <div className='flex items-center gap-2'>
                                <span><Image src={SearchWhite} width={30} height={30} /></span>
                                <span onClick={() => setShow(!show)}><Image src={cross} width={40} height={30} /></span>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <div className='flex flex-col gap-5 text-lg text-white px-[5.625rem]'>
                                {
                                    ["All study programs", "Starting Out", "Study organisation", "Examination Organisation", "Digital Services"].map((item, i) => {
                                        return (
                                            <span className='border-b-2 border-dashed p-2 hover:bg-[#00bcff]'>
                                                <Link href={item} key={i} className="flex justify-between">
                                                    <span>{item}</span>
                                                    <span><Image src={chevron} width={20} height={20} /></span>
                                                </Link>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;