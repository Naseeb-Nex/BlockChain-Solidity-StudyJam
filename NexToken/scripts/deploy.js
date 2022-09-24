const hre = require("hardhat");

async function main() {

  const NTK = await hre.ethers.getContractFactory("NexTocken");
  const nextoken = await NTK.deploy();

  await nextoken.deployed();

  console.log(`deployed to address: ${nextoken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
