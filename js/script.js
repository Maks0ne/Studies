'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: () => {
    personalMovieDB.count = +prompt('How much films did u see?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How much films did u see?', '');
    }
  },

  rememberMyFilms: () => {
    for (let i = 0; i < 1; i++) {
      const a = prompt('ur last film?', '').trim();
      const b = prompt('how much u rated film?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('so few');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20) {
      console.log('u is ordinary viewer');
    } else if (personalMovieDB.count >= 30) {
      console.log('you are nerd');
    } else {
      console.log('error');
    };
  },

  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ur favorite genres? ${i}`, '')
      if (genre === '' || genre == null) {
        console.log('u idiot, try again ;)');
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ur favorite genres ${i + 1} this is ${item}`);
    })

  },

  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }
  }
};







