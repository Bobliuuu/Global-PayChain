import Layout from "../components/layout"
import Link from "next/link"
import Image from "next/image"

export default function IndexPage() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Global PayChain</h1>
        <div className="mb-4">
          <Image src="/logo.png" alt="Global PayChain Logo" width={200} height={200} />
        </div>
        <p className="mb-4">
          Global PayChain is an 
        </p>
        <p className="mb-4">
          Special formatted text about how to login goes here.
        </p>
      </div>
    </div>
    </Layout>
  )
}
