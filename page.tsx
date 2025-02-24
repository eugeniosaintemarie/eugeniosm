import { Instagram, Globe } from "lucide-react"
import Link from "next/link"
import './styles.css'

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4 flex flex-col gap-2">
          <div>Qué perdiste</div>
        </h1>
        <br />
        <Link
          href="https://www.instagram.com/eugeniosaintemarie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span className="sr-only">Instagram</span>
        </Link>
      </main>
      <footer className="p-4 flex justify-center">
        <Link
          href="https://www.eugeniosaintemarie.github.io"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Globe className="w-4 h-4 icon-adjust" />
          <span className="sr-only">Website</span>
        </Link>
      </footer>
    </div>
  )
}