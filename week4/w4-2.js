/**
 * 用两个栈实现1个队列
 * 栈：后进先出
 * 队列：先进先出
 */


/**
 * 用[] push pop 模拟一个栈
 */

class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(val) {
        this.s1.push(val);
    }

    dequeue() {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        if (this.s2.length > 0) {
            return this.s2.pop();
        }
    }
}

const q = new Queue();
q.enqueue(4);
q.enqueue(6);
q.enqueue(9);
q.enqueue(19);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());