var path = require("path");

module.exports = {
  entry: {
    app: ["./static/js/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "static/build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [path.resolve(__dirname, "static/js")],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.js?$/,

        // Options to configure babel with
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
      }

    ]
  },
  devServer: {
    port: 3030,
    hot: true,
    inline: true,
    publicPath: "http://localhost:8080/sandbox-react/static/build/",
    proxy: {
      "*": {
        target: "http://localhost:8080/",
        secure: false
      }
    }
  }
};
