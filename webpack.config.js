const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    devServer:{
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
    },
    devtool: 'source-map',
    entry: {
        app: PATHS.app,
    },
    output:{
        path: PATHS.build,
        filename: '[name].js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Grid layout demo',
            template: 'src/index.html'
        }),
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }
       ]
}
};
