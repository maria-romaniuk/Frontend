// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const name = "Sam Harris";
const nameArray = name.split(' ');
const shortName = nameArray[0].split('');
const shortLastName = nameArray[1].split('');
const final = `${shortName[0]}.${shortLastName[0]}`;
console.log(final);

function abbrevName(name) {

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


function abbrevName(name) {

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    let sum = 0;
 for(let i = 0; i<number; i++){
   if(i%3 === 0 || i % 5 === 0){
    sum = sum + i;
   }
 }
 return sum;
}

solution(15);
console.log(solution(15));

solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)

solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
    return s;
  }