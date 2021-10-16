// Write a program to find all pairs of an integer array whose sum is equal to a given number.


let inputOne = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
let inputTwo = 7

let numbers = []
for (let i = 0; i < inputOne.length; i++) {
    for (j = 0; j < inputOne.length; j++) {
        if (inputOne[i] + inputOne[j] == inputTwo) {
            numbers.push([inputOne[i] , inputOne[j]])

            }
        }
    }
console.log(numbers)