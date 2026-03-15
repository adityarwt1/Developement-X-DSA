import { Node } from "../../../dataStructures/linkedList/linkedList.ts";

const head = new Node(10)
head.next = new Node(9)
head.next.next = new Node(8)
console.log(head)

let slow = head
let fast = head

class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

const findMiddle = (head: ListNode | null): ListNode | null => {
    if (head === null) return null

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast !== null && fast.next !== null) {
        slow = slow!.next       // non-null assertion because slow is always behind fast
        fast = fast.next.next
    }

    return slow
}

const newHead = new ListNode(10, new ListNode(9, new ListNode(8,  new ListNode(7))))

