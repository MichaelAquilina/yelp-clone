const NODE_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
      join = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'modules');
const dist = join(root, 'dist');

const isDev = NODE_ENV == 'development';
const isTest = NODE_ENV == 'test';

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dist,
  clearBeforeBuild: true
});

module.exports = config;
