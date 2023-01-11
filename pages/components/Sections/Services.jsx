import React from 'react';
import Image from 'next/image';
import Chevron from "../../../public/assets/chevron-rights.svg"

const Services = () => {
    return (
        <div>
            <div className='bg-white pb-10 sm:px-4 px-[5.625rem]'>
                <div className='grid sm:grid-cols-1 grid-cols-3 gap-5'>
                    {
                        [["https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335", "Digital services", "C@MPUS - campus management and lectures", "How to C@MPUS", "LIAS", "University library", "Further digital services"]
                            , ["https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500", "Organizing your studies", "Getting started", "Formalities", "Exam organization", "Student Service and Examination Office", "Academic calendar"],
                        ["https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335", "University life", "stuvus - the Student Union of the University of Stuttgart [de]", "Studierendenwerk Stuttgart (Student Services)", "Internships, mentoring and career", "Campus map", "Lost property"]].map((item, i) => {
                            return (
                                <div className='flex flex-col gap-y-5'>
                                    <img src={item[0]} alt="" className='sm:mx-auto' />
                                    <h4 className='font-bold text-2xl'>{item[1]}</h4>
                                    <ul className='flex flex-col gap-y-3 cursor-pointer'>
                                        <li className='text-[#004191] font-bold hover:underline text-lg flex gap-3 items-center'><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>{item[2]}</li>
                                        <li className='text-[#004191] font-bold hover:underline text-lg flex gap-3 items-center'><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>{item[3]}</li>
                                        <li className='text-[#004191] font-bold hover:underline text-lg flex gap-3 items-center'><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>{item[4]}</li>
                                        <li className='text-[#004191] font-bold hover:underline text-lg flex gap-3 items-center'><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>{item[5]}</li>
                                        <li className='text-[#004191] font-bold hover:underline text-lg flex gap-3 items-center'><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                                        </span>{item[6]}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#004191] font-bold my-10 text-white hover:bg-gray-900 outline-none py-4 px-8'>Study programs' webpages for students</button>
                </div>
            </div>
        </div>
    );
}

export default Services;