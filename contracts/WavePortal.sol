// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";



contract WavePortal {
    uint256 totalWaves;
    address[] miners;

    constructor () {
        console.log("Hey, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        miners.push(msg.sender);
    }

    function getTotalWaves() public view returns( uint256 ) {
        console.log("We have %d total waves", totalWaves);
        console.log("We have %d total wavers", miners.length);
        return totalWaves;
    }
}