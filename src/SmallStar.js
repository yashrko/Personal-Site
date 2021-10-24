import React from 'react'
import { useRef, useEffect } from 'react'
export default function SmallStar({ pos }) {
  const smstarref = useRef(null)
  useEffect(() => {
    smstarref.current.style.top = pos[1] + '%'
    smstarref.current.style.left = pos[2] + '%'
  })
  return <div className='smStar' ref={smstarref}></div>
}
