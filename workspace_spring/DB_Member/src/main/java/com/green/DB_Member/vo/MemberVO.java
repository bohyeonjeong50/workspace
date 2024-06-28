package com.green.DB_Member.vo;

import lombok.Data;

@Data
public class MemberVO {
    private int memNum; // me> 데이터베이스(테이블) 컬럼명과 똑같이 하되 자바엔 소문자로 변수명 지정
    private String memName;
    private int memAge;
    private String memAddr;



}
