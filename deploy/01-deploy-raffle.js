const { network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../helper-hardhat-config")

const VRF_SUB_FUND_AMOUNT = ethers.parseEther("2")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let vrfCoordinatorV2Address, subscriptionId


    // await deployments.fixture(["MyContract"]);

    const myContract = await deployments.get("VRFCoordinatorV2Mock");
   
    // const contract = await ethers.getContractAt(
    //      myContract.abi,
    //      myContract.address
    //    );

       const contract = await ethers.getContract("VRFCoordinatorV2Mock")
    // });
   


    // if (developmentChains.includes(network.name)) {
    //     //const contract = await ethers.getContract("VRFCoordinatorV2Mock")
    //     vrfCoordinatorV2Address = contract.address
    //     const transactionResponse = await contract.createSubscription()
    //     const transactionReceipt = await transactionResponse.wait(1)
    //     subscriptionId = transactionReceipt.events[0].args.subId
    //     // fund the subscription
    //     // usually, you'd need the link token on a real network
    //     await contract.fundSubscription(subscriptionId, VRF_SUB_FUND_AMOUNT)
    // } else {
    //     vrfCoordinatorV2Address = networkConfig[chainId]["vrfCoordinatorV2"]
    //     subscriptionId = networkConfig[chainId]["subscriptionId"]
    // }

    // const entranceFee = networkConfig[chainId]["entranceFee"]
    // const gasLane = networkConfig[chainId]["gasLane"]
    // const callbackGasLimit = networkConfig[chainId]["callbackGasLimit"]
    // const interval = networkConfig[chainId]["interval"]

    // const args = [
    //     vrfCoordinatorV2Address,
    //     entranceFee,
    //     gasLane,
    //     subscriptionId,
    //     callbackGasLimit,
    //     interval,
    // ]
    // const raffle = await deploy("Raffle", {
    //     from: deployer,
    //     args: args,
    //     log: true,
    //     waitConfirmations: network.config.blockConfirmations || 1,
    // })
    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     Log("vERIFYING ....")
    //     await verify(raffle.address, args)
    // }
    // log("_--------------------------------_")
}

module.exports.tags = ["all", "raffle"]
