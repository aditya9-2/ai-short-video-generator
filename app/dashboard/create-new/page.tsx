/* eslint-disable @typescript-eslint/ban-ts-comment */
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

const Sdata = ` The old forest whispered secrets only the wind could understand. A young woman strayed from the path, lured by an unnatural glow. Something watched her from the darkness, something ancient and malevolent. Panic seized her, as unseen horrors pursued her through the trees. She stumbled upon a derelict mansion, its windows like empty eyesores. Within its walls, a spectral presence awaited her arrival. Screams echoed through the halls as ethereal beings encircled her. Exhausted, she fell to her knees, her scream dying into silence. Dawn broke, but the forest held its secrets, waiting for another victim.`

// Utility to strip out "Scene <number>:" labels from a string
function stripSceneLabels(input: string): string {
    return input
        .replace(/Scene\s*\d+\s*:/gi, '')    // remove labels
        .replace(/\s+/g, ' ')                   // normalize whitespace
        .trim();                                 // trim ends
}



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

        // Utility to clean an array of Scene objects
        function cleanScenes(scenes: Scene[]): Scene[] {
            return scenes.map(scene => ({
                ...scene,
                ContentText: stripSceneLabels(scene.ContentText)
            }));
        }

        console.log(totalPrompt);

        try {
            setLoading(true);
            const response = await axios.post<{ result: Scene[] }>('/api/get-video-script', {
                prompt: totalPrompt
            });

            const scenes = response.data.result;  // extract the array
            console.log(`Sences: ${scenes}`);
            const cleaned = cleanScenes(scenes);
            console.log(`Before Cleaned: ${cleaned}`)
            console.log(`Cleaned script: ${JSON.stringify(cleaned)}`);
            // @ts-ignore
            setVideoScript(JSON.stringify(cleaned));
            // @ts-ignore
            generateAudioFile(JSON.stringify(cleaned));

        } catch (err) {

            console.log(`Error occured while call getVideo API: ${err}`);
        } finally {
            setLoading(false);
        }
    }

    // API Call for audio script
    const generateAudioFile = async (cleaned: Scene[] | string) => {
        //let script = '';
        const id = uuidv4();
        // cleaned.forEach(item => {
        //     script += item.ContentText + ' ';
        // });

        //console.log(`Final Script: ${script}`);
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
            <CustomLoading loading={true} />
        </div>
    )
}

export default CreateNew