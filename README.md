# Global-PayChain

## Technical Implementation

This repository is a POC demo for Global Paychain, an application that revolutionizes international money transfers! 
This was built with the T3 Next.JS stack, with Solidity and a Hardhat clone of the Solana testnet in the backend. We built smart contracts on Solidity with gas optimization, as well as built cross-chain token transfers with the Squid SDK (Axelar) as well as the Metamask SDK with Ethers.JS to send transactions. 
The architecture uses Next.js Auth and decentralized storage, as well as Prisma to store credentials and JWT tokens. 

## Running the Code

To run the program, run these commands: 
```
cd global-paychain
npm i
npm run dev```

there is also a hardhat-fork-sol, which is an Alchemy virtual environment to test Solana mainnet transactions without wasting gas fees on testnet.
Gas fees are automatically calculated on Solidity.

```
cd hardhat-fork-sol
npm i
npm hardhat test (should test both Lock and index)```

In the future, this will support the Next.JS frontend with Axelar's general message passing cross-chain. 

