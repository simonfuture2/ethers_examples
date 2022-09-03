const { ethers } = require("ethers");

const INFURA_ID = '(input infura ID)'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x0e00A8B3a3f971aF0BD5E6024A321Cfa1778bAf2'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

