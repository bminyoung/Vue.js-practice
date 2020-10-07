const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: { //js가 아닌것들을 js로 만들어준다
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    },{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        { //css-loader 안먹힐때
          loader: 'css-loader',
          options: {
            esModule: false,
          }
        }
        
      ]
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
};
