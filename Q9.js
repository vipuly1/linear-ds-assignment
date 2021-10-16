//Q9. Write a program to reverse a stack.

class stack{
    constructor(){
        this.store=[]
    }
    push=value=>this.store.unshift(value)
    show=()=>this.store
}
const reverseString=str=>{
    let a=new stack()
    for(let i of str.split('')){
        a.push(i)
    }
    console.log(a.show().join(''));
}
reverseString('12345')