class ListNode<T> {
  private _val: T;
  private _prev: ListNode<T> | null = null;
  private _next: ListNode<T> | null = null;

  constructor(val: T) {
    this._val = val;
  }

  set val(val: T) {
    this._val = val;
  }

  get val(): T {
    return this._val;
  }

  set next(node: ListNode<T> | null) {
    this._next = node;
  }

  get next(): ListNode<T> | null {
    return this._next;
  }

  set prev(node: ListNode<T> | null) {
    this._prev = node;
  }

  get prev(): ListNode<T> | null {
    return this._prev;
  }
}

class Queue<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  _size = 0;
  constructor() {}

  enqueue(node: ListNode<T>) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this._size++;
    } else {
      let temp = this.head;
      this.head = temp;
      this.head.next = temp;
      temp.prev = this.head;
      this._size++;
    }
  }

  dequeue(): ListNode<T> | null {
    if (this.head === null) return this.head;
    let temp = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this._size--;
    return temp;
  }

  peek(): ListNode<T> | null {
    return this.head;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  get size(): number {
    return this._size;
  }
}
