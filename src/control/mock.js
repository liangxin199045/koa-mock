// 引入mockjs来模拟数据
const Mock = require('mockjs')
const data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
const img = Mock.Random.image('200x100')

module.exports = async(ctx, next) =>{
  let mockData ={
    msg: 'mock hello api works',
    data: data,
    imgUrl: img
  }
  ctx.body = mockData
  await next()
  console.log('mock result: ' + JSON.stringify(mockData))
}