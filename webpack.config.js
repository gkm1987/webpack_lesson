var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //设置入口文件
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    //指定webpack-dev-server 的配置项
    devServer: {
        port: 8080,
        contentBase: './build',
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                pathRewrite: function(path, req) {
                    return path.replace(/\/api\/(.*)/, '/\$1\.json')
                }
            }
        }
    },
    //配置模块
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
}