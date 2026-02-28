import { useState } from "react"

export default function ChatPage({ user }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  if (!user) {
    return (
      <div className="text-center text-gray-400">
        Please login to access 1-1 Chat.
      </div>
    )
  }

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages([...messages, { text: message }])
    setMessage("")
  }

  return (
    <div className="max-w-3xl mx-auto bg-white/5
                    border border-white/10 rounded-2xl
                    h-[500px] flex flex-col">

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div key={index}
               className="bg-purple-600 px-4 py-2 rounded-xl w-fit">
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-white/10 rounded-full px-4 py-2
                     outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-5 py-2 rounded-full
                     bg-gradient-to-r from-purple-600 to-pink-600">
          Send
        </button>
      </div>
    </div>
  )
}