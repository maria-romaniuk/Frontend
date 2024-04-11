//-----Task1
//Напишите функцию, которая принимает два числа и возвращает большее значение. 
//Вызов функции присвоить переменной и отобразить результат(переменную) в консоле

function myFunc1(a,b){
    if(a > b){
        return a;
    } else if( b > a){
        return b;
    } else{
       return 'numbers are equals';
    }
}
console.log(myFunc1(5,5));



//----Task2
//Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
//Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат каждого
//вызова присвойте отдельной переменной и выведите переменные в консоль

function myFuck2(str, b) {
    const finalStr = str.substring(0, b);
    return finalStr;
}
let str1 = myFuck2('the National Gallery', 15)
console.log(str1);

let str2 = myFuck2('Functions are one of the fundamental building blocks in JavaScript' , 34);
console.log(str2);
let str3 = myFuck2('The JavaScript console is an essential tool for web development.' , 8);
console.log(str3);


//----Task3
//Напишите функцию, которая принимает массив и элемент, а затем возвращает true, если элемент присутствует в массиве, 
//и false в противном случае (если есть повторения заданного элемента в массиве, то на задачу это никак не влияет). 
//Результат вызова функции отобразите в консоле


function myFunc3(arr, b) {
    for( let i = 0; i < arr.length; i ++){
        if (arr[i] === b){
            return true;
        }
    }
    return false;
}
let array = [1,2,3,4,5,12,13,14,15];

let strCheck = myFunc3(array, 9);
let strCheck2 = myFunc3(array, 13);

console.log(strCheck);
console.log(strCheck2);



//------Task4
//Есть массив чисел - отсортировать его методом пузырька.

let array2 = [12,22,10,32,23,13,15,19,17];
console.log(array2);

function myFunc4(arr) {
    for (let i = 0; i < arr.length -1 ; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j+1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(myFunc4(array2));