import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface onUserSelectProp {
    onUserSelect: (type: string, value: string) => void
}
const SelectDuration = ({ onUserSelect }: onUserSelectProp) => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Duration</h2>
            <p className='text-gray-500 mt-2'>Select duration of your video</p>

            <Select onValueChange={(value) => {
                if (value !== 'Custom Prompt') {
                    onUserSelect('duration', value)
                }
            }} >
                <SelectTrigger className="w-[500px] mt-2 p-3 teext-lg">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="30 Seconds">30 Seconds</SelectItem>
                    <SelectItem value="60 Seconds">60 Seconds</SelectItem>
                </SelectContent>

            </Select>

        </div>
    )
}

export default SelectDuration