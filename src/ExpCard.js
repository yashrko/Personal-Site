import React, { useContext } from 'react'
import MyContext from './MyContext'

export default function ExpCard({
  company,
  time,
  timein,
  content,
  url,
  urlimg,
}) {
  const { darkmode } = useContext(MyContext)
  return (
    <div className='col-sm-4'>
      <div className={'card ' + (darkmode ? 'bg-dark' : 'light-mode')}>
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
          <p
            className={'card-text ' + (!darkmode ? 'text-dark' : 'text-light')}
          >
            {content}
          </p>
          <a href={url} className='btn btn-primary'>
            Site
          </a>
        </div>
      </div>
    </div>
  )
}
