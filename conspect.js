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

let answer = prompt("Есть ли вам 18?", "Да");

console.log(answer);