import React from 'react'
import { useRef, useEffect } from 'react'
export default function BigStar({ pos }) {
  const bigstarref = useRef(null)
  useEffect(() => {
    bigstarref.current.style.top = pos[1] + '%'
    bigstarref.current.style.left = pos[2] + '%'
  })
  return <div className='bigStar' ref={bigstarref}></div>
}
