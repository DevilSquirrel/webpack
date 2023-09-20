const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  mode:'development',
  entry:{
    index: './src/demo3/index.js',
    another: './src/demo3/another-module.js'
    // index:{
    //   import: './src/demo3/index.js',
    //   dependOn: 'shared'
    // },
    // another: {
    //   import: './src/demo3/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash'
  },
  // devtool:'inline-source-map',
  // devServer:{
  //   static:'./dist'
  // },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Development'
    })
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
    // publicPath:'/',
  },
  /* module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader'],
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/i, 
        type: 'asset/resource',
      }
    ]
  }, */
  optimization:{
    runtimeChunk:'single',
    /* splitChunks:{
      chunks: 'all',
    } */
  }
}
