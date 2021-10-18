let news_div = document.getElementById("shownews")

async function Resultnews() {

    let get = JSON.parse(localStorage.getItem("search_news"))
    let query = get[get.length - 1]


    let res = await fetch(`http://newsapi.org/v2/everything?q=${query}&apiKey=4a45f3feccd74dc88cc629048a80919f`)
    let data = await res.json()
    append(data.articles)
    localStorage.setItem("search_news" , JSON.stringify(get))
}
Resultnews()
//{title,description,urlToImage,content}
function append(news) {
    news_div.innerHTML = null
    news.forEach(({title,description,urlToImage,content}) => {

        let div = document.createElement("div")

        let til = document.createElement("h3")
        til.textContent = title

        let img = document.createElement("img")
        img.src = urlToImage

        let des = document.createElement("p")
        des.textContent = description

        let con = document.createElement("p")
        con.textContent = content

        div.append(til,img,des,con)
        news_div.append(div)

    })
}