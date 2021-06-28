// Node for linked list

export default class LinkedListNode {
    private _value: any;
    private _next: LinkedListNode | null;

    constructor(value: any, next = null) {
        this._value = value;
        this._next = next;
    }

    set next(node: LinkedListNode) {
        this._next = node;
    }

    get value() {
        return this._value;
    }

    toString(callback: Function) {
        callback ? callback(this._value) : `${this._value}`;
    }
}
