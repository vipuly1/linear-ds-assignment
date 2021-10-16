class Stack {
    constructor() {
        this.items = []
        this.length = 0
    }
    pushMethod(elements) {
       let pushedElem =  this.items.push(elements)
        this.length++
        return pushedElem
    }
    popMethod() {
        if (this.items.length == 0) {
            return -1
        }
        else {
            let poppedElem = this.items.pop()
            this.length--
            return poppedElem
        }
    }
    peekMethod(){
        if (this.items.length == 0) {
            return -1
        }
        return this.items[this.length - 1]
    }

}
stack1 = new Stack()

var balancedChecker = (expression ) =>{
    for(let i = 0; i<expression.length;i++){
        if(expression[i] == "{" || expression[i] == "(" || expression[i] == "["){
        stack1.pushMethod(expression[i])
        }

    else{
        if(stack1.length == 0){
            console.log("Unbalanced")
            break;
            }
        let topmost = stack1.popMethod()
        if(expression[i] == ")" && topmost == "(" || expression[i] == "]" && topmost == "[" || expression[i] == "}" && topmost == "{"){

        }
        else{
            console.log("unbalanced")
            break;
        }

        if(i == expression.length -1){
            if(stack1.length == 0){
                console.log("balanced")
            }
            else{
                console.log("Unbalanced")
            }
        }

    }

        }


}

balancedChecker("[()]{}{[()()]()}")