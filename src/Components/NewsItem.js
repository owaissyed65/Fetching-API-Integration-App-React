import React from 'react'

const NewsItem = (props) => {
const {title,img,description,url} = props
    return (
<>        
            <div className="card my-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target='_blank' className="btn btn-primary">Check it Now</a>
                </div>
            </div>
</>
    )
}

export default NewsItem
