import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 sticky bottom-0">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; Global PayChain 2023</p>
          <Link href="/contact">
            <a className="text-sm underline">Contact Us</a>
          </Link>
          <Link href="/"><button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4">
            Back to Home
          </button></Link>
        </div>
      </footer>
  )
}
