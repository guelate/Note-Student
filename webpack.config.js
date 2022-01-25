const path = require('path');

module.exports = {
  entry: { // ce qui sera mi en paramètre

    main1:'./src/main.js',
    main2:'./src/tab.js',
  },
  output: { // ce qui sera sorti de la compilation et c'est ce fichier qui sera exécuter dans le ficher html script (src = ./ ...) attention le script (sans type module=.

    filename: '[name].js',
    path: __dirname + '/dist', // on peut changer le nom du dossier ? essayer 


  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};