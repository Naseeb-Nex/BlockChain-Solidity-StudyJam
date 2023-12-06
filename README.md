# Blockchain Smart Contracts Project

## Overview

This repository contains the implementation of Aadhar Registry and Smart Contracts developed for the Blockchain-Solidity-StudyJam project. The project focuses on deploying and interacting with smart contracts on Ethereum and Polygon (Mumbai Testnet) using Hardhat.

## Aadhar Registry Implementation

### Features

- Creation of Aadhar records
- Retrieval of Aadhar details using address

### Deployment Process

1. **Environment Setup**: Use VS Code for development.
2. **Compilation**: Compile contracts using Hardhat.

    ```bash
    npx hardhat compile
    ```

3. **Installation of Required Packages**:

    ```bash
    npm install --save-dev @nomicfoundation/hardhat-toolbox
    npm install dotenv --save
    ```

4. **Deploy on Mumbai Testnet**:

    ```bash
    npx hardhat run scripts/deploy.js --network mumbai
    ```

### Task Status

- Compilation: Completed
- Deployment: Completed
- Verification: Completed

### References

- [Hardhat Installation](ReferenceLinks/HardhatInstallation.md)
- [Hardhat Usage - Implementation Guide](ReferenceLinks/HardhatUsage.md)
- [Alchemy - Network URL Creation](ReferenceLinks/Alchemy.md)
- [Polygon Testnet - Connecting to MetaMask](ReferenceLinks/PolygonTestnet.md)
- [Matic Test Tokens](ReferenceLinks/MaticTestTokens.md)
- [PolyScan - Polygon Chain Testnet Explorer](ReferenceLinks/PolyScan.md)

## Task 1: Smart Contract Development

### Aim

Write a smart contract with a variable named 'a' and two functions - one to change the variable value and the other to return it.

### References

- [Remix IDE - Simple Environment](ReferenceLinks/RemixIDE.md)

## NextToken

### Aim

Create a custom token, deploy it on any testnet, and transfer tokens to friends.

### Commands Used

1. **Environment Setup**:

    ```bash
    npx hardhat
    npm install @openzeppelin/contracts --save-dev
    npx hardhat compile
    npm install --save-dev @nomicfoundation/hardhat-toolbox
    npm install dotenv --save
    ```

2. **Deployment on Mumbai Testnet**:

    ```bash
    npx hardhat run scripts/deploy.js --network mumbai
    ```

### References

- [OpenZeppelin Installation](ReferenceLinks/OpenZeppelinInstallation.md)
- [Contract Wizard - Create Code Features](ReferenceLinks/ContractWizard.md)
- [Etherscan for Verification](ReferenceLinks/Etherscan.md)

## Contributing

Contributions are welcome! Fork the repository and submit pull requests for enhancements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).
