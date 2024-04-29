/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let prev = null
    const stack = [head]

    while(stack.length > 0) {
        let current = stack.pop()
        current.prev = prev
        if(prev) {
            prev.next = current
            prev.child = null
            prev = prev.next
        } else {
            prev = current
        }

        if(current.next) stack.push(current.next)
        if(current.child) stack.push(current.child)
    }

    return head;
};