// 4.1
const array1 = [NaN, 0, 16, false, -21, '',undefined, 45, null];
const resultArray = array1.filter(num => Number.isInteger(num));
console.log(resultArray);

// 4.2
function removeArrayElement(array , element)
{
    return array.filter(num => num !== element)
} 
console.log(removeArrayElement([2, 5, 9, 6], 5));

// 4.3
function getRandomArrayItem(arr)
{
    let randomPostOfItem =  Math.floor(Math.random() * arr.length);
    return arr[randomPostOfItem];
}
    console.log(getRandomArrayItem(array1));

// 4.4
    let array3 =
    [ 
        {
          id: 1,
          scores: [7, 8, 3, 4]
        },
        {
          id: 2,
          scores: [5, 10, 9, 6]
        },
        {
          id: 3,
          scores: [9, 7, 4, 8]
        }
      ];
    function sumOfAllScores(arr)
    {
        return arr.reduce((sum, obj) =>{
            return sum + obj.scores.reduce((sumScores, num) => {
                return sumScores + num;
            }, 0)
        }, 0);
    }    
    console.log(sumOfAllScores(array3));
// 4.5
      function increaseArrayBy10 (arr)
      {
        let result = [];
        for(let i = 0; i< arr.length; i++)
        {
            if(typeof arr[i] === 'number') arr[i] += 10; 
            result.push(arr[i]);
        }
        return result;
      }
      console.log(increaseArrayBy10([5, 10, 15, "s", 20, 25, 30]));