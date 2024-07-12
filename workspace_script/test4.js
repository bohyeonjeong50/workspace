//전체 선택 및 해제
function checkAllMenu(){
  //전체 체크박스의 체크 여부
  const isChecked = document.querySelector('#chk_all').checked;

  //모든 체크박스
  const chks = document.querySelectorAll('input');

  if(isChecked){
    for(const chk of chks){
      chk.checked = true;
    }
  }
  else{
    for(const chk of chks){
      chk.checked = false;
    }
  }
  }

  const checkAllOption = (checkbox) => {
    //다음 형제 노드 
    const chks = checkbox.nextElementSibling.querySelectorAll('input');

    if(checkbox.checked){
      for(const chk of chks){
        chk.checked = true;
      }
    }
    else{
      for(const chk of chks){
        chk.checked = false;
      }
    }
  }
