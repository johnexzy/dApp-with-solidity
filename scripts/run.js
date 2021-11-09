// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// const hre = require("hardhat");

 const main = async() => {
   const [owner, randomPerson] = await hre.ethers.getSigners();
   const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
   const waveContract = await waveContractFactory.deploy({
     value: hre.ethers.utils.parseEther('0.1'),
   });
   await waveContract.deployed();

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );
   console.log("Contract deployed to: %s", waveContract.address)
  //  console.log("Contract deployed by: %s", owner.address)


   let waveCount;
   waveCount = await waveContract.getTotalWaves()

   const waveFn = await waveContract.wave("A wave with message")
   await waveFn.wait()

   const waveFn2 = await waveContract.wave("A wave with message")
   await waveFn2.wait()

   const waveFn3 = await waveContract.wave("A wave with message")
   await waveFn3.wait()
   /*
   * Get Contract balance to see what happened!, because we just waved
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    'Contract balance:',
    hre.ethers.utils.formatEther(contractBalance)
  );
   waveCount = await waveContract.getTotalWaves();
  // waveTxn = await waveContract.connect(randomPerson).wave('Another message!');
  // await waveTxn.wait(); // Wait for the transaction to be mined

  //  console.log("Contract mined by: %s", randomPerson.address)

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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