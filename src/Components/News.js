import React, { useContext ,useEffect} from 'react'
import Context from '../Context/Context';
import NewsItem from './NewsItem'

const News = () => {
    const context = useContext(Context);
    const { articles,compnenetDidMounth } = context
    useEffect(() => {
        compnenetDidMounth()
    }, []);
    return (
        <>
            <h1>News Giraffe top Headline</h1>
            <div className='container'>
                <div className="row">
                    {
                        articles.map((content) => {
                            return <div className="col-md-3" key={content.url}>
                            <NewsItem title = {content.title} img={content.urlToImage} description = {content.description} url={content.url}/>
                        </div>
                        })}
                </div>
            </div>
        </>
    )
}

export default News
