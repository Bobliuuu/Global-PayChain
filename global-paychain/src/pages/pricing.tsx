import React, { useState } from 'react';
import Layout from "../components/layout"

const Pricing = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Pricing Models for Global PayChain</h1>

        <div className="grid grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded p-6">
            <h2 className="text-xl font-bold mb-4">Free Tier (0$/month)</h2>
            <p className="mb-4">Up to 10 transactions a month for FREE</p>
            <p className="mb-4">Unlimited wallets and token buy/swap</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>

          <div className="border border-gray-300 rounded p-6">
            <h2 className="text-xl font-bold mb-4">Subscription Tier (10$/month)</h2>
              <p className="mb-4">Up to 1000 transactions a month for only 10$</p>
            <p className="mb-4">Unlimited wallets and token buy/swap</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>

          <div className="border border-gray-300 rounded p-6">
            <h2 className="text-xl font-bold mb-4">Custom Tier <br /> (?$/month)</h2>
            <p className="mb-4">For more than 1000 transactions a month, see our pricing team</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Pricing;