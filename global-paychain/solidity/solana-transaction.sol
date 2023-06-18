// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolanaTransaction {
    address public solanaTransaction;
    address public receiver;
    uint256 public amount;

    event TransactionDeployed(address indexed solanaTransaction, address indexed receiver, uint256 amount);

    constructor(address _solanaTransaction, address _receiver, uint256 _amount) {
        solanaTransaction = _solanaTransaction;
        receiver = _receiver;
        amount = _amount;
    }

    function deployTransaction() external {
        // Execute the deployment logic here
        // For demonstration purposes, we emit an event with the transaction details
        emit TransactionDeployed(solanaTransaction, receiver, amount);
    }
}