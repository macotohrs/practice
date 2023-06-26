{
  test: /\.mjs$/,
  include: /node_modules\/@storybook\/testing-library/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"],
  },
},