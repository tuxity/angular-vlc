'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        html2js: {
            options: {
                module: 'kdarcel.vlc-player.tpl'
            },
            main: {
                src: ['src/VLCPlayer.tpl.html'],
                dest: 'tmp/VLCPlayer.tpl.js'
            },
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! VLCPlayer <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
            },
            jsconcat: {
                src: ['src/*.js', 'tmp/*.js'],
                dest: 'dist/VLCPlayer.js',
            },
            cssconcat: {
                src: ['src/*.css'],
                dest: 'dist/VLCPlayer.css',
            },
        },
        uglify: {
            options: {
                banner: '/*! VLCPlayer <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
            },
            build: {
                src: 'dist/*.js',
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
                    "dist/VLCPlayer.min.css": ["src/*.css"]
                }
            }
        },
    });

grunt.loadNpmTasks('grunt-html2js');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

require('load-grunt-tasks')(grunt);

grunt.registerTask('default', ['html2js', 'concat', 'uglify', 'cssmin']);

};
