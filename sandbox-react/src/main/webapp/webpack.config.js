var path = require("path");

module.exports = {
  entry: {
    app: ["./static/js/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "static/js/build"),
    publicPath: "/static/build/",
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
