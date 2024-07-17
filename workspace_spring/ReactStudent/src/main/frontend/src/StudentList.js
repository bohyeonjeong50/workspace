const StudentList = () => {


  
  return(
    <div>
      <div>학생정보조회 페이지</div>
  
      <div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>학생명</td>
              <td>국어점수</td>
              <td>영어점수</td>
              <td>수학점수</td>
              <td>평균</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>80</td>
              <td>90</td>
              <td>100</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;

