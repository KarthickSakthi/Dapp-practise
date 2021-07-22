// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint public storedData;
  uint public c=340;
  uint[] public arr;
  uint public i=0;
  struct Val{
    uint val;
  }
 
 mapping(uint=>Val) mapVal;
  function set(uint x) public {
    mapVal[i]=Val(x);
    arr.push(x);
    storedData = x;
    i++;
  }
function getValArr() public view returns(uint[] memory){
  return arr;
}
  function get() public view returns (uint) {
   
    return (storedData * 5);
  
  }
   function mapValues(uint y) public view returns(uint){
        return  mapVal[y].val;
    }
}
