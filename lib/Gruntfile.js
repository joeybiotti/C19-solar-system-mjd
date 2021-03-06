module.exports = function(grunt){

    grunt.initConfig({
        browserify: {
            '../dist/app.js': ['../javascripts/*.js']
        },
        jshint: {
            files: ['../javascripts/**/*.js'], //location of javascript files
            options: {
                predef: ["document", "console", "$"], //allows for predefined things not found in js
                esnext: true, //allows for ES6
                globalstrict: true,
                globals: { "$": true }, //name value pairs, allows to define global vars used in many files.
                browserify: true
            }
        },
        sass: { //setup sass compilation
            dist: {
                files: {
                    '../css/main.css': '../sass/main.scss'
                }
            }
        },
        watch: { //automatically watch for changes
            javascripts: {
                files: ['../javascripts/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            },
                browserify: {
                    files: ['../javascripts/*.js'],
                    tasks: ['browserify']
                }
            }
        }
    );

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify',
        'watch'
    ]);
};

