var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 通过js设计数据库
var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        // 此处不要写Date.now() 因为会立即调用
        // 这里直接给了一个方法：Date.now
        // 当你去new Model的时候， 如果你没有传递create_time，则mongoose就会调用
        // default指定的Date.now方法，使用其返回值作为默认
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type:String,
        default: '/public/img/avatar-max-img.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        // 0没有权限限制、1不可以评论、2不可以登录
        type: Number,
        enum: [0, 1, 2],
        default: 0
    }

})

// 起名字大写名字单数
module.exports = mongoose.model('User', usersSchema);