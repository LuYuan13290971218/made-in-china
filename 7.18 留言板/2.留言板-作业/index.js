var express = require('express')
var web = express()
web.use(express.static('public'))
var bodyParser = require('body-parser')
var fs = require('fs')
web.use(bodyParser.urlencoded({extended:false}))

fs.exists('data',function(isExists){
    if(!isExists){
        fs.mkdirSync('data')
    }
})
web.post('/newMessage',function(req ,res){
    var newTime = new Date()
    var year = newTime.getFullYear()
    var month = newTime.getMonth() + 1
    var day = newTime.getDate()
    var hours = newTime.getHours()
    var minutes = newTime.getMinutes()
    var seconds = newTime.getSeconds() 
    var currentTime = year +'-' + month + '-' + day + ' ' + 
    hours + ':' + minutes + ':' + seconds

    var newMessage = {
        time: currentTime ,
        content : req.body.content
    }
//    [ {},
//     {},
//     {},
//     {},
//     {},]
    fs.appendFile('data/message.txt' , JSON.stringify(newMessage) +',\n',function(err){
        fs.readFile('data/message.txt',function(err , data){
            res.send(data.toString())
        })
    })
})
web.listen('8080',function(){
    console.log('8080服务器启动.......')
})