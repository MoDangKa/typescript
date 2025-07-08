class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T): void {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfElements(): number {
    return this.length;
  }

  print(): void {
    let current = this.root;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const numberList = new LinkedList();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getNumberOfElements()); // 3
numberList.print(); // 10 -> 5 -> -3