"use client"

import Image from 'next/image'
import React, { useState } from 'react'

interface onUserSelectProp {
    onUserSelect: (type: string, value: string) => void;
}
const SelectStyle = ({ onUserSelect }: onUserSelectProp) => {
    const styles = [
        {
            name: 'Realistic',
            image: '/realistic.png',
        },
        {
            name: 'Anime',
            image: '/anime.png',
        },
        {
            name: 'Comic',
            image: '/comic.png',
        },
        {
            name: 'GTA',
            image: '/gta.png',
        },
    ]
    const [selected, setSelected] = useState<string | undefined>();
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Style</h2>
            <p className='text-gray-500 mt-2'>Select Video Style</p>
            <div className='mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                {styles.map((style, index) => (
                    <div
                        key={index}
                        className={`relative hover:scale-105 transition-all duration-300 hover:cursor-pointer
                        ${selected === style.name ? 'ring-4 ring-yellow-500 scale-105 rounded-lg' : 'hover:scale-105'}`}>
                        <Image src={style.image}
                            alt='image'
                            width={100}
                            height={100}
                            className='h-48 object-cover rounded-lg w-full'
                            onClick={() => {
                                setSelected(style.name);
                                onUserSelect('imageStyle', style.name);
                            }}
                        />
                        <h2 className='absolute p-1 bg-black text-white text-center bottom-0 w-full rounded-b-lg'>{style.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle