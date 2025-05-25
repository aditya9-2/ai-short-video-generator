"use client"

import { CircleUserIcon, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
    const options = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: 'Create New Vide',
            path: '/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldPlus
        },
        {
            id: 4,
            name: 'My Account',
            path: '/account',
            icon: CircleUserIcon
        },
    ]

    const path = usePathname()
    return (
        <div className='w-64 h-screen shadow-md p-2'>
            <div className='grid gap-2'>
                {options.map((menu) => (
                    <Link href={menu.path} key={menu.id}>
                        <div className={`flex gap-3 items-center p-3 hover:bg-primary hover:text-white hover:cursor-pointer hover:rounded-md
                            ${path === menu.path && `bg-primary text-white rounded-md`}
                            `}>
                            <menu.icon />
                            <h2>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default SideNav