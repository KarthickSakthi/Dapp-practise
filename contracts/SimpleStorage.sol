// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint public storedData;
  uint public c=340;
 uint[] public arr;
  function set(uint x) public {
    arr.push(x);
    storedData = x;
  }
function getValArr() public view returns(uint[] memory){
  return arr;
}
  function get() public view returns (uint) {
   
    return (storedData * 5);
  
  }
}
