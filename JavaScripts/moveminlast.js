function move_min_last(sList){
    var runner = sList.head
    var current_first = sList.head
    var min = sList.head
    var counter = 0
    var count = 0
    while (runner != null){
        counter++
        if (min.val > runner.val)
        {
            min = runner
            count = counter
        }
        runner = runner.next
    }
    min.next = current_first
    sList.head = min
    while (counter != count +1)
    {
        if (counter == count -1)
        {
            runner.next = runner.next.next
        }
    }
    return sList;
}

move_min_last(1,2,3,4,1,2,)
