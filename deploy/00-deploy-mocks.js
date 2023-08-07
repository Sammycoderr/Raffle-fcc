const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const BASE_FEE = ethers.parseEther("0.25") // 0.25 is the premium cost. it costs 0.25 LINK
const GAS_PRICE_LINK = 1e9 // link per gas: calculated value based on the gas price of the chain

//Chainlink Nodes pay the gas fees tp give us randomness and do external execution
// so the prcie of the request changs based on the price of gas from the blockhain

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("local network detected! Deploying mocks...")
        // Deploy a mock vrfcoordinator...
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks deployed!")
        log("-----------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
