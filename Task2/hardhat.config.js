require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, P_KEY, API_POLY } = process.env; 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "mumbai",
  etherscan: {
    apiKey: API_POLY,
  },
  networks: {
    hardhat: {
    },
    // Sensitive contents are hidden
    mumbai: {
      //url from alchemy paste here 
      url: API_URL,
      //private key from Metamask paste here 
      accounts: [`0x${P_KEY}`],
    }
  },
};
