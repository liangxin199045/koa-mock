module.exports ={
    port: 7770,
    corsOptions: {
        origin: function(ctx){      // 指定特定origin
            return 'http://iceman.qq.com';
        },
        maxAge: 10,                 // 指定本次预检请求的有效期，单位为秒
        credentials: true,           // 是否允许发送Cookie
        allowMethods: ['GET','POST','PUT','OPTIONS','DELETE'],
        allowMethods: ['Content-type','Accept']
    }
}