export class Node {
    public val:number | string
    public next:Node | null
    // construct when where are use
    constructor(val: number | string, next: Node | null = null) {
        this.val = val
        this.next = next;

    }
}
const node = new Node(10 )
node.next = new Node(20)

console.log(node)