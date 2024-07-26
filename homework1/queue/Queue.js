export default class Queue{
    constructor (){
        this.content = [];

        this.front = 0;
        this.rear = 0;

    }
    
    enqueue(value){
        this.content[this.rear] = value;
        this.rear++;

    }
    dequeue(){
        this.front++; 
    }
    peek(){
        return this.content[this.front]
    }
    isEmpty(){
        if(this.front === this.rear){
            return true
        }else{
            return false
        }
    }
}