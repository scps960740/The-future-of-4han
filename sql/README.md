
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