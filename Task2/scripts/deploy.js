const hre = require("hardhat");

async function main() {
  

  const AadharRegistry = await hre.ethers.getContractFactory("AadharRegistry");
  const aadharReg = await AadharRegistry.deploy();

  await aadharReg.deployed();

  console.log(`deployed to address: ${aadharReg.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
