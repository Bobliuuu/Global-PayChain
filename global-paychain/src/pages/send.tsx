import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers.js library for wallet interaction
import Layout from "../components/layout"

const Send = () => {
  const [fromWallet, setFromWallet] = useState('');
  const [toWallet, setToWallet] = useState('');
  const [solanaBalance, setSolanaBalance] = useState('');

  useEffect(() => {
    // Function to get Solana balance
    const getSolanaBalance = async () => {
      // Connect to Metamask
      await ethereum.request({ method: 'eth_requestAccounts' });

      // Retrieve Solana balance from Meatamask
    };

    getSolanaBalance();
  }, []);

  const handleConnectMetamask = async () => {
    try {
      // Connect to Metamask
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
    }
  };

  // Dummy functions lol

  const handleVerifyTransaction = async () => {
    console.log('Verifying transaction...');
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
    console.log('Transaction verified!');
  };

  const handleCompleteTransaction = () => {
    console.log('Completing transaction...');
  };

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-indigo-600">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Send Cryptocurrency</h1>
        <p className="text-lg text-gray-800 mb-4">You may only transfer using Solana cryptocurrency</p>
        <p className="text-gray-800 mb-4">Solana Balance: {solanaBalance} SOL</p>
        <div className="flex flex-col mb-6">
          <label htmlFor="fromWallet" className="text-gray-800 font-bold mb-2">
            From Wallet
          </label>
          <input
            id="fromWallet"
            type="text"
            value={fromWallet}
            onChange={(e) => setFromWallet(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter From Wallet"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          onClick={handleVerifyTransaction}
        >
          Verify Transaction
        </button>
        <div className="flex flex-col items-center justify-center">
          {solanaBalance !== '' && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={handleCompleteTransaction}
            >
              Complete Transaction
            </button>
          )}
        </div>
        <Receipt />
      </div>
    </div>
    </Layout>
  );
};

const Receipt = () => {
  // Placeholder data for receipt
  const receiptData = {
    fromWallet: '0x1234567890',
    toWallet: '0x9876543210',
    amount: '10',
    token: 'SOL',
    transactionHash: '0xabcdef1234567890',
    date: '2023-06-17',
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Transaction Receipt</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-800">
          <span className="font-bold">From Wallet:</span> {receiptData.fromWallet}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">To Wallet:</span> {receiptData.toWallet}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Amount:</span> {receiptData.amount} {receiptData.token}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Transaction Hash:</span> {receiptData.transactionHash}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Date:</span> {receiptData.date}
        </p>
      </div>
    </div>
  );
};

export default Send;