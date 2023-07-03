// let lastName = prompt("Введите вашу Фамилию:");

let lastName=null; 
let firstName=null;
let patronymic=null; 
let age=null;


while (!lastName || !isNaN(lastName)) {
  lastName = prompt("Введите вашу Фамилию:");
}

while (!firstName || !isNaN(firstName)) {
  firstName = prompt("Введите ваше Имя:");
}

while (!patronymic || !isNaN(patronymic)) {
  patronymic = prompt("Введите ваше Отчество:");
}

let fio = lastName + " " + firstName + " " + patronymic+ " ";


while (!age || isNaN(age)) {
  age = prompt("Введите ваш возраст в годах:");
}

// let firstName = prompt("Введите ваше Имя:");

// let patronymic = prompt("Введите ваше Отчество:");

// let age = prompt("Введите ваш возраст в годах:");

let gender = confirm("Ваш пол: Женский(ОК) \ Мужской(ОТМЕНА):");

let ageDays = age * 365;

let ageAfterFiveYears = +age + 5;

let choice = gender? "женский" : "мужской";

let pensionage = gender ? 55 : 65;

let pension = age >= pensionage ? "да" : "нет";


alert(
  "Ваше ФИО: " + fio +'\n'+
    "Ваш возраст в годах: " +age + '\n'+
    "Ваш возраст в днях: " + ageDays + '\n'+
    "Через 5 лет вам будет: " + ageAfterFiveYears +'\n' +
    "Ваш пол: " + choice + '\n' +
    "Вы на пенсии: " + pension);

