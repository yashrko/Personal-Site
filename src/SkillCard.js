import React from 'react'
import { useEffect, useRef, useState } from 'react'

export default function SkillCard({ id, urlimg, tech, randxid, randzid }) {
  const flipcardref = useRef(null)

  const getflipclass = () => {
    let retclass = ''
    if (id === randxid) retclass += 'rotatecardX '
    if (id === randzid) retclass += 'rotatecardZ '
    return retclass
  }
  return (
    <div className='col-sm-2 text-center card-container'>
      <div className={'flip-card bgwhite ' + getflipclass()}>
        <div className='front-card'>
          <img width='140' height='140' src={urlimg} />
        </div>
        <div className='back-card bgwhite'>
          <img width='140' height='140' src={urlimg} />
          {/* <h4>{tech}</h4> */}
        </div>
      </div>
      <div className='shadow'></div>
      <h4>{tech}</h4>
    </div>
  )
}
