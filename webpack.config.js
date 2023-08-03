const path = require('path')
module.exports = {   //为node js的模块定义
    // mode: 'production', //制定模式为生产模式
    entry:{
        'React UI frame':'./src/index.tsx',//入口
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']//支持这些后缀的文件
    },
    output:{//输出的模式
        path: path.resolve(__dirname, 'dist/lib'),//输出的目录不能直接写路径，因为不同的操作系统对应的输出格式不一样__dirname为当前目录
        library:'React UI frame', //库的名字
        libraryTarget:'umd'//库导出的格式 还有commonJS amd 但umd兼容性最强
    },
    module:{ //支持tsx文件
        rules:[
            {
                test: /\.tsx?$/, //以.tsx结尾或.ts结尾
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
              }
        
       
        ]
    },


    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title:'what',
    //         template: 'index.html'
    //     })
    // ],
    // externals: {  //作用是在不打包React 写一个外部的依赖 这些可以允许用户在使用别的库的时候正常运行react
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // }
   
}