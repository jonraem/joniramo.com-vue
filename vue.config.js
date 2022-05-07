const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Joni Rämö";
      return args;
    });
  },
  configureWebpack: {
    plugins: [new BundleAnalyzer({ analyzerMode: "static" })],
  },
};
