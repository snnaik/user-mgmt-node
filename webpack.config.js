var path = require( 'path' ),
    srcPath = path.resolve( __dirname, 'src' ),
    distPath = path.resolve( __dirname, 'dist' ),
    ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
    extractSass = new ExtractTextPlugin( {
        filename : "css/bundle.css"
    } );

module.exports = {
    entry : [
        srcPath + '/jsx/index.jsx',
        srcPath + '/scss/main.scss'
    ],
    output : {
        path : distPath,
        filename : 'js/bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.scss$/,
                use : extractSass.extract( {
                    use : [
                        {
                            loader : "css-loader"
                        },
                        {
                            loader : "sass-loader",
                            options : {
                                includePaths : [ srcPath + '/scss' ],
                                outputStyle : 'compressed'
                            }
                        }
                    ]
                } )
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        useRelativePath: true
                    }
                }
            }
        ]
    },
    resolve : {
        extensions : [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    plugins : [
        extractSass
    ]
};
