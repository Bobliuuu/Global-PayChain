import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Global PayChain Logo" width={50} height={50} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/create">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create</a>
                </Link>
                <Link href="/buy">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buy</a>
                </Link>
                <Link href="/swap">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Swap</a>
                </Link>
                <Link href="/send">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Send</a>
                </Link>
                <Link href="/pricing">
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 text-white p-4 flex justify-center">
              <p className={`nojs-show ${!session && loading ? "animate-pulse" : ""}`}>
                {!session && (
                  <>
                    <a
                      href={`/api/auth/signin`}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault()
                        signIn()
                      }}
                    >
                      Sign in
                    </a>
                  </>
                )}
                {session?.user && (
                  <>
                    {session.user.image && (
                      <span
                        style={{ backgroundImage: `url('${session.user.image}')` }}
                        className="w-8 h-8 rounded-full bg-cover mr-2"
                      />
                    )}
                    <span className="text-sm">
                      <small>Signed in as</small>
                      <br />
                      <strong>{session.user.email ?? session.user.name}</strong>
                    </span>
                    <a
                      href={`/api/auth/signout`}
                      className="text-blue-500 hover:underline ml-4"
                      onClick={(e) => {
                        e.preventDefault()
                        signOut()
                      }}
                    >
                      Sign out
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
