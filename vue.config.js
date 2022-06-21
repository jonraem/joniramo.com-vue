const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const Webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Joni Rämö";
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzer({ analyzerMode: "disabled", analyzerPort: 3030 }),
      new Webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      fallback: {
        fs: false,
        os: false,
        path: require.resolve("path-browserify"),
      },
    },
  },
};
