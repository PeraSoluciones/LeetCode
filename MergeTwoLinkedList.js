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
    if (list1 === null && list2) return list2;
    if (list2 === null && list1) return list1;
    // let node = null;
    // let temp1 = list1;
    // let temp2 = list2;
    let node = new ListNode();
    let temp = node;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            // if (node === null) node = list1;
            // temp1 = list1;
            // list1 = list1.next;
            // temp1.next = list2;
            // console.log('temp1=>', temp1);
            // console.log('temp2=>', temp2);
            temp.next = list1;
            list1 = list1.next;
        } else {
            // if (node === null) node = list2;
            // temp2 = list2;
            // list2 = list2.next;
            // if (temp1.next !== null) temp2.next = list1;
            // else {
            //     if (temp2.next !== null) temp2 = temp2.next;
            //     else temp2.next = list1;
            // }
            // console.log('temp2=>', temp2);
            // console.log('temp1=>', temp1);
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
        console.log('node=>', node);
        console.log('temp=>', temp);
    }
    temp.next = list1 || list2;

    return node.next;
};

// console.log(
//     mergeTwoLists(
//         { val: 1, next: { val: 2, next: { val: 4, next: null } } },
//         { val: 1, next: { val: 3, next: { val: 4, next: null } } }
//     )
// );

console.log(
    mergeTwoLists(
        { val: -9, next: { val: 3, next: null } },
        { val: 5, next: { val: 7, next: null } }
    )
);
