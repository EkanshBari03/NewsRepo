import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 ">
                <div className="card mx-4 my-4" style={{boxShadow :'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',height:'600px',overflow:'hidden'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : imageUrl} className="card-img-top" alt="..." 
                     style={{
                        height: 'auto',
                        maxHeight: "410px",
                        width: 'auto',
                        maxWidth: "410px"
                     }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <p className="card-text" >{description}</p>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem