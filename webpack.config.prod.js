const base = require('./webpack.config')
module.exports = Object.assign({}, base, {   //为node js的模块定义
    mode: 'production', //制定模式为生产模式
 entry: {
        example: './example.tsx',
    },
    externals: {  //作用是在不打包React 写一个外部的依赖 这些可以允许用户在使用别的库的时候正常运行react
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html'
        })
    ],
   
})