import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='p-4 bg-[#1a1a1a] shadow-2xl flex justify-between items-center'>
            <div>
                <Image src="./logo.svg" width={140} height={140} alt='logo' />
            </div>
            <div className='flex gap-3 items-center'>
                <Button variant={'secondary'} className='cursor-pointer'>Dashboard</Button>
                <UserButton />
            </div>
        </div>
    )
}

export default Header