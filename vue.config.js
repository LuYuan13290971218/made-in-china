module.exports = {
    publicPath:'./',
    devServer:{
        proxy:{
            '/music':{
                target:'http://localhost:3000/',
                changeOrigin:true,
                pathRewrite:{
                    '^/music':''
                }
            }
        }
        
    }
}