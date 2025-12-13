module.exports = {
        chainWebpack: config => {
            config.module
                .rule('image')
                .test(/\.(png|jpe?g|gif)(\?.*)?$/)
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    disable: process.env.NODE_ENV == 'development' ? true : false
                })
                .end()
        }

    }
