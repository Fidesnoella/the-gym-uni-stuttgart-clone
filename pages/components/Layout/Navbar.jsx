import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Wrapper from '../wrapper';
import Logo from "../../../public/assets/logo.svg"
import LogoWhite from "../../../public/assets/logoWhite.svg"
import Search from "../../../public/assets/search.svg"
import SearchWhite from "../../../public/assets/searchWhite.svg"
import Menu from "../../../public/assets/menu.svg"
import Lang from "../../../public/assets/lang.svg"
import LangWhite from "../../../public/assets/langWhite.svg"
import cross from "../../../public/assets/cross.svg"
import chevron from "../../../public/assets/chevron-rights.svg"



const Navbar = () => {
    const [show, setShow] = useState(false)
    const [scrolled, setScrolled] = useState(0)

    useEffect(() => {
        const changescrolled = () => {
            // window.scrollY >= 10
            //     ? setScrolled(window.scrollY)
            //     : setScrolled(window.scrollY);
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", changescrolled);
        return () => {
            window.removeEventListener("scroll", changescrolled);
            // console.log(scrolled);

        };
    }, [scrolled]);

    // Remove scrolling
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [show]);

    // Remove background
    const dynamic = useRouter().asPath;
    useEffect(() => setShow(false), [dynamic]);

    return (
        <Wrapper>
            <nav className='relative max-w-6xl'>
                <div className='sm:flex hidden bg-[#004191] text-white justify-between px-4 py-2 '>
                    <button className='text-xs flex gap-3 items-center'>University of Stuttgart<span className='rounded-full border w-5 h-5'><Image src={chevron} width={20} height={20} /></span></button>
                    <button className='flex gap-2 cursor-pointer'>
                        <span><Image src={LangWhite} width={30} height={30} /></span>
                        <span>|</span>
                        <span><Image src={SearchWhite} width={30} height={30} /></span>
                    </button>
                </div>
                <div className='sm:hidden bg-[#004191] text-white flex justify-between px-[5.625rem] py-2'>
                    <button />
                    <button className='text-xs flex gap-3 items-center'>University of Stuttgart<span className='rounded-full border w-5 h-5'><Image src={chevron} width={20} height={20} /></span></button>
                </div>
                <div className={`bg-white  max-w-6xl flex items-center justify-between sm:gap-x-8 sm:px-4 px-[5.625rem]  ${scrolled > 12 ? "fixed w-full duration-300 ease-in-out top-0 py-4" : "py-10 relative top-[0.2%]"}`}>
                    <Link href={"/"}>
                        <div><Image src={Logo} /></div>
                    </Link>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <span className='sm:hidden block'><Image src={Lang} width={40} height={40} /></span>
                        <span className='sm:hidden block'><Image src={Search} width={30} height={30} /></span>
                        <span onClick={() => setShow(!show)}><Image src={Menu} width={30} height={30} /></span>
                    </div>
                </div>
            </nav>
            {
                show && (
                    <div className='h-screen bg-[#333333] bg-opacity-90 text-white top-0 duration-300 z-[9999] fixed inset-x-0 max-w-6xl mx-auto'>
                        <div className='flex items-center bg-[#333333] gap-x-8 justify-between sm:px-4 px-[5.625rem] py-10'>
                            <Link href={"/"}>
                                <div><Image src={LogoWhite} /></div>
                            </Link>
                            <div className='flex items-center gap-2'>
                                <span><Image src={SearchWhite} width={30} height={30} /></span>
                                <span onClick={() => setShow(!show)}><Image src={cross} width={40} height={30} /></span>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <div className='flex flex-col gap-5 text-lg text-white sm:px-4 px-[5.625rem]'>
                                {
                                    ["All study programs", "Starting Out", "Study organisation", "Examination Organisation", "Digital Services"].map((item, i) => {
                                        return (
                                            <Link href={item} key={i} className="flex w-full justify-between border-b-2 border-dashed p-2 hover:bg-[#00bcff]">
                                                <span>{item}</span>
                                                <span><Image src={chevron} width={20} height={20} /></span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </Wrapper>
    );
}

export default Navbar;