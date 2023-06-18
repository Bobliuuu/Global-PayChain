import { useState, useEffect } from "react";
import { tokenList1, tokenList2 } from "../constants/constants";

export default function Swap() {
  // setup possible states
  const [selectedToken1, setSelectedToken1] = useState("");
  const [selectedToken2, setSelectedToken2] = useState(tokenList2[0].address);
  const [inputValue, setInputValue] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimatedGas, setEstimatedGas] = useState(0.01);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
        {selectedToken1 ? "Swap Tokens" : "Connect Wallet"}
      </button>
      <div className="w-1/3 bg-gray-200 p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Token Swap</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-bold">Swap from:</label>
            <div className="flex">
              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                className="border border-gray-400 rounded p-2"
              />
              <select
                value={selectedToken1}
                onChange={handleToken1Change}
                className="border border-gray-400 rounded p-2 ml-2"
              >
                <option value="">Select Token</option>
                {tokenList1.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-bold">Swap to:</label>
            <div className="flex">
              <input
                type="number"
                value={isCalculating ? "Calculating best price" : inputValue * 100}
                readOnly
                className="border border-gray-400 rounded p-2 bg-gray-100"
              />
              <select
                value={selectedToken2}
                onChange={handleToken2Change}
                className="border border-gray-400 rounded p-2 ml-2"
              >
                {tokenList2.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-bold">Estimated gas:</label>
            <input
              type="text"
              value={estimatedGas}
              readOnly
              className="border border-gray-400 rounded p-2 bg-gray-100"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={selectedToken1 ? handleSwapTokens : handleConnectMetamask}
            disabled={!selectedToken1}
          >
            {selectedToken1 ? "Swap Tokens" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
}
