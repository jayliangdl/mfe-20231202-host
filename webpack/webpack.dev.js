const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  /**webpack专属的配置放在这里*/
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
  /**应用自己的配置放在这里*/
  appConfig:{
    consumURL:'http://localhost:8082'
  }
}