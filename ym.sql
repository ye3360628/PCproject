SET NAMES UTF8;
DROP DATABASE IF EXISTS ym;
CREATE DATABASE ym CHARSET=UTF8;
USE ym;
/**用户信息**/
CREATE TABLE ym_user(
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
/**用户信息**/
INSERT INTO ym_user VALUES
( 'dingding', '123456'),
( 'dangdang', '123456'),
( 'doudou', '123456'),
( 'yaya', '123456');

DROP TABLE IF EXISTS xz_index_product;
CREATE TABLE xz_index_product(
  `lid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `pic1` varchar(128) DEFAULT NULL,
  `pic2` varchar(128) DEFAULT NULL,
  `pic3` varchar(128) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_product`
--

TRUNCATE TABLE xz_index_product;
--
-- 转存表中的数据 `xz_index_product`
--

INSERT INTO xz_index_product (`lid`, `title`, `details`, `pic`,`pic1`,`pic2`,`pic3`, `price`, `href`) VALUES
(1, '天梭经典系列', '天梭经典系列T035.410.11.031.00男士石英腕表', 'img/2.jpg','img/t-b-1.jpg','img/t-b-2.jpg','img/t-b-3.jpg','1280.00', 'watch_1.html?lid=1'),
(2, '欧米茄碟飞系列', '欧米茄碟飞系列424.13.40.20.01.001腕表', 'img/1.JPG', 'img/t-a-1.jpg','img/t-a-2.jpg','img/t-a-3.jpg','13800.00', 'watch_1.html?lid=2'),
(3, '江诗丹顿传承系列', '江诗丹顿传承系列81180/000R-9159男士手动机械腕表', 'img/3.JPG','img/t-c-1.jpg','img/t-c-2.jpg','img/t-c-3.jpg', '72000.00', 'watch_1.html?lid=3'),
(4, '卡地亚蓝气球系列', '卡地亚蓝气球系列W69016Z4腕表 后镶钻', 'img/4.JPG','img/t-d-1.jpg','img/t-d-2.jpg','img/t-d-3.jpg', '43800.00', 'watch_1.html?lid=4'),
(5, 'ROLEX劳力士', 'ROLEX劳力士 星期日历型系列118348金盘镶钻腕表', 'img/5.JPG','img/t-e-1.jpg','img/t-e-2.jpg','img/t-e-3.jpg', '53400.00', 'watch_1.html?lid=5')

