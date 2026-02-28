import { useState } from "react"

function ConfessionsPage() {
  const [text, setText] = useState("")
  const [confessions, setConfessions] = useState([])

  // Random Name Generator
  const generateAnonymousName = () => {
    const words = [
      "Midnight",
      "Silent",
      "Hidden",
      "Lost",
      "Dark",
      "Secret",
      "Lonely",
      "Broken",
      "Faded",
      "Mystic",
    ]

    const nouns = [
      "Soul",
      "Moon",
      "Heart",
      "Dream",
      "Shadow",
      "Star",
      "Whisper",
      "Echo",
      "Flame",
      "Storm",
    ]

    const randomWord =
      words[Math.floor(Math.random() * words.length)]

    const randomNoun =
      nouns[Math.floor(Math.random() * nouns.length)]

    const randomNumber = Math.floor(Math.random() * 100)

    return `${randomWord}${randomNoun}${randomNumber}`
  }

  const handlePost = () => {
    if (!text.trim()) return

    const newConfession = {
      id: Date.now(),
      content: text,
      username: generateAnonymousName(),
      time: new Date().toLocaleTimeString(),
    }

    setConfessions([newConfession, ...confessions])
    setText("")
  }

  return (
    <div className="max-w-3xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-light text-center mb-2">
        Confessions
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Say what you can't say out loud.
      </p>

      {/* Input Box */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10
                      rounded-2xl p-6 shadow-xl mb-8">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share something anonymously..."
          className="w-full h-28 bg-transparent outline-none
                     resize-none text-white placeholder-gray-400"
        />

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            Your identity is hidden
          </span>

          <button
            onClick={handlePost}
            className="px-6 py-2 rounded-full
                       bg-gradient-to-r from-purple-600 to-pink-600
                       hover:scale-105 transition"
          >
            Post
          </button>
        </div>
      </div>

      {/* Confessions List */}
      <div className="space-y-6">
        {confessions.length === 0 && (
          <p className="text-center text-gray-500">
            No confessions yet. Be the first.
          </p>
        )}

        {confessions.map((item) => (
          <div
            key={item.id}
            className="backdrop-blur-xl bg-white/5 border border-white/10
                       rounded-2xl p-6 shadow-lg"
          >
            <div className="flex justify-between mb-3">
              <span className="text-purple-400 font-medium">
                @{item.username}
              </span>
              <span className="text-sm text-gray-500">
                {item.time}
              </span>
            </div>

            <p className="text-gray-200">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConfessionsPage