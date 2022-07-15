
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
let directorsArray = []
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director)
    return(directorsArray)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray == ''){
        return 0;
    }
    
    const numOfmoviesDirector = moviesArray.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'))

    let spielbergMovies = numOfmoviesDirector.length;
    
    return spielbergMovies   
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray == ''){
        return 0;
    }
    let sumScores = moviesArray.reduce((curr, next) => curr + next)
    let average = sumScores / moviesArray.length;
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaSum = 0
let dramaAverage = 0
function dramaMoviesScore(moviesArray) {
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray.genre = "Drama") { 
            dramaSum += moviesArray.score([i]);
        }
        dramaAverage = dramaSum / moviesArray.length
    }
    return dramaAverage
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
