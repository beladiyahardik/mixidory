import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    const { pathname } = { ...router };
    return (
        <div className='footer'>
            <Link href='/home'>
                <div className={`cursor-pointer flex justify-center items-center ${pathname === '/home' ? 'menuIcons' : ''}`}><Image src='/icons/home.png' width='24' height='24' /></div>
            </Link>

            <Link href='/explore'>
            <div className={`cursor-pointer flex justify-center items-center ${pathname === '/explore' ? 'menuIcons' : ''}`}><Image src='/icons/explore.png' width='24' height='24' /></div>
            </Link>

            <Link href='/home'>
            <div className={`cursor-pointer flex justify-center items-center ${pathname === '/notification' ? 'menuIcons' : ''}`}><Image src='/icons/notification.png' width='24' height='24' /></div>
            </Link>

            <Link href='/home'>
            <div className={`cursor-pointer flex justify-center items-center ${pathname === '/star' ? 'menuIcons' : ''}`}><Image src='/icons/start.png' width='24' height='24' /></div>
            </Link>

        </div>
    )
}

export default Footer