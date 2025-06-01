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
var reverseList = function (head) {
    let reversed = head;
    let curr = null;
    if (head.next) reversed = reverseList(head.next);
    else return head;
    reversed.next = curr;
    head.next = null;
    return head;
};

console.log(
    reverseList({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: { val: 6, next: { val: 7, next: null } },
                    },
                },
            },
        },
    })
);

// console.log(reverseList({ val: 0, next: null }));
