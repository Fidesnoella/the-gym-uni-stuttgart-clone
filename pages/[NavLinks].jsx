import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

function menuItem() {
    const menus = useRouter();
    const name = menus.query.NavLinks
    return (
        <div className='flex flex-col justify-center items-center gap-10 my-20'>
            <span className='text-3xl'> {name} Page</span>
            <span className='text-blue-700 text-2xl'><Link href={"/"}>Back Home</Link></span>
        </div>
    );
}

export default menuItem;