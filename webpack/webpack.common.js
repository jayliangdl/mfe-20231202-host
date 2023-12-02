      
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),  //项目入口
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],  //查找顺序.tsx => .ts => .js
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,       //查找ts,js,tsx,jsx文件
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  mode:'development',
  output: {
    path: path.resolve(__dirname, '..', './build'),   //build输出
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        'remote-mf': 'remote@http://localhost:8082/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  stats: 'errors-only',
}
