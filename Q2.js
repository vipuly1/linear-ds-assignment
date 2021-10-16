//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let input=[1,2,3,4,5,6,7,8,9],temp,len=input.length
for(let i=0;i<len/2;i++){
    temp=input[i]
    input[i]=input[len-1-i]
    input[len-1-i]=temp
} 
console.log(input);