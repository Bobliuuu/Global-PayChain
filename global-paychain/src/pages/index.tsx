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
          Global PolyChain
        </p>
        <p className="mb-4">
          First, login to our app! Once that happens, create a wallet, and purchase cryptocurrency using our custom links. We recommend Solana. 
        </p>
        <p className="mb-4">
          Next, convert your coins to solana if required, through our user portal. 
        </p>
        <p className="mb-4">
          Finally, all you have to do is input a wallet address and another wallet address, and send an international transaction in ONE CLICK! 
        </p>
        <p className="mb-4">
          You get 10 FREE transactions. After that, see our pricing window for more details about our subscription tier. 
        </p>
      </div>
    </div>
    </Layout>
  )
}
