const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
    for scripts package.json
    "start": "webpack serve --open --mode development",
    "build": "webpack --config webpack.config.js"
*/

module.exports = {
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        clean: true
      },
    module:{
        rules: [{
            test: /\.js$|jsx/, //Passagem de conversão dos arquivos js e jsx
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
        },{
            test: /\.html$/, //Passagem de arquivo html
            use: [{ loader: "html-loader", }]
        },{
            test: /\.css$/, //Passagem de estilos
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|jpe?g|gif|ico|pdf|svg|ttf|otf)$/i, //Passagem de arquivos
            use: ['file-loader']
        }]
    },
    
    resolve:{
        extensions: ['.js', '.jsx', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}