import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Items from "./components/Items"
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null,val:0 ,valArr:[],MappingValArr:[]};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
      
      const response = await this.state.contract.methods.get().call();
      //console.log(await this.state.contract.methods.getVal().call())
     // const vals= await this.state.contract.methods.getVal().call();
     //this.setState({val:vals})
      // Update state with the result.
      this.setState({ storageValue: response });

      //Array
      const Array = await this.state.contract.methods.getValArr().call()
      console.log(await this.state.contract.methods.getValArr().call())
      this.setState({valArr:Array})
      //Map
      const arr=[];
      for(let i=0;i<Array.length;i++){
      const MapArr=await this.state.contract.methods.mapValues(i).call()
      console.log(await this.state.contract.methods.mapValues(i).call())
      arr.push(MapArr)
      }
      this.setState({MappingValArr:arr})
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  MapLis=this.state.valArr
  runExample = async () => {
    const { accounts, contract } = this.state;
    console.log("inside the runExample function");

    // Stores a given value, 5 by default.
    // getting the user input dynamically
    const inputfromtextbox=document.getElementById("input").value;
    await contract.methods.set(inputfromtextbox).send({ from: accounts[0] });
    console.log(inputfromtextbox)

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
    console.log("Array Value");
   
    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
   else{
   
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <br></br>
        <div>
          <input type="text" id="input"/>
          <button type="submit" onClick={this.runExample}>Submit</button>
        </div>
        <div >
         <table>
           <tr>
             <th> Array Values</th>
             <th>Map Values</th>
           </tr>
           <tr>
           <td>
           {console.log("render method Array "+this.state.valArr)}
          <Items MapLis={this.state.valArr} 
          head={"Array"}/>
           </td>   
        
           <td>
          {console.log("render method mapping "+this.state.MappingValArr)}
          <Items MapLis={this.state.MappingValArr}
           head={"Map"}/>
           </td>
           </tr>
        </table>
      </div>
      </div>
      
    );
  }
}
}

export default App;

{
  /*
 <table>
          <tr>
          <th>
          <h1>Array values</h1>
          {console.log("render method Array "+this.state.valArr)}
          <Items MapLis={this.state.valArr}/>
        </th>
         <th>
          <h1>Map Values</h1>
          {console.log("render method mapping "+this.state.MappingValArr)}
          <Items MapLis={this.state.MappingValArr}/>
        </th>
        </tr>
      </table>
  */
}