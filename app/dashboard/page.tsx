"use client"

import { Button } from '@/components/ui/button'
import { FilePlus } from 'lucide-react'
import React, { useState } from 'react'
import EmptyList from './_components/EmptyList'
import Link from 'next/link'


const Dashboard = () => {

    const [videoList, setVideoList] = useState([])

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold text-primary'>Dashboard</h2>
                <Link href={'/dashboard/create-new'}>
                    <Button className='flex gap-1.5 items-center cursor-pointer'>{<FilePlus />} Create new</Button>
                </Link>
            </div>
            {
                videoList?.length === 0 && <div><EmptyList /></div>
            }
        </div>
    )
}

export default Dashboard