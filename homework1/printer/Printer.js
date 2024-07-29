import Queue from "../queue/Queue.js";

export default class Printer {

   constructor(){

    this.db = new Queue;

   }

   addJob(job){

        this.db.enqueue(job);
        console.log('new Jiob added');
   }

   logJob(){

        console.log('job log',this.db.peek());

        this.db.dequeue();
        
        console.log('todo');
        this.getSize();
   }

   getSize(){
         console.log((this.db.rear - this.db.front));
   }
}