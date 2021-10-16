//Q7. Write a program to convert prefix expression to infix expression.


const isOperator=x=>('+-/*'.includes(x))?true:false;
const convert=str=>{
    let stack=[],l=str.length
    for(let i=l-1;i>=0;i--){
        let c=str[i];
        if(isOperator(c)){
            let op1=stack[stack.length-1]
            stack.pop()
            let op2=stack[stack.length-1];
            stack.pop();
            let temp='('+op1+c+op2+')';
            stack.push(temp);
        }
        else{
            stack.push(c+'');
        }
    }
    return stack[stack.length-1];
}
let exp='*-3/45-/345';
console.log('infix : '+convert(exp));