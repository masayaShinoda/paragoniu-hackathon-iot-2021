import ReactDOM from 'react-dom';
import styles from "../styles/Content.module.css"

import { useState, useEffect } from "react";

export default function StoreData() {
    const [storeData, setStoreData] = useState(storeData => {return []}) // by default there is no data

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
                allStoreItems {
                    id
                    product
                    image {
                      alt
                      url
                    }
                    price
                  }
                }`
            }),
          }
      )
      .then(res => res.json())
      .then((res) => {
          let i;
          for (i=0;i<res.data["allStoreItems"].length;i++) {
              setStoreData(storeData.push(res.data["allStoreItems"][i]))
              console.log(res.data["allStoreItems"][i])
                var productContainer = document.createElement("DIV")    
                productContainer.className = styles.productContainer          
                var imageNode = document.createElement('IMG')
                imageNode.src = storeData[i].image.url
                var spanNode = document.createElement("SPAN")
                var nameNode = document.createElement('H1')
                nameNode.innerHTML = storeData[i].product
                var priceNode = document.createElement('P')
                priceNode.innerHTML = storeData[i].price
                priceNode.className= styles.price
                spanNode.appendChild(nameNode)
                spanNode.appendChild(priceNode)
                productContainer.appendChild(imageNode)
                productContainer.appendChild(spanNode)
                document.getElementById("products").appendChild(productContainer)
          }               

      })
      .catch((error) => {
          console.log(error);
      });
  }, [])

  return (
      <div className={styles.contentContainer}>
          <div className={styles.productsParent} id="products"></div>
      </div>
  )
}