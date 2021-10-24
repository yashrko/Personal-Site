import React from 'react'
import { useEffect, useState } from 'react'

export default function Intro({ reset, introString }) {
  const [introWords, setIntroWords] = useState(0)
  const checkIntroLen = (curlen) => {
    if (curlen >= introString.length) {
      reset((val) => !val)
      return introString.length
    } else return curlen
  }
  useEffect(() => {
    const introtimeout = setTimeout(() => {
      setIntroWords(checkIntroLen(introWords + 1))
    }, 100)
    return () => {
      clearTimeout(introtimeout)
    }
  }, [introWords])
  return (
    <>
      {introWords < introString.length ? (
        <span>{introString.slice(0, introWords)}|</span>
      ) : (
        <div>
          {introString.slice(0, introWords)}
          <span className='blink'>|</span>
        </div>
      )}
    </>
  )
}
