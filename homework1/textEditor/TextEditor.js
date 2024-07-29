import Stack from "../stack/stack.js";

export default class TextEditor {

    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
        this.text = new Stack();
    }

    input(text) {
        this.text.push(text);
        this.undoStack.push(text);
        this.redoStack.clear();
    }

    undo() {
        if (this.undoStack.isEmpty()) {
            const lastText = this.undoStack.top();
            this.redoStack.push(lastText);
            this.text.pop();
            this.undoStack.pop();
        }
    }

    redo() {
        if (this.redoStack.isEmpty()) {
            const lastText = this.redoStack.top();
            this.undoStack.push(lastText);
            this.text.push(lastText);
            this.redoStack.pop();
        }
    }

    print() {
        let text = "";
        const textTmp = [...this.text.content];
        while (textTmp.length > 0) {
            text += `${textTmp.shift()} `;
        }
        console.log(text.trim());
    }
}