
import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const { audioFileURL } = await req.json();

        const client = new AssemblyAI({
            apiKey: process.env.CAPTION_API!
        });

        const audioFile = audioFileURL

        const params = {
            audio: audioFile,
            speech_model: "universal" as const,
        };


        const transcript = await client.transcripts.transcribe(params);

        console.log(transcript.words);
        return NextResponse.json({
            'Result': transcript.words
        });

    } catch (err) {
        console.log(`Error While Creating captions: ${err}`);
        return NextResponse.json({
            'Error': err
        });
    }
}