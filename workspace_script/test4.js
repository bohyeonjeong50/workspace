function checkAllMenu(){

  const chkAll = document.querySelector('#chk_all');
  const isChecked = chkAll.checked;

  //모든 체크박스 선택
  const chks = document.querySelectorAll('.menu');

   //체크 되었을 때
   if(isChecked){
      for(const chk of chks){
        chk.checked = true;
      }
    }

    //체크 해제 되었을 때
    else{
      for(const chk of chks){
        chk.checked = false;
      }
    }
  }

  function checkAllOption(inputTag){

    const chkAll = document.querySelector('#chk_all');
    const isChecked = chkAll.checked;

  
    const chks = inputTag.nextElementSibling.querySelector('input');
  
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
