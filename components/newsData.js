import { useState, useEffect } from "react";
import styles from "../styles/Content.module.css"

export default function NewsData() {
  //newsapi key from email 2bd760caf2fa425b8aab168bcaaea952

    const [newsData, setNewsData] = useState(newsData => {return null}) // by default there is no data
    // const [sortedNews, setSortedNews] = useState([])    

    const token = "1aba1486566a62c0038c56e3fc5fe6";

    useEffect(() => {
      fetch(
          'https://graphql.datocms.com/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              query: `{ 
                  allArticles {
                    title
                    source
                    link
                    id
                    description
                    image {
                      url
                      alt
                    }
                  }
                }`
            }),
          }
      )
      .then(res => res.json())
      .then((res) => {
          setNewsData(res.data["allArticles"])
          console.log(res.data["allArticles"])
      })
      .catch((error) => {
          console.log(error);
      });
  }, [])

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
      <div className={styles.contentContainer}>

        <div className={styles.newsContainer}>         
           {newsData ? <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}} id="news">News</h1> : null}
           <div id="newsGrid" className={styles.newsGrid}>    
              {newsData &&
                newsData.map(data => {
                  return (
                    <div>
                      {data.image ? 
                        <img src={data.image.url} alt={data.image.alt} />
                        : null
                      }
                      <a href={data.link}>
                        <h1>{data.title}</h1>
                      </a>
                      <p>{data.description}</p>
                      {data.source ? 
                        <p style={{fontSize: `.8rem`, fontStyle: `italic`}}>Source: {data.source}</p>
                      : null}
                    </div>
                  )
                })
              }        
           </div>
        </div>         
      </div>
      </>
    )
}