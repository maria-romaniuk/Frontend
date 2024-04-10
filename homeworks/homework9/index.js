//-------Task1
let arr = [2,4,6,8,10];
for( let i = 0; i < arr.length; i++) {
    let num = arr[i] * 2;
    arr[i] = num;
    console.log(arr[i]);
}


//--var2
let numbers = [2, 4, 6, 8, 10];
let arrNum = [];

for (let i = 0; i < numbers.length; i++) {
    arrNum.push(numbers[i] * 2);
}

console.log(numbers);
console.log(arrNum);



//--------Task2
let numArray= [2,4,3,5,7,6,1];
console.log(numArray);
let temp = numArray[0];
numArray[0] = numArray[numArray.length - 1];
numArray[numArray.length - 1] = temp;
console.log(numArray);

//----------Task3

let arrayNew = [2,4,5,7,9,1,12];
for(let i=0; i< arrayNew.length; i++){
    if(arrayNew[i] === 5){
        console.log("Number 5 was founded");
    } else{
        console.log("There is no number 5 in this array");
    }
}


//------Task2*
let array = [10,15,20,25,30];
let number = 0;
for(let i = 0; i< array.length; i++){
    number +=array[i];
}
let avg = number / array.length ;

console.log(number);
console.log(avg);
