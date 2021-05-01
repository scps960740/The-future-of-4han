// SQL注入 SQL Injection

// 後端 GET
const { id } = query // querystring https://.....?id=1 OR id != 1

if (typeof id === 'number') {
  // id = '1 OR id != 1'
  // SELECT * FROM users WHERE id=1 OR id != 1
  return mysql.excute(`SELECT * FROM users WHERE id=${id}`)
} else {
  return 'sql error'
}