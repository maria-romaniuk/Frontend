//------Task4
//Есть массив чисел - отсортировать его методом пузырька.

let array2: number[] = [12, 22, 10, 32, 23, 13, 15, 19, 17];
console.log(array2);

function myFunc4(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(myFunc4(array2));