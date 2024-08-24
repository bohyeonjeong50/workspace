package com.green.TestCar.service;

import com.green.TestCar.vo.SaleVO;

import java.util.List;

public interface SaleService {

    //판매 정보 조회
    List<SaleVO> getSaleInfo();

    //판매 정보 등록
    void insertSale(SaleVO saleVO);

    //차량 구매자, 차량 정보
    List<SaleVO> getCarAll();
}
