module.exports = function(grunt) {
    // Carregar as tarefas necessárias
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
  
    // Configuração das tarefas
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "path/to/output.css": "path/to/input.less" // Caminhos para o arquivo LESS e o CSS resultante
          }
        }
      },
      jshint: {
        files: ['path/to/your/javascript.js'], // Caminho para o arquivo JavaScript a ser analisado
        options: {
          // Opções do JSHint
          esversion: 6
        }
      }
    });
  
    // Tarefa padrão que será executada ao chamar `grunt`
    grunt.registerTask('default', ['less', 'jshint']);
  };
  