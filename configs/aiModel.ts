
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const config = {
    responseMimeType: 'application/json',
};
const model = 'gemini-1.5-flash';

export const generteVideo = async (prompt: string) => {
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt,
                },
            ],
        },
        {
            role: 'model',
            parts: [
                {
                    text: `\`\`\`json
[
  {
    "imagePrompt": "Realistic painting of a bustling 1888 Parisian street, cobblestones, horse-drawn carriages, gas lamps, people in period clothing, a sense of movement and energy.",
    "ContentText": "Paris, 1888. The city hummed with a nervous energy.  The whispers of a new artistic movement, Impressionism, were beginning to roar."
  },
  {
    "imagePrompt": "Realistic portrait of a young, determined Vincent van Gogh, paintbrush in hand, intense gaze, wearing a simple shirt and jacket, slightly dishevelled hair.",
    "ContentText": "Vincent van Gogh, a struggling artist, poured his emotions onto the canvas, capturing the vibrancy and the shadows of city life."
  },
  {
    "imagePrompt": "Realistic depiction of Van Gogh's 'Starry Night' but with a slight impressionistic blur, highlighting the swirling movement of the stars and the expressive brushstrokes.",
    "ContentText": "His iconic 'Starry Night' wasn't painted from a real scene, but from the window of an asylum. It reflects his tormented genius and inner turmoil."
  },
  {
    "imagePrompt": "Realistic image of a close-up of Van Gogh's brushstrokes on a canvas, emphasizing the texture and the vibrant colors of yellow and blue.",
    "ContentText": "His unique style, characterized by bold colors and expressive brushstrokes, revolutionized art."
  },
  {
    "imagePrompt": "Realistic image of a dimly lit cafe in Paris at night, with a few figures sitting at tables, a sense of mystery and quiet contemplation.",
    "ContentText": "In the cafes of Montmartre, Van Gogh sought solace and inspiration, connecting with fellow artists and forging his unique artistic voice."
  },
  {
    "imagePrompt": "Realistic depiction of a sunflower field in bright sunlight, with sunflowers of varying heights and stages of bloom, showing intense color and detail.",
    "ContentText": "His love for nature is evident in his iconic series of sunflower paintings, capturing the radiant beauty of the natural world."
  },
  {
    "imagePrompt": "Realistic portrait of Paul Gauguin, a fellow artist, with a thoughtful expression, dressed in vibrant clothing, standing against a background of a lush landscape.",
    "ContentText": "Van Gogh's friendship with Paul Gauguin, though tempestuous, was pivotal in shaping his artistic journey."
  },
    {
    "imagePrompt": "Realistic image of a self-portrait of Van Gogh, showing his intense gaze and emotional depth, with the background subtly suggestive of his troubled inner world.",
    "ContentText": "A short life, marked by struggle and mental illness, but a legacy that continues to inspire and captivate generations."
  }
]
\`\`\`

**Note:**  This JSON provides prompts for a 30-second video.  The actual timing will depend on the video editing software and the length of each scene transition.  You'll need a video editing program and an AI art generator (like Midjourney, Dall-E 2, Stable Diffusion) to create the video using these prompts.  Remember to adjust the image prompts to better suit the AI art generator you are using, as different models respond to slightly different phrasing and styles.  The text needs to be voiced over or added as subtitles in your video editing software.
`,
                },
            ],
        },
        // {
        //     role: 'user',
        //     parts: [
        //         {
        //             text: `INSERT_INPUT_HERE`,
        //         },
        //     ],
        // },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    let fullResponse = '';


    for await (const chunk of response) {
        fullResponse += chunk.text || ''
        console.log(fullResponse);
    }

    return fullResponse

}




