const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
console.log('dev is loaded');
console.log('dev is loaded');
console.log('dev is loaded');
console.log('dev is loaded');
console.log('dev is loaded');
module.exports = {
  webpackConfig:{
    mode: 'development',
    
    devServer: {
      hot:true
    },
    devtool: 'cheap-module-source-map',
    plugins : [
      new webpack.DefinePlugin({
        'process.env.name':JSON.stringify('dev')
      }),
      new ReactRefreshWebpackPlugin()
    ]
  },
  appConfig:{
    consumURL:'http://localhost:8082'
  }
}