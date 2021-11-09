require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.rinkeby,
      accounts: process.env.private,
    },
  },
};
// Compilation finished successfully
// Deploying contracts with account:  0xf7F8DCf8962872421373FF5cf2C4bB06357b7133
// Account balance:  13849749997497919120
// WavePortal address:  0x54980E075d3BC506E67F106FED9f317b67D159dC
// 0x54980E075d3BC506E67F106FED9f317b67D159dC