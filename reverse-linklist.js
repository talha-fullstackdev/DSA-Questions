class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move prev forward
        current = nextNode; // Move current forward
    }
    
    return prev; // New head of the reversed list
}

// Example Usage
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

head = reverseLinkedList(head);

console.log("Reversed List:");
printList(head);
