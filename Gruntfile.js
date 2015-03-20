module.exports = function(grunt) {

  grunt.initConfig({

    react: {
      files: {
        expand: true,
        cwd: 'react',
        src: ['**/*.jsx'],
        dest: 'build/react',
        ext: '.js'
      }
    },

    browserify: {
      app: {
        src: 'main.js',
        dest: 'public/js/app.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['react', 'browserify']);
};
