// 配置webpack,使用nodejs和commonjs模块化
//引入nodejs内置模块path
// const path = require('path')
const { resolve } = require('path')
//引入插件  自动在打包出口目录内生成html文件，并且自动引入打包后的代码
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 在源代码与打包代码之间产生映射关系
  devtool: "source-map",
  // devtool: "inline-source-map",
  // devtool: "hidden-source-map",
  // devtool: "eval-source-map",
  //设置入口文件路径
  // entry: './src/index.js',
  // 设置多入口
  entry: {
    index1: './src/index.js',
    indexa: './src/js/a.js'
  },
  //出口
  output: {
    //打包后的文件存放的目录的绝对路径
    path: resolve(__dirname, 'dist'),
    //打包后的文件名
    // filename: 'index-dev.js'
    // 多出口
    // [name]是入口对象的属性名
    filename: './js/[name]-dev.js'
  },

  // 加载器
  module: {
    rules: [
      // 处理html中img图片
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      // 处理图片文件  css中用到了图片
      {
        test: /\.jpg|png|gif$/i,
        // use: 'file-loader'
        use: [{
          loader: 'file-loader',
          options: {
            // 设置打包后的出口文件路径
            outputPath: 'images'
          }
        }]
      },

      /* {
        test: /index\.css$/i,
        use: [{
          loader: 'file-loader',
          options: {
            emitFile: false
          }
        }]
      }, */
      /* {
        test: /index\.css$/i,
        //排除某些文件
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }, */
      {
        test: /\.css$/i,
        //顺序是在数组中从右往左执行
        // style-loader在head里创建style标签设置样式
        // css-loader将css文件代码转为字符串加载到js中
        // use: ['style-loader', 'css-loader']
        // use:'file-loader',
        use: [{
          loader: 'file-loader',
          options: {
            // 设置打包后的出口文件路径
            outputPath: 'styles'
          }
        }]
      },
      {
        test: /\.less$/i,
        // less-loader将less文件转为css文件
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      //以指定的html模板生成html
      template: './src/main.html'
    })
  ],

  //打包模式设置
  mode: 'development',
  // mode:'production',

  // 配置webpack开发服务器  工具：webpack-dev-server
  devServer: {
    //构建后的目录 一般是打包后的文件存储的目录
    contentBase: resolve(__dirname, 'bulid'),
    // 是否gzip
    compress: true,
    // 端口号  默认8080
    port: 3000,
    // 是否自动打开浏览器
    open: true
  },
}