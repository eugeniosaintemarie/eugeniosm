import { Instagram, Globe } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
          ¿Qué perdiste?
        </h1>
        
        <Link
          href="https://www.instagram.com/eugeniosaintemarie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors mt-4"
        >
          <Instagram className="w-4 h-4" />
          <span className="sr-only">Instagram</span>
        </Link>
      </main>
      
      <footer className="p-4 flex justify-center">
        <Link
          href="https://eugeniosaintemarie.github.io"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Globe className="w-4 h-4 footer-icon" />
          <span className="sr-only">Website</span>
        </Link>
      </footer>
    </div>
  )
}
