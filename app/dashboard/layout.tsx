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
            <div className='hidden md:block h-screen bg-white fixed left-0 mt-[70px] w-64 border-[1px]'>
                <SideNav />
            </div>
            <div>
                <div className='fixed top-0 left-0 w-full'>
                    <Header />
                </div>
                <div className='md:ml-65 md:mt-2 p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout