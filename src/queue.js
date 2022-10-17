const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListElement {
  constructor(item) {
    this.item = item,
      this.position = null
  }
}
class Queue {
  constructor() {
    this.peak = null;
    this.length = 0
  }
  getUnderlyingList() {
    // return {
    //   value: `${arr[this.arr.length - 1]}`,
    //   next:
    // }
  }

  enqueue(item) {
    if (this.length === 0) {
      this.head = new ListElement(item)
    } else {
      let current = this.head;

      while (current.position) {
        current = current.position
      }
      current.position = new ListElement(item)
    }
    this.length++
  }

  dequeue() {
    return this.arr.shift()
  }
}

module.exports = {
  Queue
};
