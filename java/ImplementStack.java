class Stack {
    private int top = -1;
    private int size = 16;
    private int initial_size = 16;
    private int[] stackArray = new int[initial_size];
    
    //constructor
    Stack(){
        this.top = -1;
        this.stackArray = new int[initial_size];
        this.size = 0;
    }
    
    // Push a new item into the stack
    public void push(int x) {
        // Write your code here
        if (size == Math.pow(2,32) - 1) {
            throw new NoSuchElementException();
        }
        if (size < initial_size) {
            top++;
            stackArray[top] = x;
            size++;
        } else {
            initial_size = initial_size * 2;
            int[] stackArrayNew = new int[initial_size];
            for(int i = 0; i < this.stackArray.length; i++) {
                stackArrayNew[i] = stackArray[i];
            }
            this.stackArray = stackArrayNew;
            
            top++;
            stackArray[top] = x;
            size++;
        }

    }

    // Pop the top of the stack
    public void pop() {
        // Write your code here
        if (!isEmpty()) {
            stackArray[top] = 0;
            top--;
        } else {
            throw new NoSuchElementException();
        }
    }

    // Return the top of the stack
    public int top() {
        // Write your code here
        return stackArray[top];
    }

    // Check the stack is empty or not.
    public boolean isEmpty() {
        // Write your code here
        return (top == -1);
    }    
}