class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // Helper function to swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to get the parent index
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the left child index
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the right child index
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  // Insert a new element into the heap
  public insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Maintain the max heap property after inserting an element
  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Remove and return the maximum element (root) from the heap
  public extractMax(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return max;
  }

  // Maintain the max heap property after removing the root
  private heapifyDown(index: number): void {
    let largest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // Get the maximum element (root) without removing it
  public peek(): number | null {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  // Return the size of the heap
  public size(): number {
    return this.heap.length;
  }

  // Check if the heap is empty
  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

// Usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);

console.log(maxHeap.extractMax()); // 30
console.log(maxHeap.peek()); // 20
console.log(maxHeap.size()); // 3
console.log(maxHeap.isEmpty()); // false
