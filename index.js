const quote = document.querySelector(".quotes");
const button = document.querySelector("button");
const author = document.querySelector(".author");
const addBtn = document.getElementById("addBtn")
const input = document.querySelector("input")
const quoteAuthor = document.querySelector(".quoteAuthor")



const quotesArr = [
    {
        id: 1,
        author: "Albert Einstein",
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
        id: 2,
        author: "Mahatma Gandhi",
        quote: "Learn as if you will live forever, live like you will die tomorrow."
    },
    {
        id: 3,
        author: "Mark Twain",
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."
    },
    {
        id: 4,
        author: "Eleanor Roosevelt",
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out."
    }

]
let currentQuotes = 0;

window.addEventListener("DOMContentLoaded", () => {
    const quotes = quotesArr[currentQuotes]
    author.textContent = quotes.author;
    quote.textContent = quotes.quote;
})

function generate(person) {
    const quotes = quotesArr[person]
    author.textContent = quotes.author;
    quote.textContent = quotes.quote;
}


button.addEventListener("click", () => {
    currentQuotes = Math.floor(Math.random() * quotesArr.length)
    generate(currentQuotes)
})

addBtn.addEventListener("click", () => {
    inputQuote()
    clearInput()
})

let inputQuote = () => {
    if (input.value === "" || quoteAuthor.value === "") {
        alert("please write a quote")
    } else {
        quote.textContent = input.value
        author.textContent = quoteAuthor.value
    }
}

function clearInput() {
    if (input.value != "" && quoteAuthor.value != "") {
        input.value = ""
        quoteAuthor.value = ""
    }
}