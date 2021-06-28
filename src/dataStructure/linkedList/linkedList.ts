// here is the linked list class

import LinkedListNode from './linkedListNode';

export default class LinkedList {
    private head: LinkedListNode | null;
    private tail: LinkedListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @function add list node to the end of current linked list
     * @param node new list node
     */
    append(value: any) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail!.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value: any) {
        // const newNode = new LinkedListNode(value, this.head);
    }

    toString(callback: Function | null = null) {
        callback ? callback(this.head) : `${this.head}`;
    }
}
