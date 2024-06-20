package com.green.DataPractice.vo;

import java.util.Arrays;

public class OrderVO {
    private String type;
    private int cnt; //"int"는 갯수를 입력해야 다음 페이지로 넘어감
    private String[] option;
    private String request;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public String[] getOption() {
        return option;
    }

    public void setOption(String[] option) {
        this.option = option;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    @Override
    public String toString() {
        return "OrderVO{" +
                "type='" + type + '\'' +
                ", cnt=" + cnt +
                ", option=" + Arrays.toString(option) +
                ", request='" + request + '\'' +
                '}';
    }
}
