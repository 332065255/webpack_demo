var config =require('./webpack.config');
const webpack=require('webpack');

const server=require('webpack-dev-server');

// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
const compiler=webpack(config);
var se=new server(compiler)
se.listen(8080);