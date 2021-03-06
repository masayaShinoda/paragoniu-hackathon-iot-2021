import { useState, useEffect } from "react";
import styles from "../styles/Content.module.css"

export default function CovidData() {
    
    const [countryData, setCountryData] = useState((countryData) => {return false}); // by default there is no data
    // Endpoint 
    const endpointUrl = "https://covid-19-data.p.rapidapi.com/country/code?code=kh";    
    // RapidAPI host
    const rapidApiHost = "covid-19-data.p.rapidapi.com";    
    // YOUR RapidAPI key
    const rapidApiKey = "522fadb7e0mshcc78c11a5b0011fp1084a1jsnfbd23d4c88d9";
    
    const options = {
      headers: {
        "x-rapidapi-host": rapidApiHost,
        "x-rapidapi-key": rapidApiKey,
      },
    };
    
    useEffect(() => {
      fetch(endpointUrl, options)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        console.log(body);
        setCountryData(body[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])

    return (
        <>
            <div className={styles.contentContainer}>
            {countryData ? <h1 style={{fontSize: `3.25rem`, margin: `1.1rem auto`, maxWidth: `fit-content`}}>{countryData.country} Covid-19 Data</h1> : null}
            <span>
                <p><a href="https://rapidapi.com/Gramzivi/api/covid-19-data">API</a>, Sources: cdcmoh.gov.kh, Johns Hopkins CSSE, CDC, WHO, etc...</p>
            </span>
            <table className={styles.dataTable}>
                <tr>
                    <th>Comfirmed</th>
                    <th>Recovered</th>
                    <th>Critical</th>
                    <th>Deaths</th>
                </tr>
                <tr>
                    <td>{countryData ? <h1>{countryData.confirmed}</h1> : null}</td>
                    <td>{countryData ? <h1>{countryData.recovered}</h1> : null}</td>
                    <td>{countryData ? <h1>{countryData.critical}</h1> : null}</td>
                    <td>{countryData ? <h1>{countryData.deaths}</h1> : null}</td>
                </tr>
            </table>
            <iframe className={styles.covidMap} src="https://covid19-map.cdcmoh.gov.kh/?display_mode=map" style={{margin:`0 auto`}}></iframe>
            </div>
            <div style={{marginTop: `4.25vh`, alignItems: `center`}}>
                <h1 style={{margin: `0 auto`}}>By province:</h1>
                <iframe id={styles.provincesTable} src="https://covid19-map.cdcmoh.gov.kh/list_views" style={{margin: `0 auto`, width: 380, height: 480, border: 0,}}></iframe>
            </div>
        </>

        
    )
}