const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base,{   //为node js的模块定义
    mode: 'development', //制定模式为生产模式
    entry: {
        example: './example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html'
        })
    ],
})