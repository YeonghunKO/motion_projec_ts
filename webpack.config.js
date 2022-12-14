const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // 번들링 시작 위치
  output: {
    path: path.join(__dirname, '/dist'), // 번들 결과물 위치
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
    extensions: ['.ts', '.js', '.json', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 위치
    }),
  ],
  devServer: {
    host: 'localhost', // live-server host 및 port
    port: 5600,
  },
  mode: 'production', // 번들링 모드 development / production
  devtool: 'source-map',
};
