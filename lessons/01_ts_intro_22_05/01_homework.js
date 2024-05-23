//------Task4
//Есть массив чисел - отсортировать его методом пузырька.
var array2 = [12, 22, 10, 32, 23, 13, 15, 19, 17];
console.log(array2);
function myFunc4(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(myFunc4(array2));
