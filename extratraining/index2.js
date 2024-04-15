let array = [1,2,3,4,5];
let sum= array.reduce((a,b) => a + b, 0);

console.log(sum);
//если 0 вконце, то начинается с 0, если поставить 7, то плюсовать будет с 7 + 1+2+3+4+5


function opposite(number) {
    return -number;
}
console.log(opposite(1));   // Output: -1
console.log(opposite(14));  // Output: -14
console.log(opposite(-34)); // Output: 34

// минус занчит, что значение меняет - на +, а если + на -



//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(3));    // Output: 1
console.log(litres(6.7));  // Output: 3
console.log(litres(11.8)); // Output: 5


//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Find the age difference between the father and the son
    const ageDifference = Math.abs(dadYearsOld - (2 * sonYearsOld));
    
    // Return the age difference
    return ageDifference;
}
//const ageDifference = Math.abs(dadYearsOld - 2 * sonYearsOld);: 
//Статический Math.abs()метод возвращает абсолютное значение числа.

//Абсолютное значение x. Если x отрицательно (включая -0), возвращается -x. 
//В противном случае возвращается x. Таким образом, результатом всегда является положительное число или 0.
