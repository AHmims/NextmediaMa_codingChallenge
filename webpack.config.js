const path = require('path');

module.exports = {
<<<<<<< HEAD
   mode: 'production',
   entry: './src/js/script.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
         {
            test: /\.css$/,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
         },
      ],
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      watchContentBase: true,
   }
=======
    mode: 'production',
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
>>>>>>> f5460d7d55fd3515ed83637519f6d8ae679ebda7
};