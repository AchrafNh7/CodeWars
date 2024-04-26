// Given two positive integers n and p, we want to find a positive integer k, 
// if it exists, such that the sum of the digits of n raised to consecutive 
// powers starting from p is equal to k * n.
// In other words, writing the consecutive digits of n as a, b, c, d ..., is 
// there an integer k such that :
// (𝑎^(𝑝) + 𝑏^(𝑝+1) + 𝑐^(𝑝+2) + 𝑑^(𝑝+3) + ...) = 𝑛∗𝑘(a p +b p+1 +c p+2 +d p+3 +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.



//solution


function digPow(n, p){
    let nums = String(n).split('')
    let sum = 0
    for(let i = 0; i < nums.length; i++){
      sum += Math.pow(Number(nums[i]),p)
      p++
    }
   return (sum % n) === 0 ? sum / n : -1
  }