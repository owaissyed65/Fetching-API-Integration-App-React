import React, { useContext } from 'react'
import Context from '../Context/Context';
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = () => {
    const context = useContext(Context);
    const { articles, results, load, loadingMap, fetchMoreData, text, country } = context
    const changeCountry = (country) => {
        if (typeof (country) === 'string') {
            if (country === 'in') {
                country = 'india'
                let newCountry = country.toUpperCase()
                document.title = `${newCountry}-Top headlines`
                return newCountry

            }
            if (country === 'us') {
                country = 'usa'
                let newCountry = country.toUpperCase()
                document.title = `${newCountry}-Top headlines`
                return newCountry
            }
            if (country === 'sa') {
                country = 'south-africa'
                let newCountry = country.toUpperCase()
                document.title = `${newCountry}-Top headlines`
                return newCountry
            }
            if (country === 'jp') {
                country = 'japan'
                let newCountry = country.toUpperCase()
                document.title = `${newCountry}-Top headlines`
                return newCountry
            }
        }
        else {
            return country
        }
    }
    return (
        <>
            <div  >
                <h1 className='container d-flex justify-content-center mt-5 heading my-3' > <strong>{changeCountry(country)}</strong>&nbsp;News top Headline</h1>
                {load && <Spinner />}
                <div className="container">
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={() => fetchMoreData(country)}
                        hasMore={articles.length !== results}
                        loader={<Spinner />}
                    >
                        <div className='container'>
                            <div className="row my-3">
                                {loadingMap && articles.filter((content) => {
                                    if (text === '') {
                                        return content
                                    }
                                    else if (content.title.toLowerCase().includes(text.toLowerCase())) {

                                        return { content }
                                    }

                                    return ''
                                }).map((content) => {
                                    return <div className="col-md-3 my-3" key={content.url}>
                                        <NewsItem title={content.title} img={content.urlToImage} description={content.description} url={content.url} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}

export default News
