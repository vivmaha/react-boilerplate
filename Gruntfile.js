module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {            
            dist: {
                src: ["./src/main.tsx"],
                dest: "dist/bundle.js",
                options: {
                    browserifyOptions: {
                        plugin: [
                            ['tsify', {extensions: 'jsx'}]
                        ]
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './dist',
                    livereload: true,
                    hostname: 'localhost',
                },
            },
        },
        clean: {
            dist: {
                src: ["dist/"]
            }
        },
        copy: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**',
                        '!**.scss',
                        '!**.tsx',
                    ],
                    dest: 'dist/'
                }]
            },
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                ]
            },
            dist: {
                src: 'dist/index.css'
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/index.css': 'src/index.scss',
                },
            },
        },
        sasslint: {
            target: ['src/**/*.scss'],
        },
        watch: {
            rebuild: {
                files: [
                    'src/**/*.*',
                ],
                tasks: [
                    'build',
                ],
                options: {
                    livereload: {
                        host: '0.0.0.0',
                        port: 35729
                    },
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.registerTask('build', [
        'clean',
        'copy',
        'browserify',
        'sass',
        'postcss',
    ])

    grunt.registerTask('lint', [
        'sasslint',
    ])

    grunt.registerTask('serve', [
        'build',
        'connect',
        'watch',        
    ])
};