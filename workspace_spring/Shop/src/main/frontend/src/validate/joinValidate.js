
// //valid_tag[0] : memId
// //valid_tag[1] : memName
// export const joinValidate = (newData, valid_tag, tagName) => {
//유효성 검사 결과를 저장할 변수
let resultArr = [
  false, //아이디
  false, //비번
  false, //비번확인
  false, //이름
  false //연락처
]; 

let result_pw1 = false;
let result_pw2 = false;
  
//   switch(tagName){

//     //id 값을 변경했으면 id 피드백만 띄움
//     case 'memId' :
//       if(tagName == 'memId'){
//         //id가 영문만 포함 + 4~12자리인지 검사하는 정규식
//       //{4,12} : 4자리 이상 12자리 이하
//       const regex_memId = /^[a-z|A-Z]{4,12}$/;
    
//       //id 유효성 검사
//       //test() : 매개변수로 들어온 데이터가 조건에 부함하면 리턴 true
//       if(regex_memId.test(newData.memId)){
//         sendFeedbackMsg(valid_tag[0], '사용 가능한 아이디입니다.', 'good');
//       }
//       else{
//         sendFeedbackMsg(valid_tag[0], '불가능한 아이디입니다.', 'error');
//       }
    
//       break;

//       case 'memPw':
//         break;

//       case 'confirmPw' :
//         //4~12글자, 영문 소문자 + 숫자 조합
//         const regex_memPw = /^[a-z0-9]{4,12}$/;

//         if(regex_memPw.test(newData.memPw)){
//           sendFeedbackMsg(valid_tag[1], '사용 가능한 비번입니다,', 'good');
//         }
//         else{
//           sendFeedbackMsg(valid_tag)
//         }

//         //입력한 두 비번이 다르면
//         if(newData.memPw != newData.confirmPw){
//           sendFeedbackMsg(valid_tag[1], '비밀번호가 일치하지 않습니다', 'error');
//         }
//         else{
//           sendFeedbackMsg(valid_tag[1], '일치', 'good');
//         }

//         break;
//       }



//   //pw 값을 변경했으면 pw 피드백만 띄움
//   if(tagName == 'memPw'){
//       //이름 값 유효성 검사
//   //정규식 : 2~10 글자 + 한글만
//   const regex_memName = /^[ㄱ-ㅎ|가-힣]{2,10}$/;



//   //정규식에 충족하면
//   if(regex_memName.test(newData.memName)){
//     sendFeedbackMsg(valid_tag[3], '사용 가능한 이름입니다.', 'good');
//   }
//   else{
//     sendFeedbackMsg(valid_tag[3], '사용 불가능한 이름입니다.', 'error');
//   }
//   case 'memTel' :


//   } 
//   //name 값을 변경했으면 name 피드백만 띄움
//   //tel 값을 변경했으면 tel 피드백만 띄움

    
//   }


// }
  





//유효성 결과 메세지를 띄우는 함수
function sendFeedbackMsg(feedbackTag, msg, type){
  feedbackTag.current.className = `feedback ${type}`;
  feedbackTag.current.textContent = msg;
}
