import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
    <div className='bg-[var(--blue)] text-white w-full px-10 py-5 mt-20 flex justify-between items-center'>
        <div>
            <h3 className='text-xl font-semibold mb-5'><span className='text-[var(--accent)]'>Everybody Can Move,</span> Inc</h3>
            <a href="https://www.instagram.com/everyonecanmove_inc/?hl=en">
                <FaInstagram size={30} className='hover:text-[var(--accent)]' />
            </a>
        </div>
        <div>

        </div>
        <div className='flex gap-8 max-sm:gap-4'> 
       
            <div className='border-l-2 border-white h-24 max-sm:h-24'></div>
            <ul>
                <li className='underline'>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className='underline'>
                    <Link href={"/meettheteam"}>
                        Meet The Team
                    </Link>
                </li>
                <li className='underline'>
                    <Link href={"/events"}>
                        Events
                    </Link>
                </li>
                <li className='underline'>
                    <Link href={"/volunteer"}>
                        Volunteer
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    <div className='bg-[var(--blue)] text-white w-full px-10 py-5 flex justify-between items-center'>
        <h4>Everybody Can Move, Inc. is a proud 501(c)(3) nonprofit charity. EIN 39-4861561</h4>
    </div>
    </>
  )
}

export default Footer