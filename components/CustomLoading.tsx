import React from 'react'
import { AlertDialog, AlertDialogContent, } from "@/components/ui/alert-dialog"
import Image from 'next/image'

const CustomLoading = ({ loading }: {
    loading: boolean
}) => {
    return (

        <AlertDialog open={loading}>

            <AlertDialogContent className='bg-white w-28'>

                <div className='flex flex-col justify-center items-center my-10'>
                    <Image src="/progress.gif" width={100} height={100} alt='progess gif' ></Image>
                    <h2 className='font-bold text-xl text-center'>Generating...<br /> please do not referesh</h2>
                </div>

            </AlertDialogContent>
        </AlertDialog>


    )
}

export default CustomLoading