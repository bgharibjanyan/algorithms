export default class Stack {
  constructor() {
    this.content = [];
  }
  push(value){

    let size=this.size()
    this.content[size]=value;
    return true

  }
  pop(){
      let lastIndex=this.size()-1;
      if(lastIndex<0){
        return null
      }else{
        let value=this.content[lastIndex];
        this.content[lastIndex]=null;
        return value
      }
  }
  top(){
    let lastIndex = this.size()-1;
        return this.content[lastIndex]
  }
  isEmpty (){
    if(this.size()<=0){
        return true
    }else{
        return false
    }

  }
  size(){
    let value=0
    while (this.content[value]){
      value++
    }
    return value
  }
  clear(){
    while(this.size>0){
      this.content.pop()
    }
    return true
  }

}