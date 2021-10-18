    // 4a45f3feccd74dc88cc629048a80919f

    let news_div = document.getElementById("latest-news")
    
    async function Showlatest() {
        try {
        let res = await fetch("http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4a45f3feccd74dc88cc629048a80919f")
        let data = await res.json()
        let latestnews = data.articles
        appendlatestnews(latestnews)
        } catch(e) {
            console.log(e)
        }
    }
    Showlatest()

   function appendlatestnews(latests) {
  //  console.log(data)
    latests.forEach((news) => {

        let div = document.createElement("div")
        div.onclick = function() {
            shownews(news)
        }

        let title = document.createElement("h3")

        let des = document.createElement("p")

        let latestimg = document.createElement("img")
        latestimg.src = news.urlToImage

        title.textContent = news.title
        des.textContent = news.description
        
        div.append(title,des,latestimg)
        news_div.append(div)

    })

   }

   if(localStorage.getItem("News") === null) {
       localStorage.setItem("News" , JSON.stringify([]))
   }

   function shownews (news) {
       let mynews = JSON.parse(localStorage.getItem("News"))

       mynews.push(news) 

       localStorage.setItem("News" , JSON.stringify(mynews))

       setTimeout(() => {
           window.location.href = "news.html"
       },1500)
   }

   if(localStorage.getItem("search_news") === null) {
       localStorage.setItem("search_news" , JSON.stringify([]))
   }

   function Searchnews () {

    let search = document.getElementById("search").value
     let arr =  JSON.parse(localStorage.getItem("search_news"))

     if(search !== "") {
     arr.push(search)
     }

     localStorage.setItem("search_news" , JSON.stringify(arr))

     setTimeout(() => {
        window.location.href = "search.html"
     },1500)

   }