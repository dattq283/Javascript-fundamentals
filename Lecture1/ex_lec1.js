// 1
    function triangle(a, b, c)
    {
        if(a + b <= c || b + c <= a ||  a + c <= b) return "Invalid Triangle!";
        
        var  s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }
    console.log(triangle(5, 6, 7));

// Review:  Thiếu bước check dữ liệu đầu vào ( validate dữ liệu )
// Nếu dữ liệu không phải là số thì cần báo lỗi.
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
// Sai test : var s1 = - 5, s2 = 200, s3 = -6, s4 = 0, s5 = -1;
// Làm như thì có thể là đúng theo yêu cầu rồi đề bài rồi.
// Nhưng cần nâng cấp, nếu cho "n" số thì như nào.
// Nếu cho 1 mảng các số và cần tìm số lớn nhấ trong mảng thì như nào.
// 
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
// Tìm hiểu về pubble sort, selection sort, quicksort, Insert sort và dùng nó với mảng sau 
// var array = [
//   -32, -96, -61, 66, -57, -59, 96, -39, -81, -92, 
//   25, 13, -81, 66, 1, -71, 20, -76, 27, 89, 
//   -68, -80, 24, -2, 70, 47, -70, -17, -99, 40, 
//   5, 25, -9, -64, -89, 43, -82, 84, 2, 75, 
//   -38, 11, 46, -48, -48, 42, -57, -7, -70, -80, 
//   67, 37, 96, 2, 5, 62, 29, 77, -31, -15, 
//   -45, -42, -89, 46, -90, -56, 41, 43, -95, 37, 
//   96, 19, 69, 72, -21, 72, 9, -80, 36, -33, 
//   71, 49, -76, 70, -34, 99, 63, 31, -49, 69, 
//   -74, -7, -93, 15, 84, -57, -9, 55, -41, 34
// ];
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
// Hàm cân tham số đầu vào , ở đây không có tham số đầu vào mà dùng được arr2 à
// tên hàm cần rõ ràng hơn nữa ví dụ : getRandomNumberInArray, getRandomInArray 
// thường khi tên hàm đặt get thì là để lấy ra 1 cái gì đó.
// set thì thường dùng để sử lý hoặc lưu cái gì đó.
        var arr2 =[1, 2, 3, 4, 5, 6, 7]
        function randomInt()
        {
            var randomNumber = Math.floor(Math.random() * arr2.length);
            return arr2[randomNumber];
        }
    
        console.log(randomInt(arr2));

// 8
// https://funix.edu.vn/chia-se-kien-thuc/10-nguyen-tac-can-thiet-de-viet-clean-code/
// Có 2 kiểu phổ biến để đặt tên hàm hoặc tham số : Snake case & Camel case . 
// Tuỳ thuộc vào ngôn ngữ sử dụng mà cách đặt tên có sự phổ biến khác nhau
// Trong Javascript a thấy dùng Camel case nhiều hơn.
// trong PHP hoặc python thì lại dùng snake case nhiều hơn 
    function string_to_array(x)
    {
        return x.split(' ');
    }

    console.log(string_to_array("Robin Singh"));

// đầu vào là string, nhưng sao lại sử dụng được feature ?
// Tìm hiểu cơ chế hoạt động của cách khai báo biến trong JS : var, let, const. 
// sự khác biệt trong cơ chế của nó là gì ( viết câu trả lời xuống dưới đây )
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
// Đối với case string như này thì sao ? : "Robin Singh     LANG HOA LHOAS" ?
    console.log(string_to_array2("Robin Singh"));


// 9    
// Chưa có validate x, nhỡ x nhập vào không đúng định dạng, hoặc x nhập vào không phải là ngày thì sao ???
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
// Viết hàm! đầu vào là array cần tính tổng, và output là sum 
    var arr3 = [1, 2, 3, 4, 5, 6];
    var sum = 0;
    for(var i = 0; i < arr3.length ; i++)
    {
        sum += arr3[i];
    }
    console.log('10.'); // cái này là cái gì ?
    console.log(sum);
