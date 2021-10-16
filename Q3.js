//Q3. Write a program to check if two strings are a rotation of each other?


const input1='Hello'
const input2='olleh'
if(input1.length==input2.length){
    for(let i=0;i<input1.length;i++){
        if(input1[i]!=input2[input2.length-1-i]){
            console.log('given two strings are a " NOT "  rotation of each other');
            break
        }
    }
    if(i==input2.length){
        console.log('given two strings are THE rotation of each other');
    }
}
else{
    console.log('given two strings are a " NOT "  rotation of each other')
}