const numberOne = Number(prompt("Digite o primeiro número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));

const sum = (numberOne + numberTwo).toFixed(2);
const sub = (numberOne - numberTwo).toFixed(2);
const multi = (numberOne * numberTwo).toFixed(2);
const div = (numberOne / numberTwo).toFixed(2);
const restDiv = (numberOne % numberTwo).toFixed(2);
let evenOdd;

if((sum % 2) == 0){
  evenOdd = "Par";
}else{
  evenOdd = "Ímpar";
}

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`A resto da divisão dos dois números é: ${restDiv}`);
alert(`A soma dos dois números é ${evenOdd}: ${sum}`);

if(numberOne == numberTwo){
  alert(`Os números inseridos são iguais.`);
}else{
  alert(`Os números inseridos são diferentes.`);
}