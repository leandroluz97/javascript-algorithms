//A linked List node
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

//Return true if first list present in second list
function findList(first, second) {
  let ptr1 = first,
    ptr2 = second;

  //If both linkedList are null
  if (first == null && second == null) return true;

  //Else if one is empty and other not
  if (first == null || (first !== null && second == null)) return false;

  // Traverse the second list by
  // picking nodes one by one
  while (second != null) {
    // Initialize ptr2 with
    // current node of second
    ptr2 = second;

    // Start matching first list
    // with second list
    while (first != null) {
      // If second list becomes empty and
      // first not then return false

      if (ptr2 == null) {
        return false;

        // If data part is same, go to next
        // of both lists
      } else if (ptr1.data == ptr2.data) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      } else {
        break;
      }

      // Return true if first list gets traversed
      // completely that means it is matched.
      if (ptr1 == null) return true;

      // Initialize ptr1 with first again
      ptr1 = first;

      // And go to next node of second list
      second = second.next;
    }
  }
}

// Function to add new node to linked lists
function newNode(key) {
  let temp = new Node();
  temp.data = key;
  temp.next = null;

  return temp;
}
