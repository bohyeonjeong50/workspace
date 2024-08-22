package com.green.TestCar.service;

import com.green.TestCar.vo.CarVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carService")
public class CarServiceImpl implements CarService {
    @Autowired
    private SqlSessionTemplate sqlSession;

    //차량 목록 조회
    @Override
    public List<CarVO> getCarList() {
        return sqlSession.selectList("carMapper.getCarList");
    }

    //차량 등록
    @Override
    public void insertCar(CarVO carVO) {
        sqlSession.insert("carMapper.insertCar", carVO);
    }

}
