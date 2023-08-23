const ABI = require("../ABI.json");
const { Web3 } = require("web3");


const web3 = new Web3("https://serene-sly-bird.ethereum-sepolia.discover.quiknode.pro/465084991cc2c492863cc6d544156ca81f7a7604/");
const contractAddress = "0x6ebd6AA0225b777B78Feb9F49Db831CbE03A943F";
const contract = new web3.eth.Contract(ABI, contractAddress);

module.exports={contract}
