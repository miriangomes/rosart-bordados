module.exports = {
    content: ['./*.html', './src/**/*.js'], // Certifique-se de incluir todos os arquivos relevantes
    theme: {
      extend: {
        fontFamily: {
          sans: ['Raleway', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        colors: {
          rosart: {
            light: '#889B59',
            DEFAULT: '#7B447B',
            dark: '#4F004F',
          },
        },
      },
    },
    plugins: [],
  };
  