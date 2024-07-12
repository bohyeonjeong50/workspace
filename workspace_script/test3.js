function setTable(){
  const row = document.querySelector('#rowInput').value;
  const col = document.querySelector('#colInput').value;

  let str = '';
  str += '<table>';
  
  for(let i = 0; i < row; i++){
    str += '<tr>';
    
    for(let j = 0; j < col; j++ ){
      str += `<td>${i + 1}행 ${j + 1}열</td>`;
    }

    str += '</tr>';
  }

  str += '</table>';


  const divTag = document.querySelector('.table-div');

  divTag.innerHTML = '';
  divTag.insertAdjacentHTML('beforeend', str);

}