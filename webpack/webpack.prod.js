const webpack = require('webpack');
module.exports = {
  webpackConfig:{
    mode: 'production',
    
    devtool: 'source-map',
    plugins : [
      new webpack.DefinePlugin({
        'process.env.name':JSON.stringify('prod')
      })
    ]
  },
  appConfig:{
    consumURL:'https://mfe-20231202-remote.vercel.app',
  }
}