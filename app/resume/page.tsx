'use client';
import { useChat } from 'ai/react';
import { INITIAL_RESUME, INITIAL_DIRECTION } from './initial_message';
import { Message } from 'ai';

export default function Resume() {
    const initialMessages: Message[] = [
        {
            role: 'system',
            content: INITIAL_RESUME,
            id: 'system-message' 
        },
        {
           role: 'system',
           content: INITIAL_DIRECTION,
           id: 'system-message-direction' 
        }
    ]
    const { messages, handleSubmit, input, handleInputChange} = useChat({
        initialMessages
    });
    return (
        <div>
           {messages.map(m => {
            if (m.role !== 'system') return (
                <div key={m.id}>
                    {m.role}: {m.content}
                </div>
            );
           })}
            <form onSubmit={handleSubmit}>
          Ask a Question about Brad.
          <input
            value={input}
            onChange={handleInputChange}
          />
      </form>
            
        </div>
        
    );
}
