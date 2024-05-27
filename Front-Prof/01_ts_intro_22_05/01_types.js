var isLoading;
isLoading = true;
// isLoading = 42; types error
var num = 42; //or number or string;
num = 'hello';
//Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
//npm install -g ts-node
//tsc --init -wrong compilation. при ошибке. файл json будет править 
console.log(num);
var str = 'hello world!';
console.log(str);
//array
var primes1 = [2, 3, 7, 6];
var primes2 = [11, 13, 17, 19];
// primes1: number[]
primes2.push(23, 34, 22);
console.log(primes2);
primes2.forEach(function (e, i) { return console.log(e); });
