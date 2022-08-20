// Remove Duplicates from Sorted List
/*
Example 1:

Input: head = [1,1,2]
Output: [1,2]
Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

//BruteForce*************************************

function removeDuplicate(arr) {
    let result = Array.from(new Set(arr));
    return result;
}

// console.log(removeDuplicate([1, 1, 2]));
// console.log(removeDuplicate([1, 1, 2, 3, 3]));

//===============XXXXX=================================
arr = [1, 1, 2, 3, 3];
const dublicate = arr.filter(
    (element, index, arr) => arr.indexOf(element) !== index
);
// console.log(dublicate);

//==================XXXXXX=====================================
function removeDuplicate(arr) {
    let dublicate = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] == arr[i]) {
            dublicate.push(arr[i]);
        }
    }
    return dublicate;
}
// console.log(removeDuplicate([1, 1, 2, 3, 3]));

//=========================XXXX===================================

var deleteDuplicates = function (head) {
    // Time: O(n)
    let temp = head;
    while (temp != null && temp.next != null) {
        // loop till we dont reach the tail or surpass the tail as there wont be duplicate
        //s after tail
        let nextNode = temp.next;
        while (nextNode != null && temp.val == nextNode.val) {
            // this loop removes the duplicate
            temp.next = nextNode.next;
            nextNode.next = null;
            nextNode = temp.next;
        }
        temp = temp.next;
    }
    return head;
};
deleteDuplicates([1, 1, 2, 3, 3]);
