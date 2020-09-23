const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    //mode: 'production',
    mode: 'development',
    //devtool: 'hidden-source-map',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        //app=합쳐줄 파일 이름, 다른이름도 가능
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            //main.js에서 vue파일을 불러오는데 js파일이 아니라서 오류가 난다
            test: /\.vue$/,
            loader: 'vue-loader',
            //use: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
//        filename: '[name].js' (entry에서 app으로 설정했으니까 윗줄과 같다)
        path: path.join(__dirname, 'dist'),
    },
};