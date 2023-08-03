const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = Object.assign({}, base, {   //为node js的模块定义
    mode: 'production', //制定模式为生产模式
    entry: {
        example: './example.tsx',
    },
    output:{//输出的模式
        path: path.resolve(__dirname, 'doc'),//输出的目录不能直接写路径，因为不同的操作系统对应的输出格式不一样__dirname为当前目录
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename:'example.html'
        })
    ],

})