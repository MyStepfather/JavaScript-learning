let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
			&& a != '' && b != '' && a.length < 50) {
			console.log("Done");
			appData.expenses[a] = b;
		} else {
			alert("Некорректные данные, введите еще раз.");
			i--;
		}	
	};
}
chooseExpenses();

// - метод округления до целого числа, в скобках можно указать, сколько цифер после запятой остваить





function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневый бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}

detectLevel();

function chooseOptExpenses() {
	let a = 1;
	for (let i = 0; i<3; i++) {
		let b = prompt("Статья необязательных расходов?");
		appData.optionalExpenses[a] = b;
		a++;
	}
}

chooseOptExpenses();