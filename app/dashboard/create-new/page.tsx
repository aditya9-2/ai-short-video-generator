/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import SelectDuration from '@/components/SelectDuration'
import SelectStyle from '@/components/SelectStyle'
import SelectTopic from '@/components/SelectTopic'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios';

const CreateNew = () => {

    const [formData, setFormData] = useState<Record<string, any>>({})
    const onHandleInput = (fieldName: string, fieldValue: any) => {

        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))

    }

    // API for video script

    const getVideoScript = async () => {
        const totalPrompt = 'write a script to generate ' + formData.duration + ' video on topic: ' + formData.topic + '  along with AI image prompt in ' + formData.imageStyle + ' format for each scene and give me result in JSON format with imagePrompt and ContentText as field';

        // console.log(totalPrompt);

        try {

            const response = await axios.post('/api/get-video-script', {
                prompt: totalPrompt
            });

            const data = response.data;

            console.log(`data: ${JSON.stringify(data)}`);

        } catch (err) {

            console.log(`Error occured while call getVideo API: ${err}`);
        }


    }

    return (
        <div className='md:px-10'>
            <h2 className='font-bold text-4xl text-primary text-center'>Create New Short Video</h2>

            <div className='mt-10 shadow-md p-10'>
                {/* select Topic */}
                <SelectTopic onUserSelect={onHandleInput} />
                {/* select Style */}
                <SelectStyle onUserSelect={onHandleInput} />
                {/* select duration */}
                <SelectDuration onUserSelect={onHandleInput} />
                {/* create button */}
                <div className='flex justify-center items-center'>
                    <Button
                        className='mt-10 w-48 hover:cursor-pointer'
                        onClick={getVideoScript}

                    >
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreateNew