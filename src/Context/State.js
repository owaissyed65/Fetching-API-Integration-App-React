import React, { useState, useEffect } from 'react'
import Context from './Context'

const State = (props) => {
  const apikeys ='0c6829fb6b0e4ed2aaf1098eaf09ecbb'

  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  // All arrown key functions
  const compnenetDidMount = async () => {
    setLoad(true)
    let url =` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikeys}&page=${page}`
    setLoad(true)
    let data = await fetch(url)
    setLoad(true)
    let parseData = await data.json();
    setArticles(parseData.articles)
    setLoad(false)
    
    setResults(parseData.totalResults)
  }
  const handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikeys}
      &page=${page + 1}`
    setPage(page + 1)
    let data = await fetch(url)
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    console.log(parseData)
    setResults(parseData.totalResults)
  }
  const handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikeys}
      &page=${page - 1}`
    setPage(page - 1)
    let data = await fetch(url)
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    console.log(parseData)
    setResults(parseData.totalResults)
  }

  // Use Effect Hooks
  useEffect(() => {
    compnenetDidMount()
  });
  return (
    <Context.Provider value={{ articles, results, handleNext, handlePrevious, page, load }}>
      {props.children}
    </Context.Provider>
  )
}

export default State
