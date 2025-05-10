import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full h-15 bg-white flex items-center justify-between px-10'>
            <div className='h-10 w-10 bg-black'>

            </div>
            <div className='flex text-bold items-center gap-20'>
                <Link href={"/"} className='hover:text-[#3752C7] '>Home</Link>
                <Link href={"/about"} className='hover:text-[#3752C7]'>About</Link>
                <Link href={"/events"} className='hover:text-[#3752C7]'>Events</Link>
                <Link href={"/contact"} className='hover:text-[#3752C7]'>Contact</Link>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <Link href={"/login"}>
                    <button className='px-5 py-1 rounded-md bg-[#3752C7] text-white cursor-pointer'>
                        Login
                    </button>
                </Link>
                <Link href={"/register"}>
                    <button className='px-5 py-1 rounded-md bg-[#7B5590] text-white cursor-pointer'>
                        Register
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar