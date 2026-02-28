import { useState } from "react"

function AuthPage({ mode, onLogin, onBack, switchMode }) {
  const isSignup = mode === "signup"

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      alert("Please fill all required fields")
      return
    }

    if (isSignup && form.password !== form.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    onLogin(form.username)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6
                    bg-gradient-to-br from-black via-gray-900 to-purple-950
                    text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-8 w-12 h-12
                   flex items-center justify-center
                   rounded-full bg-white/10
                   backdrop-blur-md border border-white/20
                   text-2xl hover:scale-110 transition"
      >
        ←
      </button>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md
                      backdrop-blur-xl bg-white/5
                      border border-white/10
                      rounded-3xl p-10 shadow-2xl">

        <h2 className="text-3xl font-light text-center mb-8 tracking-wide">
          {isSignup ? "Create Your Account" : "Welcome Back"}
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            className="w-full p-4 rounded-xl
                       bg-white/10 border border-white/20
                       placeholder-gray-400 focus:ring-2
                       focus:ring-purple-500 outline-none"
          />

          {isSignup && (
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-4 rounded-xl
                         bg-white/10 border border-white/20
                         placeholder-gray-400 focus:ring-2
                         focus:ring-purple-500 outline-none"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full p-4 rounded-xl
                       bg-white/10 border border-white/20
                       placeholder-gray-400 focus:ring-2
                       focus:ring-purple-500 outline-none"
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              className="w-full p-4 rounded-xl
                         bg-white/10 border border-white/20
                         placeholder-gray-400 focus:ring-2
                         focus:ring-purple-500 outline-none"
            />
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl
                       bg-gradient-to-r
                       from-purple-600 to-pink-600
                       hover:scale-105 transition
                       font-medium"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </div>

        {/* Toggle Section */}
        <p className="text-center text-gray-400 mt-6">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <span
            onClick={() =>
              switchMode(isSignup ? "login" : "signup")
            }
            className="ml-2 text-purple-400 cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>

      </div>
    </div>
  )
}

export default AuthPage