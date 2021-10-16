import React from 'react'
import { useState, useEffect } from 'react'

export default function IntroPara() {
  const [swapPara, setswapPara] = useState(true)
  const [visPara, setvisPara] = useState(true)
  useEffect(() => {
    const paratimeout = setTimeout(() => {
      setswapPara(!swapPara)
      setvisPara(true)
    }, 4000)
    return () => {
      clearTimeout(paratimeout)
    }
  }, [swapPara])
  useEffect(() => {
    const vistimeout = setTimeout(() => {
      setvisPara(!visPara)
    }, 2000)
    return () => {
      clearTimeout(vistimeout)
    }
  }, [visPara])
  return (
    <>
      {swapPara ? (
        <span className={visPara ? 'visSlow' : 'invisSlow'}>
          I am a software engineer / web developer
          <br />
          <br />
          <span> I like to code and build Projects.</span>
        </span>
      ) : (
        <span className={visPara ? 'visSlow' : 'invisSlow'}>
          Thanks for Visiting my Site.
        </span>
      )}
    </>
  )
}
