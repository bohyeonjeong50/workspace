package com.green.TestCar.service;

import com.green.TestCar.vo.CarVO;
import com.green.TestCar.vo.SaleVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("saleService")
public class SaleServiceImpl implements SaleService {
    @Autowired
    private SqlSessionTemplate sqlSession;

    //차량 목록 조회
    @Override
    public List<SaleVO> getSaleInfo() {
        return sqlSession.selectList("saleMapper.getSaleInfo");
    }

    //판매 정보 등록
    @Override
    public void insertSale(SaleVO saleVO) {
        sqlSession.insert("saleMapper.insertSale", saleVO);
    }

    @Override
    public List<SaleVO> getCarAll() {
        return sqlSession.selectList("saleMapper.getCarAll");
    }
}
