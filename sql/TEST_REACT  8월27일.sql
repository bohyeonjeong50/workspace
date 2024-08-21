CREATE TABLE car_ifo (
	CAR_NUM INT AUTO_INCREMENT PRIMARY KEY
	, CAR_NAME VARCHAR(50) NOT NULL
	, CAR_PRICE VARCHAR(50) NOT NULL
	, CAR_COMPANY VARCHAR(50) NOT NULL	
);

DROP TABLE car_ifo;

SELECT * FROM car_info;

CREATE TABLE SALES_INFO (
	SALE_NUM INT AUTO_INCREMENT PRIMARY KEY
	, BUYER_NAME VARCHAR(50) NOT NULL
	, BUYER_TEL VARCHAR(30)
	, CAR_COLOR VARCHAR(50) NOT NULL
	, SALE_DATE DATETIME DEFAULT CURRENT_TIMESTAMP
	, CAR_NUM INT NOT NULL REFERENCES car_ifo (CAR_NUM)
);

SELECT * FROM SALES_INFO;

