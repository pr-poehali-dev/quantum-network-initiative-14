import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function FloatingTelegram() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://t.me/+79920119244"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#229ED9] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1a8bbf] group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Icon name="Send" size={18} />
      <span className="text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Написать в Telegram
      </span>
    </a>
  )
}
