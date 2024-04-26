var getIntersectionNode = function(headA, headB) { 
    // let lengthA = 0;
    // let lengthB = 0;
    // let currA = headA;
    // let currB = headB;
    
    // while (currA || currB) {
    //     if (currA) {
    //         currA = currA.next;
    //         lengthA++;
    //     }
    //     if (currB) {
    //         currB = currB.next;
    //         lengthB++;
    //     }
    // }
    
    // currA = headA;
    // currB = headB;
    
    // while (currA && currB) {
    //     if (lengthA > lengthB) {
    //         currA = currA.next;
    //         lengthA--;
    //     } else if (lengthB > lengthA) {
    //         currB = currB.next;
    //         lengthB--;
    //     } else {
    //         if (currA === currB) return currA;
    //         currA = currA.next;
    //         currB = currB.next;
    //     }
    // }
        
    // return null;


    let t1 = headA, t2 = headB

    while(t1 != t2) {

        t1 = t1.next
        t2 = t2.next

        if(t1 == t2) return t1
        if(t1 == null) t1 = headB
        if(t2 == null) t2 = headA

    }
    return t1

//     if (!headA || !headB) return null;

//   let pointerA = headA;
//   let pointerB = headB;

//   while (pointerA !== pointerB) {
//     pointerA = pointerA === null ? headB : pointerA.next;
//     pointerB = pointerB === null ? headA : pointerB.next;
//   }

//   return pointerA;
};