
//Q4. Write a program to print the first non-repeated character from a string?


const input='he345la12oa4876flsloffgwmzcam'
for(let i of input){
    if(input.indexOf(i)==input.lastIndexOf(i)){
        console.log('\t"',i,'"is the first non-repeated character in "',input,'" string');
        break
    }
}