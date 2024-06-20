let isLoading: boolean = true; //добавили типизацию

isLoading = false;
// isLoading = 4; //ошибка типа, который мы указали выше


let num = 42;
// num = 'hello'; // num был типизирован по первому значению потому выдает ошибку

let num1: number | string = 42; // будет типизировано либо число, либо строка
num1 = 'hello'; // не будет выдавать ошибку. но обязаны вводить типизацию через или, иначе будет  дефолтного значения



let stat: 'loading' | 'success' | 'error' = 'loading'; // потенциальыные значения
// можем вынести в отдельный тип
type Status =  'loading' | 'success' | 'error';

// можем создать три отдельных типа:
type Loading = 'loading';
type Success = 'success';
type Err= 'error';
// и добавить эти типы в один где будут или

type Status2 =  Loading | Success | Err;


let stat2: Status = 'loading'; //обявляяем типизацию небольших сущностей или примитивов. у интерфейса больше фyнкционала


//Primitives types: boolean, number (абсолютно дбое число), string, null, undefined, void(ничего не возвразает), 

// доп типы, редко испльзуются: any y(любой тип данных, отключает типизвцию), unknown (когда ихначально неизвестно, нужна сначала проверить типизцию), symbol (похволяет получить из строки его числовой эквивалент), bigInt


// stat = 'suces' //вписываем сразу все варианты отоюражения (перечисляем). выдает ошибку из-за неправильно написанного слова


let notSure: unknown = 4; // пока не типизирован. 

if (typeof notSure === 'number') {
    let value: number = notSure // если тип число, то присвой значение notSure переменной value
}



const arr: (string | number)[] = ['one', 'two', 'three'] //сохрвняет массив по ссылке, а не значению. добавили типизацию как массив строк.(строки в массиве). позже добавили вариативность строк или чисел массив. тут добавили или симло или срока и все это в массиве

// const arr: string[] | number[] = ['one', 'two', 'three'] // типизация только массив из чисел или массив из строк.


//(number | string)[] - массив из чисел или строк
//number | string[] - либо число, либо массив строк
//number[] | string[] - массив ТОЛЬКО из чисел или ТОЛЬКО из строк
//[string, number] - массив строго из двух эдеиентов. где первое значение строго строка, второе строго число. называется Tuple(кортеж). где харанее ихвестна как длина массива, так и сами елементы

arr.push(5) //ошибка типов. уже прняли тип как массив строк

//tsc script.ts - компиляция typescript файла в js (в терминале)

let arr2: number[] = [1, 2, 3, 4];
arr2 = arr2.filter(e => e % 2 === 0); // метод ыильтр работает с копией. потом нужно создать переменнуюб через let. отобразить все четные числа. e автоматически типизируется как число

//Object
// let person: {name: string, isProgrammer: boolean} = {
//     name: 'Danny',
//     isProgrammer: true,

// } // типизирован обект по ключам внутри. очень длинное описание типизации получается. сократим через интерфейс

interface IPerson { name: string, isProgrammer?: boolean }; // может наследовать ключ-значение из родиткльского значения. созададим еще один интерфейс

interface Employee extends IPerson {
    salary: number
} // состоит из интерф эплои и плюс персон

// DRY принцип (object) - don't repeat yourself. не повторяйся. сохравнять код чистым ине повторять его в других местах. переделый чтоб не повторяться 

const employee: Employee = {
    name: 'Jack',
    isProgrammer: false,
    salary: 2500

}




let person: IPerson = {
    name: 'Danny', //? - ключ может быть, а может не быть. вариантивный ключ
    isProgrammer: true,

}

let persons:IPerson[] = [person] // типизация массив интерфейсов(таких сущностей)

persons.push({
    name: 'Bilbo',
    isProgrammer:false
});

persons = persons.filter(e => e.name === 'Bilbo') // отобразится только bilbo // filter иожет принимать и вариантивный параметр


//Function
const sum = (a: number,b: number):number => a + b; // мы знаем всегла возвращает число. можем добавить типизацию взврата. перед телом функции пишем типизацию

let res = sum(13,4);
res= sum(10,10);

const sum2 = (a: number,b: number):number | 'error' => a + b > 0 ? a + b : 'error';
const sum3 = (a: number,b: number):number | Err => a + b > 0 ? a + b : 'error';