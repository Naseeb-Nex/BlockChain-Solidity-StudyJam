require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, P_KEY, API_POLY } = process.env; 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: API_POLY,
  },
  solidity: "0.8.9",
  defaultNetwork: "mumbai",
  networks: {
    // Sensitive contents are hidden
    mumbai: {
      //url from alchemy paste here 
      url: API_URL,
      chainId: 80001,
      //private key from Metamask paste here 
      accounts: [`0x${P_KEY}`],
    }
  },
};
