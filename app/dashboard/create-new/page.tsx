/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import SelectDuration from '@/components/SelectDuration'
import SelectStyle from '@/components/SelectStyle'
import SelectTopic from '@/components/SelectTopic'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios';
import CustomLoading from '@/components/CustomLoading'
import { v4 as uuidv4 } from 'uuid';

const Sdata = ` Scene 1: A tiny cat chef begins preparing a gourmet meal. Scene 2: A dog is unsuccessfully trying to catch its tail.  Scene 3: Animals having an elegant tea party. Scene 4: A squirrel struggles to open a nut. Scene 5: An unlikely underwater bicycle ride. Scene 6: A superhero rabbit battles a villainous carrot. Scene 7: Unlikely friends share a pizza slice. Scene 8: A clumsy bear tries using a smartphone. Scene 9: A penguin slips on a banana peel. Scene 10: An unexpected race winner. 
﻿

s`

const CreateNew = () => {

    type Scene = {
        imagePrompt: string;
        ContentText: string
    };

    const [formData, setFormData] = useState<Record<string, any>>({});

    const [loading, setLoading] = useState<boolean>(false);
    const [videoScript, setVideoScript] = useState<Scene[]>();

    const onHandleInput = (fieldName: string, fieldValue: any) => {

        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))

    }

    // API Call for video script
    const getVideoScript = async () => {
        const totalPrompt = `write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field`;


        // console.log(totalPrompt);

        try {
            setLoading(true);
            const response = await axios.post<{ result: Scene[] }>('/api/get-video-script', {
                prompt: totalPrompt
            });

            // const data = response.data;
            // console.log(`data: ${JSON.stringify(data, null, 2)}`);
            const scenes = response.data.result;  // extract the array
            setVideoScript(scenes);
            generateAudioFile(scenes);

        } catch (err) {

            console.log(`Error occured while call getVideo API: ${err}`);
        } finally {
            setLoading(false);
        }
    }

    // API Call for audio script
    const generateAudioFile = async (scenes: Scene[] | string) => {
        const script = '';
        const id = uuidv4();
        // scenes.forEach(item => {
        //     script += item.ContentText + ' ';
        // });

        console.log(`Audio: ${script}`);
        try {
            setLoading(true)
            const response = await axios.post('/api/generate-audio', {
                text: Sdata,
                id: id
            });

            const data = response.data;
            console.log(data);
            setLoading(false);
        } catch (err) {

            console.log(`Error while call Audio API: ${err}`)
        } finally {
            setLoading(false);
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
                        onClick={() => generateAudioFile(Sdata)}

                    >
                        Generate
                    </Button>
                </div>
            </div>
            <CustomLoading loading={loading} />
        </div>
    )
}

export default CreateNew