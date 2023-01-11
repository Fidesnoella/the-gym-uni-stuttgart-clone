import React from 'react';

function Contact() {
    return (
        <div>
            <div className='bg-white sm:px-4 px-[5.625rem] py-20'>
                <h1 className='font-bold text-3xl pb-5'>Contact</h1>
                <div className='grid sm:grid-cols-1 grid-cols-3 gap-7'>
                    {
                        [["https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000", "Dezernat Internationales", "Email", "+49 711 685 68566", "Write e-mail"],
                        ["https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620", "Student Counseling Center", "Profile Image", "+49 711 685 18525"],
                        ["https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620", "Student Service and Examination Office", "Profile Image", "+49 711 685 18525"]
                        ].map((item, i) => {
                            return (
                                <div className='flex flex-col gap-y-5 border-2 border-black p-4'>
                                    <span className='rounded-full overflow-hidden mx-auto mt-5'><img src={item[0]} alt="" /></span>
                                    <h2 className='font-bold text-2xl'>{item[1]}</h2>
                                    <div className='flex flex-col gap-y-3 pb-10'>
                                        <span>{item[2]}</span>
                                        <span>{item[3]}</span>
                                        <span>{item[4]}</span>
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

export default Contact;