import React, { useState, useEffect } from 'react'
import Context from './Context'

const State = (props) => {
  const apikeys = '57af6b11642642c9bf714d2db86f8aa3'
  const pageSize = 12

  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState({page:0});
  const [pageUpdate, setpageUpdate] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadingMap, setloadingMap] = useState(true);
  // All arrown key functions
  const fetchData = async () => {
    let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikeys}&page=${1}&pagesize=${pageSize}`;
    // setPage({page:page+1})
    setloadingMap(false)
    setLoad(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setLoad(false)
    setloadingMap(true)
    setArticles(parseData.articles)
    setResults(parseData.totalResults)
  }
  const fetchMoreData = async () => {
    // setPage({page:page+1})
    let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikeys}&page=${pageUpdate + 1}&pagesize=${pageSize}`;
    setpageUpdate(pageUpdate + 1) ;
    console.log(pageUpdate)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setResults(parsedData.totalResults)
  };
  // Use Effect Hooks
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{ articles, results, load, loadingMap, fetchMoreData }}>
      {props.children}
    </Context.Provider>
  )
}

export default State
