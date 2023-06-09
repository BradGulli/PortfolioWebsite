import { OpenAIStream, StreamingTextResponse } from 'ai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
    const { messages } = await req.json();

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: messages.map((message: any) => ({
            content: message.content,
            role: message.role
        }))
    });
    
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}