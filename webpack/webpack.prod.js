const webpack = require('webpack');
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins : [
    new webpack.DefinePlugin({
      'process.env.name':JSON.stringify('prod')
    }),
    new webpack.DefinePlugin({
      'process.env.REMOTE_URL': JSON.stringify('https://mfe-20231202-remote.vercel.app/')
    }),
  ]
}