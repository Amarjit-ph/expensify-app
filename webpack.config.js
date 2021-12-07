const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ENVIRONMENT VARIABLES

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: 'Firebase.env' });

} else if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: 'Production.env' });
}

//MODULE EXPORTS

module.exports = (env) => {
    console.log('Build Environment :', env);
    const isProduction = (env === 'production');
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },// CSS-LOADER
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        } // SASS_LOADER
                    ] // USE : USE
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGE_ID': JSON.stringify(process.env.FIREBASE_MESSAGE_ID),
                'process.env.FIREBASE_APP_ID=': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASURE_ID': JSON.stringify(process.env.FIREBASE_MEASURE_ID),
                'process.env.VERIFY': JSON.stringify(process.env.VERIFY)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
}