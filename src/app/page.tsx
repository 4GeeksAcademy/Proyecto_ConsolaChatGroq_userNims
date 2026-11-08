'use client'

import { useState } from 'react'
import { ChatPrototype, type ChatMessage, type ChatMetrics } from '@/components/chat-prototype'

const emptyMetrics: ChatMetrics = {
  promptTokens: null,
  completionTokens: null,
  totalTokens: null,
  latestResponse: null,
}

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  function handleSend(content: string) {
    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: 'user',
        content,
        time: new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
      },
    ])
  }

  return (
    <ChatPrototype
      messages={messages}
      metrics={emptyMetrics}
      onSend={handleSend}
      onClear={() => setMessages([])}
    />
  )
}
