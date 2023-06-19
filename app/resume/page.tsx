'use client';
import { useChat } from 'ai/react';
import { Message } from 'ai';
import { Chat } from '@/components/Chat';

export default function Resume() {
    return (
        <div>
            <div className="flex justify-center items-center text-gray-300 font-noto pb-4">
            <p className="px-16 pt-4">
                Instead of reading my resume, you can try chatting with my AI Assistant below. It will answer any questions you might have about my resume.
                <br />
                Try asking something like &quot;What skills does Brad have that would fit a full-stack developer role?&quot;
            </p>
            
        </div>
            <div className='flex justify-center items-center pb-20'>
                <Chat />
            </div>

            <div className="flex justify-center items-center">
                <iframe src='BradleyGulli_Resume_2023.pdf' className="h-screen w-4/5 " />
            </div>
        </div>
        
    );
}
