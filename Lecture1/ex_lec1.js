// 1
function triangle(side1, side2, side3)
{
    if(typeof(side1)!== 'number'||typeof(side1) !== 'number'||typeof(side1)!== 'number') return "Invalid Input!"
    if(side1 + side2 <= side3 || side2 + side3 <= side1 ||  side1 + side3 <= side2) return "Invalid Triangle!";
    
    let  halfOfPerimeterOfTriangle = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(halfOfPerimeterOfTriangle * (halfOfPerimeterOfTriangle - side1) * (halfOfPerimeterOfTriangle - side2) * (halfOfPerimeterOfTriangle - side3));
    return area;
}
console.log(triangle(5, 6, 7));

// 2
function reverseNumber(x) 
{
    if(typeof(x) !== 'number') return "Invalid input!";
    var res = 0;
    while(x > 0)
    {
        res = res*10 + x % 10;
        x = Math.round(x/10);
    }
    return res;
}
console.log(reverseNumber(32243));

//  3
const arr = [-5, -2, -6, 0, -1]
let largest;
let n = arr.length;
function bubbleSort(arr) {
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
bubbleSort(arr);
largest = arr[n-1];
alert(largest);

// 4
const arr1 = [
  -32, -96, -61, 66, -57, -59, 96, -39, -81, -92, 
  25, 13, -81, 66, 1, -71, 20, -76, 27, 89, 
  -68, -80, 24, -2, 70, 47, -70, -17, -99, 40, 
  5, 25, -9, -64, -89, 43, -82, 84, 2, 75, 
  -38, 11, 46, -48, -48, 42, -57, -7, -70, -80, 
  67, 37, 96, 2, 5, 62, 29, 77, -31, -15, 
  -45, -42, -89, 46, -90, -56, 41, 43, -95, 37, 
  96, 19, 69, 72, -21, 72, 9, -80, 36, -33, 
  71, 49, -76, 70, -34, 99, 63, 31, -49, 69, 
  -74, -7, -93, 15, 84, -57, -9, 55, -41, 34
];

function selectionSort(arr)
{
    var n = arr.length;
    for(var i = 0; i < n-1; i++)
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
  
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n ; i++) {
       let key = arr[i];
        let j = i-1;
  
      while (j>=0 && arr[j]  >  key){
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
console.log(selectionSort(arr1));
console.log(bubbleSort(arr1));
console.log(insertionSort(arr1));


// 5
function powerOfTwo(x)
{
    if(x < 0) return false;
    return (x & (x - 1)) == 0;
}
console.log(powerOfTwo(16));
console.log(powerOfTwo(18));
console.log(powerOfTwo(256));
// 6
const student = {
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
    const arr2 =[1, 2, 3, 4, 5, 6, 7]
    function getRandomNumberInArray()
    {
        let randomNumber = Math.floor(Math.random() * arr2.length);
        return arr2[randomNumber];
    }

    console.log(getRandomNumberInArray(arr2));

// 8
function stringToArray(x)
{
    return x.split(' ');
}

console.log(stringToArray("Robin Singh"));

function stringToArray2(string)
{
    let res = [];
    let tmp = "";
    for(var i = 0; i < string.length; i++)
    {
        if(string[i] == feature)
        {
            if(tmp.length > 0)
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
let feature =' ';
console.log(stringToArray2("Robin SinghRobin Singh     LANG HOA LHOAS"));
// 9    
function isWeekend(x)
{
    let date = new Date(x);
    if(isNaN(date.getTime()))
    {
        return "Invalid Date Input!"
    }
    let day = date.getDay();
    return day == 0 || day == 6;
}

console.log(isWeekend('Nov 15, 2014'));
console.log(isWeekend('Nov 16, 2014'));
console.log(isWeekend('Nov 17, 2014'));
//10
let arr3 = [1, 2, 3, 4, 5, 6];
const sum = arr3.reduce((sum,num)=>{return sum + num});
console.log(sum);