const path = require('path');

const isModule = true;

let filename = 'index.js';
let libraryTarget = 'umd';

if (isModule) {
  // 模块化
} else {
  // 浏览器环境
  filename = 'rise-h5-sdk.js';
  libraryTarget = 'window';
}

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    libraryTarget
  }
};