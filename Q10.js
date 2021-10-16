//Q10. Write a program to find the smallest number using a stack.


class stack{
    constructor(){
        this.store=[]
    }
    push=(value)=>this.store.push(value)
    min=()=>Math.min(...this.store)
}
const minInArray=arr=>{
    let a=new stack()
    for(let i of arr){
        a.push(i)
    }
    console.log(a.min());
}

minInArray([1,2,3,4,-5,8,-7,5,-4,3,2])