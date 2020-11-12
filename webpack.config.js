"use strict";

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js/bundle',
    },
    watch: false,

    devtool: "source-map",

    module:{}
};