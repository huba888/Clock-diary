class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeNodes(head: ListNode | null): ListNode | null {
  let newHead = new ListNode();
  let cur = newHead;
  head = head!.next;
  let sum = 0;
  while (head) {
    if (head.val == 0) {
      cur.next = new ListNode(sum);
      cur = cur.next;
      sum = 0;
    } else {
      sum += head.val;
    }
    head = head.next;
  }
  return newHead.next;
}
//[0,3,1,0,4,5,2,0]
