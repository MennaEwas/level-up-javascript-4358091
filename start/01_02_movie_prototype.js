// Write your code here
function movie(title,rating,year,producer){
    this.title = title;
    this.rating = rating;
    this.year = year;
    this.producer = producer;
}
movie.prototype.getoverview = function(){
return `${this.title} is the name of the movie\n it has a rating ${this.rating}\n it was release in ${this.year}\n ${this.producer} is the producer`

}

let a = new movie("titanic",9.7,1998,"Mohamed")
console.log(a.getoverview())

function overview(){
return `${this.title} is the name of the movie\n it has a rating ${this.rating}\n it was release in ${this.year}\n ${this.producer} is the producer`
}
console.log(overview())

class Movieclass{
    constructor (title,rating,year,producer){
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.producer = producer;
}
getoverviewclass(){
    return `${this.title} is the name of the movie\n it has a rating ${this.rating}\n it was release in ${this.year}\n ${this.producer} is the producer`
}

}

let movieclass = new Movieclass("titanic",9.7,1998,"Mohamed")

console.log(movieclass.getoverviewclass())