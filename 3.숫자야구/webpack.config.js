const path = require('path');

module.exports = {
    entry: {
        //app=합쳐줄 파일 이름, 다른이름도 가능
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{

        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
//        filename: '[name].js' (entry에서 app으로 설정했으니까 윗줄과 같다)
        path: path.join(__dirname, 'dist'),
    },
};