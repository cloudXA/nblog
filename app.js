var express = require('express');
var path = require('path');
var router = require('./router');
var bodyParser = require('body-parser');


var app = express();

// 开放两个静态资源
// app.use('/public', express.static('./public/'));//相同
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/',express.static(path.join(__dirname, './node_modules/')))

// 服务端渲染
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'));

// app.get('/', (request, response)=> {
//     // response.send('hello');
//     response.render('index.html', {
//         name: '张三'
//     })
// })

// 配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 把路由挂载到app中
app.use(router);


app.listen(4100, () => {
    console.log('running...')
})