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
    this.value = item,
      this.next = null
  }
}
class Queue {
  constructor() {
    this.peak = null;
    this.length = 0
  }
  getUnderlyingList() {
    let current = this.peak

    // while (current.position !== null) {
    //   result + current
    //   current = current.position
    //   if (!(current.position)) {
    return current
    // }
    // }
  }

  enqueue(item) {
    if (this.length === 0) {
      this.peak = new ListElement(item)
    } else {
      let current = this.peak;

      while (current.next) {
        current = current.next
      }
      current.next = new ListElement(item)
    }
    this.length++
  }

  dequeue() {
    let current = this.peak
    let result = current
    this.peak = current.next
    this.length--
    return result.value
  }
}

module.exports = {
  Queue
};
