require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, P_KEY } = process.env; 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    // Sensitive contents are hidden
    matic: {
      //url from alchemy paste here 
      url: API_URL,
      //private key from Metamask paste here 
      accounts: [`0x${P_KEY}`],
    }
  },
};
