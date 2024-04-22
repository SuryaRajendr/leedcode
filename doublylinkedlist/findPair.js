// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }
// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // insert(data) {
//     //     let newNode = new Node(data)
//     //     if(this.head == null) {
//     //         this.head = newNode;
//     //         this.tail = newNode
//     //     } else {
//     //         newNode.next = this.head
//     //         newNode.prev = this.head
//     //         this.head = newNode

//     //     }
//     // }
//     insert(data) {
//         let newNode = new Node(data);
//         if (this.head == null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//     }
    
//     print(head) {
//         let current = this.head
//         while(current) {
//             console.log("value is ", current.data)
//             current = current.next
//         }
//     }

//     findTail() {
//         let tail = this.head
//         while(tail.next !== null) {
//             tail = tail.next
//         }
//        // console.log("tail",tail)
//         return tail
//     }

//     findPair(sum) {
    
//         // traditional approach
//     //     let result = []
//     //     let current = this.head
//     //     while(current != null) {
//     //         let next = this.head.next
//     //         while(next != null) {
//     //             if(current.data + next.data == sum) result.push(current.data,next.data)
//     //             next = next.next
//     //         }
//     //         current = current.next
//     //     }
//     //     return result

     
// // optimised approach
//     let left = this.head 
//     let right =  this.findTail()
//    console.log("right",right)
//     let result = []
//         while(left !== right) {
//             let curSum = left.data + right.data
//             if(curSum == sum) {
//                 result.push([left.data,right.data])
//                 left = left.next
//                 right = right.prev
//             }
//             else if(curSum < sum) {
//                 left = left.next
//             }
//             else {
//                 right = right.prev
//             }
//         }
//         console.log("result", result)
//         return result

//     }

// }
// let obj = new DoublyLinkedList()
// // obj.insert(1)
// // obj.insert(2)
// // obj.insert(3)
// // obj.insert(4)
// // obj.insert(9)
// obj.insert(9)
// obj.insert(4)
// obj.insert(3)
// obj.insert(2)
// obj.insert(1)
//  obj.print()
// console.log("find Pair", obj.findPair(5))


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log("value is ", current.data);
            current = current.next;
        }
    }

    findTail() {
        if (this.head === null) {
            return null;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    }
    

    findPair(sum) {
        let left = this.head;
        let right = this.findTail();
        let result = [];
        while (left !== null && right !== null && left.data < right.data) {
            let curSum = left.data + right.data;
            if (curSum === sum) {
                result.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            } else if (curSum < sum) {
                left = left.next;
            } else {
                right = right.prev;
            }
        }
        return result;
    }
}

let obj = new DoublyLinkedList();
obj.insert(9);
obj.insert(4);
obj.insert(3);
obj.insert(2);
obj.insert(1);
obj.print();
console.log("find Pair", obj.findPair(5));

