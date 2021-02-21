import { useState, useEffect } from "react";
import styles from "../styles/Content.module.css"

export default function NewsData() {
    const [newsData, setNewsData] = useState([]) // by default there is no data
    const [sortedNews, setSortedNews] = useState([])    

    useEffect(() => {
      fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "7ddd63c600mshbaf6d24f3e0f5a5p16f3a8jsn964e032214df",
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "content-type": "application/json"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    })

    // const endpointUrl = "https://newsapi.org/v2/everything?language=en&q=cambodia&apiKey=2bd760caf2fa425b8aab168bcaaea952";
  
    // useEffect(() => {
    //   fetch(endpointUrl)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((body) => {        
    //     setNewsData(newsData.push(body["articles"]));
    //   })
    //   .then(() => {
    //     let i;
    //     for(i=0;i<20;i++) {
    //       if (newsData[0][i]["description"].includes("coronavirus") || newsData[0][i]["description"].includes("covid-19")) {
    //         setSortedNews(sortedNews.push(newsData[0][i]));
    //       } 
    //       else if (newsData[0][i]["description"].includes("covid") || newsData[0][i]["description"].includes("COVID")) {
    //         setSortedNews(sortedNews.push(newsData[0][i]));
    //       }
    //     }
    //   }
    //   )
    //   .then(() => {
    //     console.log(sortedNews)
    //     let z;
    //     for(z=0;z<sortedNews.length;z++) {
    //       var node = document.createElement("DIV")
    //       var titleNode = document.createElement("H1")
    //       titleNode.innerHTML = sortedNews[z]["title"]
    //       var linkNode = document.createElement("A")
    //       linkNode.href = sortedNews[z]["url"]
    //       linkNode.appendChild(titleNode)
    //       var descriptionNode = document.createElement("P")
    //       descriptionNode.innerHTML = sortedNews[z]["description"]          
    //       var imgNode = document.createElement("IMG")
    //       imgNode.src = sortedNews[z]["urlToImage"]
    //       node.appendChild(imgNode)
    //       node.appendChild(linkNode)
    //       node.appendChild(descriptionNode)
    //       document.getElementById("newsGrid").appendChild(node)
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }, [])

    return (
      <>
        <div className={styles.newsContainer}>         
           {newsData ? <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}} id="news">News</h1> : null}
           <div id="newsGrid" className={styles.newsGrid}>            
           </div>
        </div>         
      </>
    )
}