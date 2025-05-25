import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='hidden md:block h-screen bg-white fixed left-0 mt-[78px] w-64 border-[1px]'>
                <SideNav />
            </div>
            <div>
                <Header />
                <div className='md:ml-65 md:mt-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout