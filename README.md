# is-sorted

### Suport
    -- Array data like [1,2,3]、['a','b']
    -- Oject data like { name: 1,age: 2 }

### Use
    const isSorted = require('../index');
    const value = isSorted(data[,fn]);
        -- fn: It is a function,which data sort by.But you must create it like this
            -- a: compare argument
            -- b: next argument
            -- data: the data which you send
            function (a, b [,data]) {
                if (data[ a ] < data[ b ]) {
                    return 1;
                } else if (data[ a ] > data[ b ]) {
                    return -1;
                } else {
                    return 0;
                 }
            }

    value has four type:
        -- 0:  Ordered,equal
        -- 1:  Ordered,Ascending
        -- -1: Ordered,Descending
        -- false: Disorder

### Example
    const isSorted = require('../index');
    console.log(isSorted([ 'a', 'b', 'c' ]));// 1
    console.log(isSorted([ 3, 2, 1 ]));// -1
    console.log(isSorted([ 1, 2, 1 ]));// false

### More
**if you want to know more,see test/sort.test.js**

