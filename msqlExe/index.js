const mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'xiyiwang',
  database : 'theone'  //数据库
});

// connection.connect((error) => {
//   if (error) {
//     console.log('数据库连接失败,详情：',error)
//   } else {
//     console.log('数据库连接成功')
//   }
// })

// module.exports = connection


connection.query('select * from overtime',(err,data)=>{
  if(err){
    console.log(err)
  }else{
    console.log(data,'data')
  }
})