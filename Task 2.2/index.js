let number = +prompt("Ваше число:");

let minus = +prompt("Сколько отнять?");

let plus = +prompt("Сколько прибавить?");

let multiplication= +prompt("На сколько умножить?");

let division = +prompt("На сколько разделить?");


let answer = (((number - minus) + plus) * multiplication) / division;


alert(`(((${number} - ${minus}) + ${plus}) * ${multiplication}) / ${division} = ${answer}`);