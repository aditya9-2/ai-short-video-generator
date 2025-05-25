import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
    return (
        <div className='h-screen w-full flex items-center justify-between 
                        bg-gradient-to-br from-[#141130] via-[#272261] to-[#333358] 
                        text-white'>

            <div>
                <Image
                    src={'/landing.png'}
                    alt='landing'
                    width={486}
                    height={250}
                    className='hidden md:block max-w-full h-auto object-contain'
                    priority
                ></Image>
            </div>
            <div className='md:px-[7rem] p-10 flex justify-center items-center'>
                <SignUp />
            </div>
        </div>
    )
}