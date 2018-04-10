const People = artifacts.require("./People.sol");
module.exports = function(deployer){
  deployer.deploy(People, {gas:1000000});
};
