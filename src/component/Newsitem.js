import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl} = this.props 
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?  "https://s.yimg.com/ny/api/res/1.2/NFB3Yuzbr0nAlugt_.pE8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xNDEy/https://media.zenfs.com/en/nbc_today_217/79d58b78fb6c725b8af9e1fe8ffc1951":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
      
    )
  }
}
