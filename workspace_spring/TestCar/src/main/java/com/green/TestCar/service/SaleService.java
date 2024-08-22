package com.green.TestCar.service;

import com.green.TestCar.vo.SaleVO;

import java.util.List;

public interface SaleService {

    //판매 정보 조회
    List<SaleVO> getSaleInfo();
}
