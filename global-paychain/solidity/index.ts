// Code credit: Axelar examples, William Wang

import { getDefaultProvider, Contract, Wallet } from 'ethers';
import {
  utils: { deployContract },
} from '@axelar-network/axelar-local-dev';

import DistributionExecutable from './artifacts/examples/evm/call-contract-with-token/DistributionExecutable.sol/DistributionExecutable.json';
import Gateway from './artifacts/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol/IAxelarGateway.json';
import IERC20 from './artifacts/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol/IERC20.json';

async function deploy(chain: any, wallet: Wallet): Promise<void> {
  const provider = getDefaultProvider(chain.rpc);
  chain.wallet = wallet.connect(provider);
  chain.contract = await deployContract(wallet, DistributionExecutable, [
    chain.gateway,
    chain.gasService,
  ]);
  const gateway = new Contract(chain.gateway, Gateway.abi, chain.wallet);
  const usdcAddress = await gateway.tokenAddresses('aUSDC'); // convert to usdc
  chain.usdc = new Contract(usdcAddress, IERC20.abi, chain.wallet);
  console.log(`Deployed executable for ${chain.name} at ${chain.contract.address}.`);
}

export { deploy };