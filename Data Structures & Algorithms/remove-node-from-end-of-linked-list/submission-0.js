/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = new ListNode(0, head)
        let fast = head

        let sizeOfLL = 0

        while(fast) {
            sizeOfLL++
            fast = fast.next
        }

        let targetIdx = sizeOfLL - n

        let curr = slow
        for(let i=0; i< targetIdx; i++) {
            curr = curr.next
        }

        curr.next = curr.next.next

        return slow.next
    }
}
