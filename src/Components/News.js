import React, { useContext } from 'react'
import Context from '../Context/Context';
import NewsItem from './NewsItem'
import Spinner from './Spinner'
const News = () => {
    const context = useContext(Context);
    const { articles, results, handleNext, handlePrevious, page, load } = context
    return (
        <>
            <h1>News Giraffe top Headline</h1>
            
            <div className='container'>
             
                <div className="row">
                    {
                        articles.map((content) => {
                            return <div className="col-md-3" key={content.url}>
                                <NewsItem title={content.title} img={content.urlToImage} description={content.description} url={content.url} />
                            </div>
                        })}
                </div>
            </div>
            <div className="container">
                <button className="rounded float-end btn btn-primary" onClick={handleNext} disabled={page + 1 > Math.ceil(results / 20)}>Next &rarr;</button>
                <button className="rounded float-start btn btn-primary" onClick={handlePrevious} disabled={page === 1}>&larr; Previous</button>
            </div>
        </>
    )
}

export default News
