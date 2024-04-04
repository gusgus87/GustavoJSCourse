class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryInsert(root, value) {
    // If the current node is null, the new value should be inserted here.
    if (root === null) {
        return new TreeNode(value);
    }

    // If the new value is less than the current node's value, go to the left subtree.
    // If the left subtree is null, insert the new value here.
    // Otherwise, recur down the left subtree.
    if (value < root.value) {
        root.left = binaryInsert(root.left, value);
    }
    // If the new value is greater than the current node's value, go to the right subtree.
    // If the right subtree is null, insert the new value here.
    // Otherwise, recur down the right subtree.
    else if (value > root.value) {
        root.right = binaryInsert(root.right, value);
    }

    // Return the (unchanged) node pointer
    return root;
}

let root = new TreeNode(50);
binaryInsert(root, 21);
binaryInsert(root, 70);
binaryInsert(root, 2);
binaryInsert(root, 201);
binaryInsert(root, 438);
binaryInsert(root, 4932);
binaryInsert(root, 19);
binaryInsert(root, 41);
binaryInsert(root, 93);
binaryInsert(root, 76);
binaryInsert(root, 8);
binaryInsert(root, 10);
binaryInsert(root, 50);
binaryInsert(root, 120);
binaryInsert(root, 20);
binaryInsert(root, 342);
binaryInsert(root, 983);
binaryInsert(root, 3);
binaryInsert(root, 13);
binaryInsert(root, 102);

/*
Recursive function that searches a binary tree of number values.
Returns the number you are searching for. 
Otherwise, returns a message "the number is not in the tree."
*/
function binarySearch(root, value){

    //If the branch is empty this means the number isn't there. 
    if(root === null)
        return `${value} is not in the binary tree`;
    
    //If the root is the same as the value return the value, signifying it is present in the tree.
    else if(root.value === value)
        return value;
    
    //If the value is less than the present value of the root then go left 
    //and check again recursively left/right. 
    else if (value < root.value)
        return binarySearch(root.left, value);
    
    //If the value is more than the present value of the root then go right
    //and check again recursively left/right. 
    else if(value > root.value)
        return binarySearch(root.right, value);
}

console.log(binarySearch(root, 20));









