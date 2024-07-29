
import TextEditor from "./textEditor/TextEditor.js";
import Printer from "./printer/Printer.js";

/////////////////////////////////////////////////////////////////////////////
//example of using Text Editor class
/////////////////////////////////////////////////////////////

let telegram = new TextEditor();

telegram.input("Hello");
telegram.print()
telegram.input("I");
telegram.print()

telegram.input("am");
telegram.print()

telegram.input("developer");
telegram.print()

telegram.undo()

telegram.redo()

telegram.undo()
telegram.input("not");
telegram.input("developer");
telegram.print()

/////////////////////////////////////////////////////////////////////////////
//example of using Printer class
/////////////////////////////////////////////////////////////





const jira=new Printer();

let tasknumber=1;

setInterval(()=>{
    jira.addJob(tasknumber);
    tasknumber++;
},1000)

setInterval(()=>{
    jira.logJob();
},2000)

