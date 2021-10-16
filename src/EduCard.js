import React from 'react'

export default function EduCard({
  college,
  course,
  branch,
  year,
  percent,
  active,
  urlimg,
  index,
}) {
  console.log(active)
  return (
    <div className={active ? 'carousel-item active' : 'carousel-item'}>
      <img
        src={urlimg}
        className='d-block w-100 dim'
        height='600vw'
        alt={college}
      />
      <div class='carousel-caption d-md-block'>
        <h4>{course + '  ' + percent} </h4>
        <h5>{branch + ' ' + year}</h5>
        <p>{college}</p>
      </div>
    </div>
  )
}
