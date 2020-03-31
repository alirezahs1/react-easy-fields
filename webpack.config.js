var path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json', '.jsx', '.json' ],
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
    // externals: {
    //     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    // }
}