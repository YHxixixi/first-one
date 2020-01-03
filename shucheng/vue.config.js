const dataBook = require('./public/mock/data.json')

module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      // app.get('/api/list',(req,res)=>{
      //   const {id} = req.query
      //   res.json({
      //     errCode:0,
      //     list:dataBook.ranklist1.filter((val)=>val.bookId)
      //   })

      // })

      app.get('/api/data',(req,res)=>{
        res.json({
          data:dataBook.ranklist1
        })
      })

      //导航守卫
      const UserData = [
        {
          username:'xi',
          pwd:"321"
        }
      ]

      app.get('/api/login',(req,res)=>{
        const {user,pwd} = req.query

        const flag =UserData.some((item)=>{
          return item.username===user && item.pwd===pwd
        })
        if(flag){
          res.json({
            errCode:0,
            mag:'success',
            token:`bawei_${user}_${pwd}`
          })
        }else{
          res.json({
            errCode:-1,
            mag:'fail'
          })
        }
      })


    }
  }

}