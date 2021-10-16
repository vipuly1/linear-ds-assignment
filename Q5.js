//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


const no=4 
const Hanoi=(n,S,D,A)=>{    
    if(n!=0){
        Hanoi(n-1,S,A,D)
        console.log('\t',n+'st disc       ',S,' --> ',D)
        Hanoi(n-1,A,D,S)
    }
}
Hanoi(no,'Sourse Pole','Destination Pole','Auxilary Pole')