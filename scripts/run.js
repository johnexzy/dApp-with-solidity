// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// const hre = require("hardhat");

 const main = async() => {
   const [owner, randomPerson] = await hre.ethers.getSigners();
   const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
   const waveContract = await waveContractFactory.deploy();
   await waveContract.deployed();

   console.log("Contract deployed to: %s", waveContract.address)
   console.log("Contract deployed by: %s", owner.address)
   console.log("Contract mined by: %s", randomPerson.address)


   let waveCount;
   waveCount = await waveContract.getTotalWaves()

   const waveFn = await waveContract.wave()
   await waveFn.wait()

   waveCount = await waveContract.getTotalWaves();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();