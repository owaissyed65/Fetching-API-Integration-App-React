import React, { useState, useEffect } from 'react'
import Context from './Context'

const State = (props) => {
  const apikeys = 'cd1090a10515434cb109acbd8a415dde'
  const pageSize = 16
  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(0);
  const [pageUpdate, setpageUpdate] = useState(1);
  const [loadingMap, setloadingMap] = useState(true);
  const [text, setText] = useState('');
  const [country, setCountry] = useState();
  const [category, setCategory] = useState();
  const [progress, setProgress] = useState(0)
  // for top loading bar
  const bar = (loading) => {
    setProgress(loading)
  }
  // All arrown key functions
  const fetchData = async () => {
    bar(0)
    let url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikeys}&page=${pageUpdate}&pagesize=${pageSize}`;
    bar(30)
    setloadingMap(false)

    bar(50)
    let data = await fetch(url);
    let parseData = await data.json();
    bar(80)

    setloadingMap(true)
    setArticles(parseData.articles)
    setResults(parseData.totalResults)
    bar(100)

  }
  // Use Effect Hooks
  useEffect(() => {
    fetchData()
    // newFetchData()
    // eslint-disable-next-line
  }, []);
  // these functions are for clicking in button
  const newFetchData = async (exCountry, excategory = 'general') => {
    bar(0)
    setCountry(exCountry)
    setCategory(excategory)
    if (pageUpdate > 1) {
      setpageUpdate(1)
    }
    if (articles.length > 1 && pageUpdate > 1) {
      articles.length = 0
    }
    let url = ` https://newsapi.org/v2/top-headlines?country=${exCountry}&apiKey=${apikeys}&page=1&pagesize=${pageSize}&category=${excategory}`;
    console.log("new"+url)
    bar(30)
    setloadingMap(false)
    bar(50)
    let data = await fetch(url);
    let parseData = await data.json();
    bar(70)
    setloadingMap(true)
    setArticles(parseData.articles)
    bar(90)
    setResults(parseData.totalResults)
    bar(100)
  }
  const fetchMoreData = async (exCountry = 'us', excategory) => {

    let url = ` https://newsapi.org/v2/top-headlines?country=${exCountry}&apiKey=${apikeys}&page=${pageUpdate + 1}&pagesize=${pageSize}&category=${excategory ? excategory : 'general'}`;
    setpageUpdate(pageUpdate + 1)
    console.log("old" +url)
    if (articles.length === 0) {
      articles.length = 16
    }
    let data = await fetch(url);
    let parsedData = await data.json()
    setloadingMap(true)
    setArticles(articles.concat(parsedData.articles))
    setResults(parsedData.totalResults)
  };
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <Context.Provider value={{ articles, results, loadingMap, fetchMoreData, text, fetchData, handleOnChange, newFetchData, country, pageUpdate, setpageUpdate, category, progress }}>
      {props.children}
    </Context.Provider>
  )
}

export default State
