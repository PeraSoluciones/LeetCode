/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 || list2;

    return dummy.next;
};

console.log(
    mergeTwoLists(
        { val: 1, next: { val: 2, next: { val: 4, next: null } } },
        { val: 1, next: { val: 3, next: { val: 4, next: null } } }
    )
);

console.log(
    mergeTwoLists(
        { val: 5, next: null },
        { val: 1, next: { val: 2, next: { val: 4, next: null } } }
    )
);

console.log(
    mergeTwoLists(
        { val: -9, next: { val: 3, next: null } },
        { val: 5, next: { val: 7, next: null } }
    )
);
