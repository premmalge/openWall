import { useState } from "react"

function ChatUI({ user }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { sender: "other", text: "Hey… you up?" },
    { sender: "me", text: "Yeah." }
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages([...messages, { sender: "me", text: message }])
    setMessage("")
  }

  return (
    <div className="bg-black text-white rounded-2xl p-4 h-[75vh] flex flex-col border border-white/10">

      <div className="pb-4 border-b border-white/10 font-semibold">
        Private chat as @{user}
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 py-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.sender === "me"
                ? "ml-auto bg-white text-black"
                : "bg-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something..."
          className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700"
        />
        <button
          onClick={sendMessage}
          className="bg-white text-black px-5 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatUI