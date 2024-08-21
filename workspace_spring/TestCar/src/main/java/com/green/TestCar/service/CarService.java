package com.green.TestCar.service;

import com.green.TestCar.vo.CarVO;

import java.util.List;

public interface CarService {

    //차량 목록 조회
    List<CarVO> getCarList(CarVO carVO);

    //차량 등록
    void insertCar(CarVO carVO);
}
