
module.exports = {
  
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules[1].oneOf[1] = {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
          },
        },
      }
      /*
      webpackConfig.module.rules.push(
        {
          test: /\.(jpe?g|png|webp)$/i,
          use: {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
            },
          },
        }
      );
      */
      //console.log(webpackConfig.module.rules[1].oneOf);
      //debugger;
     // throw new Error('error');
      return webpackConfig;
    }
  }
}