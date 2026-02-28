import { useState } from "react"

export default function ThoughtsPage({ user }) {
  const [text, setText] = useState("")
  const [entries, setEntries] = useState([])

  if (!user) {
    return (
      <div className="text-center text-gray-400">
        Please login to access Midnight Thoughts.
      </div>
    )
  }

  const handleSave = () => {
    if (!text.trim()) return
    setEntries([{ text }, ...entries])
    setText("")
  }

  return (
    <div className="text-center">

      <h2 className="text-4xl font-bold mb-4 text-purple-400">
        Midnight Thoughts
      </h2>

      <div className="bg-white/5 backdrop-blur-xl
                      border border-white/10
                      rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What’s on your mind tonight?"
          className="w-full bg-transparent resize-none
                     outline-none text-gray-200
                     placeholder-gray-500 h-28"
        />

        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 rounded-full
                     bg-gradient-to-r from-purple-600 to-pink-600
                     hover:opacity-90 transition">
          Save Thought
        </button>
      </div>

      <div className="mt-6 space-y-3 max-w-2xl mx-auto">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10
                       rounded-xl p-4">
            {entry.text}
          </div>
        ))}
      </div>
    </div>
  )
}