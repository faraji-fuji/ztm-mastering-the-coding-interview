class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create new node
    let node = {
      value: value,
      next: null,
    };

    // attach new node to existing tail
    this.tail.next = node;

    // update tail
    this.tail = node;

    // increment lenght
    this.length++;
    return this;
  }

  prepend(value) {
    let node = {
      value: value,
      next: null,
    };

    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    // new node
    const newNode = {
      value: value,
      next: null,
    };

    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      // current node
      currentNode = currentNode.next;
    }

    // temporary node
    let tempNode = currentNode.next;

    currentNode.next = newNode;
    newNode.next = tempNode;

    this.length++;

    console.log(currentNode);
  }

  remove(index){
    let targetNode = this.head
    let targetNodePrev = undefined
  
    for (let i = 0; i < index; i++){
        // get the node before the target node
        targetNodePrev = targetNode
        // get the node we want to delete
        targetNode = targetNode.next
    }

    // get node after target node
    let targetNodeNext = targetNode.next

    // link previous node to next node
    targetNodePrev.next = targetNodeNext

    this.length--;

  }
}

myLinkedList = new LinkedList(10);

// Create
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 1000000);

// Read
myLinkedList.printList();
