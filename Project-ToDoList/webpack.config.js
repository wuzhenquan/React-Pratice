// HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`, // ${__dirname} 為 ES6 語法對應到 __dirname  
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // 檔案起始點從 entry 進入，因為是数组所以也可以是多個檔案
  entry: [
    './src/index.js',
  ],
  // output 是放入產生出來的結果的相關參數
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    // loaders 則是放欲使用的 loaders，。
    loaders: [
      // 使用 babel-loader 將所有 .js轉譯成瀏覽器可以閱讀的 JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除了 node_modules
        loader: 'babel-loader',
        query: {
          // preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015.
          //若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [HTMLWebpackPluginConfig],
};
