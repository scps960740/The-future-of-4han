
### 建表
```
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50),
  `post_count` int,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=200;

INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960101', 'aaa1234', '許善', 0);
INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960202', 'aaa1234', '玉林', 30);
INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960303', 'aaa1234', '許輪', 20);
INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960404', 'aaa1234', '爽哲', 1);
INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960505', 'aaa1234', '爽哲', 10);
```


### 查全部
```
SELECT * FROM `users`
```

### 查某一筆
```
SELECT * FROM `users` WHERE `username`='scps960101'
SELECT username FROM `users` WHERE `username`='scps960101'
SELECT * FROM `users` ORDER BY `post_count` DESC #ASC
SELECT DISTINCT name FROM `users` 
SELECT TOP 2 * FROM `users`;
SELECT * FROM `users` WHERE `password`='aaa1234' AND `post_count` < 30
SELECT * FROM `users` WHERE `username`='scps960101' OR `post_count`=1
SELECT * FROM `users` WHERE `username` LIKE 'scps%'
SELECT * FROM `users` WHERE `post_count` BETWEEN 0 AND 10
```

### SQL注入 SQL Injection
```
// 後端 GET
const { id } = query // querystring https://.....?id=1 OR id != 1

if (typeof id === 'number') {
  // id = '1 OR id != 1'
  // SELECT * FROM users WHERE id=1 OR id != 1
  return mysql.excute(`SELECT * FROM users WHERE id=${id}`)
} else {
  return 'sql error'
}
```

### 插入資料
```
// 啥都不指定，一定要對齊
INSERT INTO users VALUES ('1', 'scps960505', 'aaa1234', '爽哲', 10);

// 指定要新增哪些欄位
INSERT INTO users (`username`, `password`, `name`, `post_count`) VALUES ('scps960505', 'aaa1234', '爽哲', 10);
```

### 更新資料
```
UPDATE users SET username = 'ooxx0204', password = 123 WHERE name = '玉林';
```

### 刪除資料
```
DELETE FROM users WHERE username = 'ooxx0204';

// 嚴重注意加條件，不然被資遣
DELETE FROM users;
```

### 題目
1. 建出一個FB動態牆資料表，包含id，title，desc，like_count，comment_count，key是id，id要自動新增，起始值是10
2. 新增10筆資料到裡面（先寫一筆就好）指定欄位title，desc，like_count，comment_count，讓id自動新增。
```
id，title，desc，like_count，comment_count
01 貼文一 貼文內容1        100    100
02 貼文二 貼文內容2        200    30
03 貼文三 貼文內容3        150    50
04 貼文四 貼文內容4        170    1110
05 貼文五 貼文內容5        10     19
06 貼文六 貼文內容6        0      38
07 貼文七 貼文內容7        1000   1
08 貼文八 貼文內容8        300    0
09 我不是貼文九 貼文內容9   500    2
10 我不是貼文十 貼文內容10  1      10
```

3. 搜尋全部資料
3. 搜尋前10筆資料
4. 搜尋like_count大於100的資料
5. 搜尋like_count大於100且comment_count小於10的資料
6. 搜尋全部資料然後用like_count由大到小排序
7. 搜尋title是「貼文」開頭的所有資料
8. 搜尋like_count範圍在0~400的資料
9. 更新id等於10的資料，把title改掉就好。
10. 刪除id等於5的資料