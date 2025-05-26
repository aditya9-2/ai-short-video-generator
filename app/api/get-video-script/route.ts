/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { generteVideo } from '@/configs/aiModel';

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({
                error: 'Prompt is required.'
            }, {
                status: 400
            });
        }

        const rawResult: any = await generteVideo(prompt);

        // Extract JSON block from Markdown code fence
        const jsonMatch = rawResult.match(/```json\s*([\s\S]*?)\s*```/);
        const extractedJson = jsonMatch ? jsonMatch[1] : rawResult;

        const parsed = JSON.parse(extractedJson);

        return NextResponse.json({ result: parsed }, { status: 200 })

    } catch (err) {
        console.error('Error generating:', err);
        return NextResponse.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
