import React, { useState, useEffect } from 'react'
import Context from './Context'

const State = (props) => {
  const apikeys = 'fef29adb63fa4a82a8aa6ddb15911473'
  const pageSize = 12
  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(0);
  const [pageUpdate, setpageUpdate] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadingMap, setloadingMap] = useState(true);
  const [text, setText] = useState('');
  const [country, setCountry] = useState();
  // All arrown key functions
  const fetchData = async () => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikeys}&page=${pageUpdate}&pagesize=${pageSize}`;
    setloadingMap(false)
    setLoad(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setLoad(false)
    setloadingMap(true)
    setArticles(parseData.articles)
    setResults(parseData.totalResults)
  }
  // these functions are for clicking in button
  const newFetchData = async (exCountry) => {
    setCountry(exCountry)
    let url = ` https://newsapi.org/v2/top-headlines?country=${exCountry}&apiKey=${apikeys}&page=${pageUpdate>1?setpageUpdate(1):pageUpdate}&pagesize=${pageSize}`;
    setloadingMap(false)
    setLoad(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setLoad(false)
    setloadingMap(true)
    setArticles(parseData.articles)
    setResults(parseData.totalResults)
    
  }
  const fetchMoreData = async (exCountry='us') => {
    setpageUpdate(pageUpdate + 1)
    let url = ` https://newsapi.org/v2/top-headlines?country=${exCountry}&apiKey=${apikeys}&page=${pageUpdate + 1 }&pagesize=${pageSize}`;
    setLoad(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setLoad(false)
    setloadingMap(true)
    setArticles(articles.concat(parsedData.articles))
    setResults(parsedData.totalResults)
  };
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  // Use Effect Hooks
  useEffect(() => {
    fetchData()
    // newFetchData()
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{ articles, results, load, loadingMap, fetchMoreData, text, fetchData, handleOnChange,newFetchData,country,pageUpdate ,setpageUpdate}}>
      {props.children}
    </Context.Provider>
  )
}

export default State
