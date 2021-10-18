
let mynews = JSON.parse(localStorage.getItem("News"))
let clicked = mynews[mynews.length-1]


let latest_div = document.getElementById("latest-news")



let title = document.createElement("h3")
title.textContent = clicked.title

let img = document.createElement("img")
img.src = clicked.urlToImage

let des = document.createElement("p")
des.textContent = clicked.description

let content = document.createElement("p")
content.textContent = clicked.content

latest_div.append(title,img,des,content)

localStorage.setItem("News" , JSON.stringify(mynews))