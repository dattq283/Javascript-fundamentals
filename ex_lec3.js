// 1.1
    function stringToArray(string)
    {
        return string.split('');
    }
    console.log(stringToArray('hello'));

// 1.2
    const array1 = [1, 2, 3];
    const randomValue = 'something';
    const array2 = [4, 5, 6];

    //C1
    function mergeArrays(arr1, value, arr2) {
        return [ ...arr1, value, ...arr2];
    }

    console.log(mergeArrays(array1, randomValue, array2));

    //C2
    function mergeArrays2(arr1, value, arr2)
    {
        return arr1.concat(value , arr2);
    }
    console.log(mergeArrays2(array1, randomValue, array2));
// 1.3
    function sumOfAllNumbers(...arr)
    {
        return arr.reduce((total, value) => 
        {
            return typeof value === 'number' ? value + total : total;
        }, 0); 
    }
    console.log(sumOfAllNumbers(...mergeArrays(array1, randomValue, array2)));

// Tạo một mảng để lưu các số có trong mảng đã được merge
    const numbersInArray = [];
    
        for(const n of mergeArrays(array1, randomValue, array2))
        {
            if(typeof n === 'number') numbersInArray.push(n);
        }
// 1.4
    //C1
    function sumExceptFirst(...arr)
    {
        let checkSkipped = false;
        return arr.reduce((total, value) => 
        {
            if(typeof value === 'number')
            {
                if(!checkSkipped)
                {
                    checkSkipped = true;
                    return total;
                }
                else return total + value;
            }
            return total;
        },0 );
    }
    console.log(sumExceptFirst(...mergeArrays(array1, randomValue, array2)));

    //C2
    function sumExceptFirst2(arr)
    {
      return numbersInArray.slice(1).reduce((sum,num) => sum + num, 0);
    }
    console.log(sumExceptFirst2(mergeArrays2(array1, randomValue, array2)));
// 1.5 
    function sumExceptLast(...arr)
    {
        let checkSkipped = false;
        const reverseArr = [...arr].reverse();
        return reverseArr.reduce((total, value) =>
        {
            if(typeof value === 'number')
            {
                if(!checkSkipped)
                {
                    checkSkipped = true;
                    return total;
                }
                else return total + value;
            }
            return total;
        },0 );
    }
    console.log(sumExceptLast(...mergeArrays(array1, randomValue, array2)));

    //C2
    function sumExceptLast2(arr)
    {
      return numbersInArray.slice(0, -1).reduce((sum,num) => sum + num, 0);
    }
    console.log(sumExceptLast2(mergeArrays2(array1, randomValue, array2)));

// 1.6 
    function sumOfThreeFirstNumbers(...arr)
    {
        let countNumber = 3;
        return arr.reduce((total, value) =>
        {
            if(typeof value === 'number' && countNumber > 0)
            {   
                countNumber--;
                return total += value;
            }
            return total;
        },0);
    }
    console.log(sumOfThreeFirstNumbers(...mergeArrays(array1, randomValue, array2)));

// 3.1 
    const getCountdownIterator = {
        [Symbol.iterator] () {
            let current = 10;
            return {
                next() {
                    current--;
                    if(current < 1)
                    {
                        return {done : true};  
                    }
                    else return {done : false, value : current};
                },
            }
        } 
    };
    console.log( [ ...getCountdownIterator ] );

// 3.2
    const getFibonacciSequence = {
        [Symbol.iterator] () {
            let prev = 0;
            let cur = 1;
            return{
                next() {
                    let newValue = prev;
                    [prev, cur] = [cur, prev + cur];
                    return {done : false, value: newValue};
                },
            };
        },
    };
    /*for( let i of getFibonacciSequence)
    {
        console.log(i);
    }*/

// 4.1
    let getCountdownIterator2 = function* ()
    {
        for(let i = 9; i >0; i--)
        {
            yield i;
        }
    };
    console.log( [ ...getCountdownIterator2() ] );

// 4.2
    function* generateFibonacciSequence()
    {
        let prev = 0;
        let cur = 1;
        while(true)
        {
            yield prev;
            [prev, cur] = [cur, prev + cur];     
        }
    }
    const fibo = generateFibonacciSequence();
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
    console.log(fibo.next());
// 4.3
    function *filter(  iterable, filterFunction ) {
        for(const value of iterable)
        {
            if(filterFunction(value))
            {
                yield value;
            }
        }
    }
    const isEven = (num) => num % 2 === 0;
    const evenFibo = filter(generateFibonacciSequence(), isEven);
    console.log(evenFibo.next()); 
    console.log(evenFibo.next()); 
    console.log(evenFibo.next()); 
