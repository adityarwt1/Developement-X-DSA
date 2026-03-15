class ListNode {
    val:number;
    next:ListNode |null

    constructor(val:number, next:ListNode | null){
        this.val =val;
        this.next  = next
    }
}

const hasCycle = (head: ListNode | null): boolean => {
    if (head === null) return false

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast !== null && fast.next !== null) {
        slow = slow!.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}