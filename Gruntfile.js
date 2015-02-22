module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'site/javascripts/dest/main.min.js.map'
        },
        files: {
          'site/javascripts/dest/main.min.js': [
            'site/javascripts/libs/bower/jquery/dist/jquery.js',
            'site/javascripts/libs/bower/jquery.cookie/jquery.cookie.js',
            'site/javascripts/libs/bower/i18next/i18next.js',
            'site/javascripts/libs/vendor/jquery.cookiecuttr.js',
            'site/javascripts/libs/gumby/gumby.js',
            'site/javascripts/libs/gumby/ui/gumby.retina.js',
            'site/javascripts/libs/gumby/ui/gumby.fixed.js',
            'site/javascripts/libs/gumby/ui/gumby.skiplink.js',
            'site/javascripts/libs/gumby/ui/gumby.toggleswitch.js',
            'site/javascripts/libs/gumby/ui/gumby.checkbox.js',
            'site/javascripts/libs/gumby/ui/gumby.radiobtn.js',
            'site/javascripts/libs/gumby/ui/gumby.tabs.js',
            'site/javascripts/libs/gumby/ui/gumby.navbar.js',
            'site/javascripts/libs/gumby/ui/gumby.fittext.js',
            'site/javascripts/libs/gumby/ui/jquery.validation.js',
            'site/javascripts/libs/gumby/gumby.init.js'
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [ 'uglify' ]);

};
