import clsx from 'clsx'

type ChatGPTAgent = 'user' | 'system' | 'assistant'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

const convertNewLines = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

export function ChatLine({ role = 'assistant', content }: ChatGPTMessage) {
  if (!content) {
    return null
  }
  const formatteMessage = convertNewLines(content)

  return (
    <div
      className={
        role != 'assistant' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
        <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-1 gap-4">
              <p className="font-large text-xxl text-gray-900">            
                {role == 'assistant' ? 'AI Assistant' : 'You'}
              </p>
              <p
                className={clsx(
                  'text ',
                  role == 'assistant' ? 'font-semibold font- ' : 'text-gray-400'
                )}
              >
                {formatteMessage}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}