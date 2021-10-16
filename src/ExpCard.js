import React from 'react'

export default function ExpCard({
  company,
  time,
  timein,
  content,
  url,
  urlimg,
}) {
  return (
    <div className='col-sm-6'>
      <div className='card'>
        <img
          src={urlimg}
          className='card-img-top'
          height='300rem'
          alt={company}
        />
        <div className='card-body'>
          <h5 className='card-title'>{company}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            {time + ' ' + timein}
          </h6>
          <p className='card-text'>{content}</p>
          <a href={url} className='btn btn-primary'>
            Site
          </a>
        </div>
      </div>
    </div>
  )
}
