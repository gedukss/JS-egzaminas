/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
        this.wasExpensive(); 
        };
        wasExpensive() {
           return this.budget >= 100000000 ?true :false;
        }
    }
    
    const newMovie = new Movie('Black Adam', 'Jaume Collet-Serra', 230000000);
    const newMovieSecond = new Movie('The Mask', 'Chuck Russell', 18000000);
    console.log(newMovie.wasExpensive());
    console.log(newMovieSecond.wasExpensive());