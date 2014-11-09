/*
 * grunt-html2js
 * https://github.com/karlgoldstein/grunt-html2js
 *
 * Copyright (c) 2013 Karl Goldstein
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! VLCPlayer <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
            },
            build: {
                src: 'src/*.js',
                dest: 'dist/VLCPlayer.min.js'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                report: 'min',
                banner: '/*! VLCPlayer <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
            },
            build: {
                files: {
                    "dist/VLCPlayer.css": ["src/*.css"]
                }
            }
        },
        html2js: {
            options: {
                base: 'src',
                module: 'kdarcel.vlc-player'
            },
            main: {
                src: ['src/*.tpl.html'],
                dest: 'dist/VLCPlayer.tpl.js'
            },
        },
    });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

// These plugins provide necessary tasks.
require('load-grunt-tasks')(grunt);

// By default, lint and run all tests.
grunt.registerTask('default', ['uglify', 'cssmin', 'html2js']);

};
