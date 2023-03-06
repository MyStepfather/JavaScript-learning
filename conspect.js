/* console.log(); - вывод в консоль */
/* alert(); - вывод на экран (модальное окно) */
/* confirm("is it OK?"); - выовод на экран модального окна с "Ок" и "Отмена" */
/* prompt("Есть ли вам 18?", "Да"); - вывод модального окна с полем для ввода для пользователя. Ответ всегда string */ 
/* typeof(); - проверка на тип данных */ 

/* типы данных

var number = 5; - число
var string = "Hello!"; - строка
var sym = Symbol(); - символ
var boolean = true; - логический тип д. (истина/ложь)
null; - вызов несуществующего элемента
undefined; - нет значения у переменной
var obj = {}; - объект
 */

/* console.log(4/0);
console.log('string'*9);

let some;
console.log(some); */

/* let person = {
    name: "John",               - свойство: значение
    age: 25,                    - свойство: значение
    isMaried: false             - свойство: значение
}; */

/*два варианта вызова значения 
console.log(person.name);
console.log(person["name"]); */

/* вызов элемента массива
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]) */

/* let answer = confirm("is it OK?"); */

// УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ УСЛОВИЯ//

/* Синтаксис условия if/else if/ else */
/* let num = 50; */

/* if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log ("Много!")
} else {
    console.log ("Верно!")
};

(num == 50) ? console.log ("Верно!") : console.log ("Неверно!"); - Вариант записи условия типа if/else */

/* Вариант записи условия через switch */
/* num = 43;
switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log ("Много!");
        break;
    case num > 80:
        console.log ("Все еще много!");
        break;
    case 50:
        console.log ("Верно!");
        break;
    default:
        console.log ("Что-то пошло не так!");
        break;
} */

// Циклы Циклы Циклы// работает пока True

/* Простой цикл */
/*let num = 50;
while (num < 55) {
    console.log(num);
    num++;
} */

/* Цикл - действия, потом проверка (проверка задает вопрос "Можно ли продолжать выполнять цикл?") */
/* let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55); */

/* for (let i  (сокращенно от index)  = 1; i < 8; i++) {  - что, условие, действие 
    if (i == 6) {
         break - остановить цикл 
         continue - продолжить цикл, как дойдет до условия if 
    }
    console.log(i)
} */

//ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ 

/* function showFirstMessage(text) { //в названии сначала пишем Глагол потом что делаем
    alert(text);
    let num = 20;
}

showFirstMessage("jkkjh"); */

//Переменные, объявленные внутри ФУНКЦИИ, не видны, если обратиться к ней вне ФУНКЦИИ
//Переменная, используемая внутри функции, может поменять значение, если она была объявлена до функции
//Переменная, объявленная внутри функции и та же переменная, объявенная до функции - две разные переменные

function calc(a,b) {
    return(a + b);
}

console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

//Function Declaration - вызов функции в основном потоке кода (можно вызвать до ее объявления)
//Function Expression - объявление функции в контексте какого-либо выражения, например присваивания. let calc = function()...

//let calc = (a,b) => {a+b} - объявление функции по новому стандарту ES6

//МЕТОДЫ МЕТОДЫ МЕТОДЫ

.lenght - длина строки
.toUpperCase() - в верхний регистр
.toLowerCase() - в нижний регистр
let twelve = "12.8 pxfdf fsf";

//console.log(Math.round(twelve)); - округление к ближайшему целому числу
//console.log(parseInt(twelve)); - переводит в число и отбрасывает лишнее до запятой
//console.log(parseFloat(twelve)); - переводит в число и отбрасывает лишнее, после запятой не трогает