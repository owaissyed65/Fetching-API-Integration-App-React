import React, { useState, useEffect } from 'react'
import Context from './Context'

const State = (props) => {
  const apikeys = '57af6b11642642c9bf714d2db86f8aa3'
  const pageSize = 12

  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(0);
  const [pageUpdate, setpageUpdate] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadingMap, setloadingMap] = useState(true);
  const [text, setText] = useState('');
  // All arrown key functions
  const fetchData = async (country,category) => {
    let url = ` https://newsapi.org/v2/top-headlines?country=${country?country:'us'}&apiKey=${apikeys}&page=${pageUpdate}&pagesize=${pageSize}`;
    console.log(country)
    console.log(url)
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
    let url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikeys}&page=${pageUpdate + 1}&pagesize=${pageSize}`;
    setpageUpdate(pageUpdate + 1)
    // console.log(pageUpdate)
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
    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider value={{ articles, results, load, loadingMap, fetchMoreData, text, fetchData,handleOnChange }}>
      {props.children}
    </Context.Provider>
  )
}

export default State
