import React, { useContext } from 'react'
import Context from '../Context/Context';
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = () => {
    const context = useContext(Context);
    const { articles, results, loadingMap, fetchMoreData, text, country, category } = context
    const changeCountry = (country) => {
        if (typeof (country) === 'string') {
            if (country === 'nz') {
                country = 'newzealand'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            if (country === 'in') {
                country = 'India'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            if (country === 'us') {
                country = 'usa'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            if (country === 'sa') {
                country = 'south africa'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            if (country === 'jp') {
                country = 'japan'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            if (country === 'nz') {
                country = 'newzealand'
                let newCountry = country.toUpperCase()
                let newCategory = category.charAt(0).toUpperCase() + category.slice(1)
                document.title = `${newCountry}-${newCategory} Top headlines`

                return newCountry
            }
            
        }
        else {
            return country
        }
    }
    const capitalizeLetter = (category) => {
        if (typeof (category) === 'string') {
            let newWord = category.charAt(0).toUpperCase() + category.slice(1)
            return newWord;
        }
        else {
            return category
        }
    }

    return (
        <>
            <div >
                <h1 className='container d-flex justify-content-center mt-5 heading my-3'>{changeCountry(country)?changeCountry(country):'USA'} </h1>
                <h1 className='container d-flex justify-content-center mt-3 heading my-3 'style={{width:'100vw'}} >{capitalizeLetter(category)?capitalizeLetter(category):'General'} - Top Headline</h1>
                {/* {load && <Spinner />} */}
                <div className="container">
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={() => fetchMoreData(country, category)}
                        hasMore={results !== articles.length }
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
                                        <NewsItem title={content.title} img={content.urlToImage} description={content.description} url={content.url} publishedAt={content.publishedAt} content={content.content} name={content.source} author={content.author} />
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
