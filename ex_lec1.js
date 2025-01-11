// 1
    function triangle(a, b, c)
    {
        if(a + b <= c || b + c <= a ||  a + c <= b) return "Invalid Triangle!";
        
        var  s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }
    console.log(triangle(5, 6, 7));
    
// 2
    function reverseNumber(x) 
    {
        var res = 0;
        while(x > 0)
        {
            res = res*10 + x % 10;
            x = Math.round(x/10);
        }
        return res;
    }
    console.log(reverseNumber(32243));

// 3
    var s1 = - 5, s2 = -2, s3 = -6, s4 = 0, s5 = -1;
    var largest;
    if(s1 > s2 && s2 > s3 && s3 > s4 && s4 > s5)
    {
        largest = s1;
    }
    else if (s2 > s1 && s2 > s3 && s3 > s4 && s4 > s5) {
        largest = s2;
    }
    else if (s3 > s1 && s3 > s2 && s3 > s4 && s4 > s5) {
        largest = s3;
    }
    else if (s4 > s1 && s4 > s2 && s4 > s3 && s4 > s5) {
        largest = s4;
    }
    else
    {
        largest = s5;
    }
    alert(largest);

// 4
    var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
    console.log(arr1.sort());

    function selectionSort(arr)
    {
        var n = arr.length;
        for(var i = 0; i < n; i++)
        {
            var minIndex = i;
            for(var j = i + 1; j < n; j++)
            {
                if(arr[j] < arr[minIndex])
                {
                    minIndex = j;
                }
                var tmp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = tmp;
            }
        }
        return arr;
    }
    console.log(selectionSort(arr1));
    


// 5
    function power_of_2(x)
    {
        if(x < 0) return false;
        return (x & (x - 1)) == 0;
    }
    console.log(power_of_2(16));
    console.log(power_of_2(18));
    console.log(power_of_2(256));
// 6
    var student = {
        name : "Te Quy De",
        sclass : "VI",
        rollno : 12,
    };

    console.log(student.name +', ' 
        +
         student.sclass + ', '
        +
         student.rollno);


// 7
        var arr2 =[1, 2, 3, 4, 5, 6, 7]
        function randomInt()
        {
            var randomNumber = Math.floor(Math.random() * arr2.length);
            return arr2[randomNumber];
        }
    
        console.log(randomInt(arr2));

// 8
    function string_to_array(x)
    {
        return x.split(' ');
    }

    console.log(string_to_array("Robin Singh"));

    function string_to_array2(string)
    {
        var res = [];
        var tmp = "";
        for(var i = 0; i < string.length; i++)
        {
            if(string[i] == feature)
            {
                res.push(tmp);
                tmp = "";
            }
            else
            {
                tmp += string[i];
            }
        }
        res.push(tmp);
        return res;
    }
    var feature =' ';
    console.log(string_to_array2("Robin Singh"));
// 9    
    function is_weekend(x)
    {
        var date = new Date(x);
        var day = date.getDay();
        return day == 0 || day == 6;
    }

    console.log(is_weekend('Nov 15, 2014'));
    console.log(is_weekend('Nov 16, 2014'));
    console.log(is_weekend('Nov 17, 2014'));
//10
    var arr3 = [1, 2, 3, 4, 5, 6];
    var sum = 0;
    for(var i = 0; i < arr3.length ; i++)
    {
        sum += arr3[i];
    }
    console.log('10.');
    console.log(sum);