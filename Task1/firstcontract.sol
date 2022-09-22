pragma solidity ^0.8.9;

contract Display{
    uint256 public a;

    function write(uint256 n) public{
        a = n;
    }

    function read() public view returns(uint256) {
        return a;
    }
}