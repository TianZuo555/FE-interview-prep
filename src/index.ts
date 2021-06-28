import LinkedList from './dataStructure/linkedList/linkedList';
import LinkedListNode from './dataStructure/linkedList/linkedListNode';

function run() {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    console.log(list);
}

run();
