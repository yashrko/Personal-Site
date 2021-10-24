import React from 'react'
import { useRef, useEffect } from 'react'
export default function MedStar({ pos }) {
  const medstarref = useRef(null)
  useEffect(() => {
    medstarref.current.style.top = pos[1] + '%'
    medstarref.current.style.left = pos[2] + '%'
  })
  return <div className='medStar' ref={medstarref}></div>
}
