import React from 'react'

const NewsItem = (props) => {
    const { title, img, description, url, publishedAt, content, name, author } = props
    const date = (date) => {
        if (typeof (date) === 'string') {
            let newDate = new Date(date).toUTCString()
            return newDate;
        }
    }
    const descrip = (description) => {
        if (typeof (description) === 'string' && description.length > 45) {
            let newDescp = description.slice(0, 70);
            return newDescp
        }
    }
    const exTitle = (title) => {
        if (typeof (title) === 'string' && title.length > 35) {
            let newDescp = title.slice(0, 40);
            return newDescp

        }
    }
    return (
        <>
            <div className="card my-3">
                <img src={!img ? 'https://i.ytimg.com/vi/w7xLXjo-b-c/hqdefault.jpg' : img} className="card-img-top" alt="..." style={{ height: '30vh' }} />
                <div className="card-body">
                    <h5 className="card-title">{exTitle(title) ? exTitle(title) : 'Check Out news'}</h5>
                    <p className="card-text">{descrip(description) === null ? descrip(content) : descrip(description)}...</p>
                    <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">{name.name ? name.name : 'Check It Now'}</a>
                    <p className="card-text mt-2"><small style={{color:'grey'}}>{author?author:name.name}:</small> {date(publishedAt)} </p>
                </div>
            </div>
        </>
    )
}

export default NewsItem
