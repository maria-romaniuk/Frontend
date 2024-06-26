// Создать персонажей для игры с помощью прототипного наследования и this
// Создайте объект character, представляющий следующие характеристики и действие для всех персонажей:
// свойства name (имя), health (здоровье), level (уровень)
// метод introduce для character, который выводит в консоль информацию о персонаже, например: "Hello, my name is [name], I am at level [level], and I have [health] health." - на квадратные скобки не обращайте внимание, они для схемы, чтобы указать на переменные значения
// Создайте объект warrior, который будет наследовать свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), weapon (оружие)
// метод attack, который выводит сообщение в консоль о нападении и название оружия (внутри использовать значение из weapon)
// Создайте объект wizard, наследующий свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), spell (заклинание)
// метод castSpell, который выводит сообщение в консоль о том, как персонаж произносит заклинание (внутри использовать значение из spell).
// Результат должен состоять из следующих действий:
// вызова метода introduce для каждого из объектов
// вызова метода attack для объекта warrior
// вызова метода castSpell для объекта wizard


interface ICharacter{
    name: string,
    health: number,
    level: number,
    introduce?: () => void; //функция introduce не принимает аргументов и не возвращает значения. так типизируем функцию
}

interface IWarrior extends ICharacter{
    weapon: string,
    attack: () => void
}
interface IWizzard extends ICharacter{
    spell: string,
    castSpell: () => void
}
const character: ICharacter = {
    name: '',
    health: 100,
    level: 1,
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
    }
// когда работаем со стрелочными функциями this не работает
}

// const warrior:IWarrior = Object.create(character, {
//     name: { value: 'Warrior' },
//     weapon: { value: 'Sword' },
//     health: { value: 100 },
//     level: { value: 5 },
//     attack: { 
//         value: function() {
//             console.log(`I am ${this.name} and I am attacking with my ${this.weapon}!`);
//         }
//     }
// });

// const wizard: IWizzard = Object.create(character, {
//     name: { value: 'Wizard' },
//     spell: { value: 'Skadush' },
//     health: { value: 60 },
//     level: { value: 7 },
//     castSpell: { 
//         value: function() {
//             console.log(`I am ${this.name} and I am casting the ${this.spell} spell!`);
//         }
//     }
// });

// HTM...Elemenet- типизация HTML елемента, вместо ... необходимо написать имя тега
// const warrior = Object.create(character) as IWarrior; //{...character} // as Iwarrior создаем объект и возвращаем типизацию. тут мы уточняем как именно будет выглядеть объект. применяем только когда нетальтернатвы
const warrior:IWarrior = Object.create(character);
warrior.name = 'Warrior';
warrior.weapon = 'Sword';
warrior.health = 100;
warrior.level = 5;
warrior.attack = function() {
    console.log(`I am ${this.name} and I am attacking with my ${this.weapon}!`);
}

// const wizard = Object.create(character) as IWizzard;
const wizard:IWizzard = Object.create(character);
wizard.name = 'Wizard';
wizard.spell = 'Skadush';
wizard.health = 60;
wizard.level = 7;
wizard.castSpell = function() {
    console.log(`I am ${this.name} and I am casting the ${this.spell} spell!`);
}


if (warrior.introduce) {
    warrior.introduce();
  }
  if (wizard.introduce) {
    wizard.introduce();
  }

warrior.attack();


wizard.castSpell();