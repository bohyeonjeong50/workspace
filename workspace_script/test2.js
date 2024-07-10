
function setAvgAge(){

}

const num1 = document.querySelector('.age1 > td:last-child').textContent;
const num2 = document.querySelector('.age2 > td:last-child').textContent;
const num3 = document.querySelector('.age3 > td:last-child').textContent;
console.log(num1);

const result1 = Number(num1)+Number(num2)+Number(num3) ;
console.log(result1);
const result = Number(result1)/3

//화면에 띄우기
const resultTd = document.querySelector('#resultTd');
resultTd.textContent = result;
