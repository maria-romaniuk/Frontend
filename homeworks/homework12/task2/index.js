//-------Task2
//Написать калькулятор квадратного уравнения (дискрименант и корни) пользователь вводит три переменных a, b , c 
//и ему выводится ответ в x1 и x2 в любом виде.

//ax2 + bx + c = 0


//a = 2 b = -5 c = 3
// 2x2 – 5x + 3 = 0
//Дискриминант равен:
//D = b2 – 4ac = (-5)2 – 4·2·3 = 1

//Дискриминант D > 0, следовательно уравнение имеет два действительных корня.
//x1 = 	-b + √D /2a	 = 	-(-5) + √1 /2·2	 = 1.5

// x2 = -b - √D	/2a	= -(-5) - √1/2·2 = 1




const form = document.getElementById('calculatorForm');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', ()=>{
    const a = form.elements['numberA'].value;
    const b = form.elements['numberB'].value;
    const c = form.elements['numberC'].value;

})