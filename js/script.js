'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films did u see?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films did u see?', '');
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt('ur last film?', '');
    const b = prompt('how much u rated film?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
};

rememberMyFilms()





function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('so few');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 20) {
    console.log('u is ordinary viewer');
  } else if (personalMovieDB.count >= 30) {
    console.log('you are nerd');
  } else {
    console.log('error');
  };
};

detectPersonalLevel()

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
};

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ur favorite genres? ${i}`, '')
  }
};

writeYourGenres();




