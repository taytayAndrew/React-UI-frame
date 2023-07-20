const path = require('path')
module.exports = {   //为node js的模块定义
    mode: 'production', //制定模式为生产模式
    entry:{
        'React UI frame':'./src/index.tsx',//入口
    },
    output:{//输出的模式
        path: path.resolve(__dirname, 'dist/lib'),//输出的目录不能直接写路径，因为不同的操作系统对应的输出格式不一样__dirname为当前目录
        library:'React UI frame', //库的名字
        libraryTarget:'umd'//库导出的格式 还有commonJS amd 但umd兼容性最强
    },
    module:{ //支持tsx文件
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
   
}