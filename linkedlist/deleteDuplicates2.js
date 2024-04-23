/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let newNode = new ListNode(0)
    newNode.next = head
    let current = newNode
    while(current.next !== null && current.next.next !== null) {
        if(current.next.val == current.next.next.val) {
            while(current.next && current.next.next && current.next.val == current.next.next.val)
            current.next = current.next.next
            current.next = current.next.next
        }
        else {
              current = current.next
        }
      
    }
    return newNode.next
};