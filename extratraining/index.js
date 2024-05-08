// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits 
// in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}
//   join(''): Этот вызов объединяет элементы массива обратно в строку. Пустая строка '' указывает, что мы не хотим вставлять 
//какие-либо символы между элементами массива при объединении. Мы хотим получить строку из цифр, поэтому просто соединяем их вместе. 
//Например, массив ['3', '2', '1'] станет строкой '321'.

// parseInt(..., 10): Этот вызов преобразует строку обратно в число. Второй аргумент 10 указывает, что мы используем систему счисления по основанию 10 (десятичную). 
//Это важно, чтобы числа не распознавались как восьмеричные или шестнадцатеричные, если они начинаются с нуля или с префикса 0x.

//--------

//Преобразование объектов в массив значений свойств:
const objects = [{ a: 1 }, { a: 2 }, { a: 3 }];
const values = objects.map(obj => obj.a);
// console.log(values);

//------------------

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
    const array = num.toString().split('');
    const newNumArray = array.map(num => parseInt(num * num));
    const newNum = newNumArray.join('')
    return newNum;
}
squareDigits(9119);
// console.log(squareDigits(2112));


function squareDigits(num) {
    let result = num
        .toString()
        .split("")
        .map(num => parseInt(num))
        .map(num => num * num)
        .join("")

    return parseInt(result)
}

// console.log(squareDigits(2112));


//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
  }
  function makeNegative2(num) {
    return -Math.abs(num); // macking positive num from negative. jst from - to +

  }
//   console.log(makeNegative(-0.12));



  //Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
  // that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  const list = [1,4,6,2,1,9,63,-134,566]

function min(list){
    let minNum = list[0];
      for(let i = 1; i < list.length; i++){
        let cur = list[i]
        if(minNum > cur){
          minNum = cur;
        }
      }
      return minNum;
  }

  console.log(min(list));

  const min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}


// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: 
//"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num){
    let stringText = ''
    for(let i = 1; i <= num; i++){
      stringText += i + " sheep...";
    }
    return stringText; 
}