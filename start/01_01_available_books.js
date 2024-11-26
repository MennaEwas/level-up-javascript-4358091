// Write your code here
class Book{
    constructor(title, author, isbn, qty){
        this.title = title
        this.author = author
        this.isbn = isbn
        this.qty = qty
    }
    availability(){
        if(this.qty===0){
            return `${this.title} is out of stock`
        }
        else if(this.qty<10){
        return `${this.title} is low stock`
        }
        return `${this.title} is in-stock`
    }
    sell(numberofcopies=1){
        this.qty = this.qty - numberofcopies
    }
    restock(numberofcopies=5){
        this.qty = this.qty + numberofcopies
    }

}

const book1 = new Book("Hunger Games", "SC", 9742, 18)

console.log(book1.availability())

console.log(book1.qty)
book1.sell(2)
console.log(book1.qty)

book1.restock()
console.log(book1.qty)