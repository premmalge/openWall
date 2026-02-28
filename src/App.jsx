import { useState } from "react"
import Navbar from "./components/Navbar"
import AuthPage from "./components/AuthPage"

import ConfessionsPage from "./pages/ConfessionsPage"
import ThoughtsPage from "./pages/ThoughtsPage"
import ChatPage from "./pages/ChatPage"

export default function App() {
  const [activeTab, setActiveTab] = useState("confessions")
  const [user, setUser] = useState(null)

  // Show Login / Signup Page
  if (activeTab === "login" || activeTab === "signup") {
    return (
      <AuthPage
        mode={activeTab}
        onLogin={(username) => {
          setUser(username)
          setActiveTab("confessions")
        }}
        onBack={() => setActiveTab("confessions")}
        switchMode={(newMode) => setActiveTab(newMode)}
      />
    )
  }

  // Protect Thoughts & Chat
  const requiresLogin =
    activeTab === "thoughts" || activeTab === "chat"

  if (requiresLogin && !user) {
    return (
      <AuthPage
        mode="login"
        onLogin={(username) => {
          setUser(username)
          setActiveTab(activeTab)
        }}
        onBack={() => setActiveTab("confessions")}
        switchMode={(newMode) => setActiveTab(newMode)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        setUser={setUser}
      />

      <div className="pt-24 px-6">
        {activeTab === "confessions" && <ConfessionsPage />}
        {activeTab === "thoughts" && <ThoughtsPage user={user} />}
        {activeTab === "chat" && <ChatPage user={user} />}
      </div>

    </div>
  )
}