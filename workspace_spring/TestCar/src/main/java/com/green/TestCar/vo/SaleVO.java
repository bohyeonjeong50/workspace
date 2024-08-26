package com.green.TestCar.vo;

import lombok.Data;

@Data
public class SaleVO {
    private int saleNum;
    private int carNum;
    private String buyerName;
    private String buyerTel;
    private String carColor;
    private String saleDate;
    private CarVO carVO;
}
