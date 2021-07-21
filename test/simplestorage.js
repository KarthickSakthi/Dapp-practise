const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", accounts => {
  it("...should store the value 25", async()=>{
    const contractInstance = await SimpleStorage.deployed();

    await contractInstance.set(25,{ from: accounts[0] })

    const value= await contractInstance.get.call()

    assert.equal(value,25, "Value is not expected")


  });
});
