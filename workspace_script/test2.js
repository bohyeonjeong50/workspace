
function setAvgAge(){
  const tds = document.querySelectorAll('.ageTd');

  let sum = 0;
  tds.forEach((tdTag, i) => {
    const age = Number(tdTag.textContent);
    sum = sum + age;
  });

  const avg = sum / tds.length;

  document.querySelector('#resultTd').textContent = avg;

}