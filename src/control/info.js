const faker =require('faker');

module.exports = async(ctx, next) =>{
    let infoData ={
        code: 200,
        msg: 'success',
        data: {
            iceman: '123',
            title: 'good',
            content: faker.name.findName()
        }
    }
    ctx.body = infoData
    await next()
    console.log('mock result: ' + JSON.stringify(infoData))
  }