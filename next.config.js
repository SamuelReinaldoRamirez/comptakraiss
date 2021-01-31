require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);
const ngrokBack =  JSON.stringify(process.env.REACT_APP_ngrokBack);

/*module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});*/
module.exports = {
  node: {
    fs: "empty"
  },
  webpack: (config) => {
    const env = { API_KEY: apiKey ,
      KEY_ngrokBack: ngrokBack};
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
}
