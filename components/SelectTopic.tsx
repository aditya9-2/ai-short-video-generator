"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface SelectTopicProps {
    onUserSelect: (type: string, value: string) => void;
}

const SelectTopic = ({ onUserSelect }: SelectTopicProps) => {

    const options = ['Custom Prompt', 'Funny Video', 'Random AI Stories', 'Horror Stories', 'Historical Facts']
    const [selectedOption, setSelectedOption] = useState<string | undefined>()

    return (
        <div>
            <h2 className='font-bold text-2xl text-primary'>Content</h2>
            <p className='text-gray-500 mt-2'>Choose the topic of your video</p>

            <Select onValueChange={(value) => {
                setSelectedOption(value)
                if (value !== 'Custom Prompt') {
                    onUserSelect('topic', value)
                }
            }}>
                <SelectTrigger className="w-[480px] mt-2  text-lg">
                    <SelectValue placeholder="Select Genre" />
                </SelectTrigger>
                <SelectContent>

                    {options.map((option, idx) => (
                        <SelectItem key={idx} value={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {
                selectedOption === 'Custom Prompt' && <Textarea
                    className='mt-3 p-5 w-[480px]'
                    placeholder='Enter your custom prompt here'
                    onChange={(e) => {
                        onUserSelect('topic', e.target.value)
                    }}
                />
            }

        </div >
    )
}

export default SelectTopic