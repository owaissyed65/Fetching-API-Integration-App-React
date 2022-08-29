import React,{useState} from 'react'
import Context from './Context'
const State = (props) => {
  // const articles = [ ]
    const [articles, setArticles] = useState([]);
    const compnenetDidMounth = async () =>{
      let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=57af6b11642642c9bf714d2db86f8aa3'
      let data = await fetch(url)
      let parseData = await data.json();
      setArticles(parseData.articles)
    }
    
  return (
    <Context.Provider value={{articles,compnenetDidMounth}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
