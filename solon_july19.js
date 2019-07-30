// 7/29/2019 Node Swap - return head of SLL and swap values of every two nodes 1-2-3-4 --> 2-1-4-3

class SLL {
    constructor(){
        this.head = null;
    }

    addNode(node){
        if(this.head == null){
            this.head = node;
        }
        else{
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = node;
        }
    }

    swapTwo(){
        var runner = this.head.next;
        var prev = this.head;
        var holder = prev;
        if(prev = this.head){
            prev.next = runner.next;
            runner.next = prev;
            this.head = runner;
        }
        prev = prev.next
        runner = prev.next
        console.log("Holder: "+ holder.value + " Prev: " + prev.value + " Runner: " + runner.value)
        holder.next = runner;
        runner.next = prev;
        prev.next = null;
    }

    printSLL(){
        var runner = this.head;
        while(runner != null){
            console.log(runner.value);
            runner = runner.next
        }
    }
}

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

sll = new SLL();
for(var i = 1; i < 5; i++){
    node = new Node(i);
    sll.addNode(node);
}
sll.swapTwo();
sll.printSLL();

// Hard coded - while loop was breaking, needs more work!