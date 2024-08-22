package com.green.TestCar.controller;

import com.green.TestCar.service.CarService;
import com.green.TestCar.vo.CarVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carBoard")
public class CarController {
    @Resource(name = "carService")
    private CarService carService;

    //차량 목록 조회
    @GetMapping("/list")
    public List<CarVO> getCarList(){
        return carService.getCarList();
    }

    //차량 등록
    @PostMapping("/insert")
    public void insertCar(@RequestBody CarVO carVO){
        carService.insertCar(carVO);
    }


}
