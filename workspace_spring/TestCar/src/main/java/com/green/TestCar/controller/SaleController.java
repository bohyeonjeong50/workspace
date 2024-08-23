package com.green.TestCar.controller;

import com.green.TestCar.service.SaleService;
import com.green.TestCar.vo.SaleVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/saleBoard")
public class SaleController {
    @Resource(name = "saleService")
    private SaleService saleService;

    //판매 정보 조회
    @GetMapping("/saleInfo")
    public List<SaleVO> getSaleInfo(){
        return saleService.getSaleInfo();
    }

    //판매 정보 등록
    @PostMapping("/saleInsert")
    public void insertSale(@RequestBody SaleVO saleVO){
        saleService.insertSale(saleVO);
    }

    //차량 구매자 정보
    @GetMapping("/saleAllInfo")
    public List<SaleVO> getCarAll(){
        return saleService.getCarAll();
    }
}
