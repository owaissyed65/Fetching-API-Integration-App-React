import React, { useContext } from 'react'
import Context from '../Context/Context';
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = () => {
    const context = useContext(Context);
    const { articles, results, load, loadingMap, fetchMoreData } = context
    return (
        <>
            <h1 className='container d-flex justify-content-center my-5'>News Giraffe top Headline</h1>

            {load && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== results}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row my-3">

                        {loadingMap && articles.map((content) => {
                            return <div className="col-md-3 my-3" key={content.url}>
                                <NewsItem title={content.title} img={content.urlToImage} description={content.description} url={content.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}

export default News
