import { useState } from 'react'
import Layout from "../components/layout"

export default function CreatePage() {
  const [hasWallet, setHasWallet] = useState(null)
  const [generatedAddress, setGeneratedAddress] = useState('')

  const handleConnectMetamask = () => {
    // Connect with Metamask logic
    console.log('Connecting with Metamask...')
  }

  const handleGenerateAddress = async () => {
    // Generate wallet address logic
    const response = await fetch('https://api.example.com/generateAddress')
    const data = await response.json()
    setGeneratedAddress(data.address)
  }

  return (
    <Layout>
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Do you have a wallet?</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => setHasWallet(true)}
        >
          Yes
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => setHasWallet(false)}
        >
          No
        </button>
      </div>
      {hasWallet === true && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
          onClick={handleConnectMetamask}
        >
          Connect with Metamask
        </button>
      )}
      {hasWallet === false && (
        <div className="flex mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleGenerateAddress}
          >
            Generate Wallet Address
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
            onClick={() => setHasWallet(true)}
          >
            Use Metamask
          </button>
        </div>
      )}
      {generatedAddress && (
        <input
          type="text"
          value={generatedAddress}
          readOnly
          className="border border-gray-400 rounded p-2 mt-4 bg-gray-100"
        />
      )}
    </div>
    </Layout>
  )
}