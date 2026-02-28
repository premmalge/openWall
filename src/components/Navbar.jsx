import { useState } from "react";

export default function Navbar({ activeTab, setActiveTab, user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "confessions", label: "Confessions" },
    { id: "thoughts", label: "Thoughts" },
    { id: "chat", label: "1-1 Chat" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50
      bg-black/70 backdrop-blur-2xl
      border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => {
            setActiveTab("confessions");
            setIsOpen(false);
          }}
          className="text-xl font-bold 
          bg-gradient-to-r from-purple-400 to-pink-500 
          bg-clip-text text-transparent cursor-pointer">
          OpenWall
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative text-sm font-medium tracking-wide transition
              ${
                activeTab === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px]
                  bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">
          {!user ? (
            <button
              onClick={() => setActiveTab("thoughts")}
              className="px-4 py-2 rounded-full
                bg-gradient-to-r from-purple-600 to-pink-600
                hover:opacity-90 transition">
              Login
            </button>
          ) : (
            <button
              onClick={() => setUser(null)}
              className="px-4 py-2 rounded-full
                bg-white/10 hover:bg-white/20 transition">
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6 space-y-6 border-t border-white/10">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left text-base transition
              ${
                activeTab === item.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}

          {!user ? (
            <button
              onClick={() => {
                setActiveTab("thoughts");
                setIsOpen(false);
              }}
              className="w-full py-2 rounded-full
                bg-gradient-to-r from-purple-600 to-pink-600">
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setUser(null);
                setIsOpen(false);
              }}
              className="w-full py-2 rounded-full bg-white/10">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}