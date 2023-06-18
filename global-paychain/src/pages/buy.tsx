import React, { useState } from 'react';
import { tokenList1, websites } from '../constants/constants';
import Layout from "../components/layout"
import { ethers } from 'ethers';
import crypto from 'crypto';

const Buy = () => {
  const [selectedToken, setSelectedToken] = useState('');

  const handleTokenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(e.target.value);
  };

  const handleBuyToken = () => {
    // Logic for buying token
    console.log('Buying token:', selectedToken);
  };

  const handleBuyMetamask = async () => {
    // Logic for buying with Metamask
    console.log('Buying from Metamask');
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        console.log('Connecting...');
        
        // Open MetaMask buy screen logic
        const assetData = {
          type: 'ERC20',
          options: {
            address: '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4', // Replace with the token contract address
            symbol: 'SOL', // Replace with the token symbol
            decimals: 18 // Replace with the token decimals
          }
        };
        
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: assetData.options
          }
        });
        
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const tokenOptions = tokenList1.map((token) => (
    <option key={token.symbol} value={token.symbol}>
    {token.symbol}
  </option>
  ));

  const tokenWebsites = websites.find((item) => item[selectedToken])?.[selectedToken]?.websites || [];
  
  const websiteList = tokenWebsites.map((website) => (
    <li key={website}>
      <a href={website} target="_blank" rel="noopener noreferrer">
        {website}
      </a>
    </li>
  ));

  return (
    <Layout>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-200 rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="token" className="block text-gray-700 font-bold mb-2">
            CHOOSE TOKEN
          </label>
          <select
            id="token"
            value={selectedToken}
            onChange={handleTokenChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a token</option>
            {tokenOptions}
          </select>
        </div>
        {selectedToken && (
          <div>
            <p className="mb-2">Websites to buy {selectedToken}:</p>
            <ul className="mb-4">
              {websiteList.length > 0 ? (
                websiteList
              ) : (
                <li>No websites available for {selectedToken}</li>
              )}
            </ul>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              value={selectedToken}
              onClick={handleBuyMetamask}
              >
              Buy from Metamask
           </button>
          </div>
        )}
        
      </div>
    </div>
    </Layout>
  );
};

export default Buy;