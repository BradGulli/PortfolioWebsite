'use client';
import { useChat } from 'ai/react';
import { INITIAL_RESUME, INITIAL_DIRECTION } from './initial-message';
import { Message } from 'ai';
import { ChatLine } from './ChatLine'

function InputMessage({ input, handleInputChange, handleSubmit}: any) {
  return (
  <div className="mt-6 flex clear-both pt-10 w-full">
    <form onSubmit={handleSubmit} className='w-full'>
      <input
        type="text"
        aria-label="chat input"
        required
        className="flex-auto appearance-none rounded-md border-4 border-zinc-900 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm w-full"
        value={input}
        onChange={handleInputChange}
        placeholder="Ask a question about Brad's resume here..."
      />
    </form>
  </div>
)
}

export function Chat() {
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
    <div className="rounded-2xl border-zinc-100  lg:border p-2 bg-white w-3/4">
      {messages.map(({ content, role }, index) => {
        if (role !== 'system') return (
          <ChatLine key={index} role={role} content={content} />
        )
        })}
      <InputMessage
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}