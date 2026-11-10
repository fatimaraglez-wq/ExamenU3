const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Limpia la carpeta dist antes de cada build
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usa tu index.html como plantilla
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Procesa archivos .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }] // Soporte para JSX / React
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i, // Procesar archivos .scss y .sass
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Permite importar archivos sin escribir la extensión .jsx
  }
};