import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className='w-full bg-[var(--base)] shadow-md px-10 py-1 
    flex justify-between items-center'>
        <Link href={"/"}>
            <Image src="/assets/logo.PNG" alt='Logo' width={100} height={100} >

            </Image>
        </Link>
        <div className='font-one font-medium text-[var(--blue)] max-sm:hidden'>
            <ul className='flex gap-8'>
                <Link href={"/apply"}>
                    <li className='inline hover:underline cursor-pointer'>Apply Now</li>
                </Link>
                <Link href={"/aboutus"}>
                    <li className='inline hover:underline cursor-pointer'>Meet The Team</li>
                </Link>
            </ul>
        </div>

        {/** Mobile Menu */}
        <div className='min-sm:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Image className='cursor-pointer' src="/assets/hamburger.webp" width={50} height={50} alt='hamburger menu'>

                    </Image>
                </SheetTrigger>
                <SheetContent className='bg-[var(--base)]'>
                    <SheetHeader>
                    <SheetTitle className='text-[var(--accent)] text-2xl'>
                        Everyone Can Move, <span className='text-[var(--blue)]'>INC.</span>
                    </SheetTitle>
                    <SheetDescription>
                        <ul className='flex flex-col gap-4 mt-3 text-[var(--blue)] font-semibold text-lg'>
                             <Link href={"/"}>
                                <li className='inline hover:underline cursor-pointer'>Home</li>
                            </Link>
                            <Link href={"/apply"}>
                                <li className='inline hover:underline cursor-pointer'>Apply Now</li>
                            </Link>
                            <Link href={"/aboutus"}>
                                <li className='inline hover:underline cursor-pointer'>Meet The Team</li>
                            </Link>
                        </ul>
                        
                        <div className='bottom-0 absolute'>
                            <Link href={"/"}>
                                <Image src="/assets/logo.PNG" alt='Logo' width={150} height={150} >

                                </Image>
                            </Link>
                        </div>
                      
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </div>
  )
}

export default Navbar