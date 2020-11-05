class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  push(item) {
    this.dataStore[this.top++] = item;
    return item;
  }
  pop() {
    this.dataStore[--this.top] = undefined;
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  length() {
    return this.top;
  }
  clear() {
    this.top = 0;
  }
}

myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.pop();
myStack.push(10);
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.clear());
console.log(myStack);
