var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        a:path.resolve('./src/a.js'),
        b:path.resolve('./src/b.js'),
    },
    output:{
        path:path.resolve('/dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {test:"/\.js$/",exclude:'/node_modules',loader:'babel-loader'}
        ]
    },
    plugins: [new HtmlWebpackPlugin(
            {
                title:'a.html',
                filename:'./view/a.html',
                template:'./view/a.html',
                chunks:['a'],
            }
        ),
        new HtmlWebpackPlugin(
            {
                title:'b.html',
                filename:'./view/b.html',
                template:'./view/b.html',
                chunks:['b'],
            }
        )
    ]
}