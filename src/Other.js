import React from 'react'
import BigStar from './BigStar'
import MedStar from './MedStar'
import SmallStar from './SmallStar'
import { useEffect, useState } from 'react'
import moon from './images/moon.png'
import { Link } from 'react-router-dom'
import cloud from './images/cloud.png'
import cloud2 from './images/cloud2.png'
import cloud3 from './images/cloud3.png'
import Intro from './Intro'
import achData from './achieveData'

export default function Other() {
  const [reset, setreset] = useState(true)
  const [resetintro, setresetintro] = useState(false)
  const [idachdata, setidachdata] = useState(0)
  let starslist = []
  let makelist = () => {
    for (let i = 0; i < 80; i++) {
      starslist[i] = [
        i,
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ]
    }
  }
  const getidach = (id) => {
    if (id >= achData.length) return 0
    else return id
  }
  useEffect(() => {
    const resetinterval2 = setTimeout(() => {
      setresetintro((val) => true)
      setidachdata((val) => getidach(val + 1))
    }, 8000)
    return () => {
      clearTimeout(resetinterval2)
    }
  }, [resetintro])
  useEffect(() => {
    const listtimeout = setTimeout(() => {
      makelist()
      setreset(!reset)
    }, 8000)
    return () => {
      clearTimeout(listtimeout)
    }
  }, [reset])
  makelist()
  return (
    <div className='night'>
      <Link className='backbtn btn btn-outline-light' to='/Personal-Site'>
        Back
      </Link>
      <h4 className='achTitle'>Achievements/Courses</h4>
      {starslist.map((star, index) => {
        if (index < starslist.length / 3)
          return <BigStar key={star[0]} pos={star} />
      })}
      {starslist.map((star, index) => {
        if (index > starslist.length / 3 && index < starslist.length / 2)
          return <MedStar key={star[0]} pos={star} />
      })}
      {starslist.map((star, index) => {
        if (index > starslist.length / 2)
          return <SmallStar key={star[0]} pos={star} />
      })}
      <img src={moon} className='moon'></img>
      <div className='moondiv'></div>
      <img src={cloud} className='cloud cl1' />
      <img src={cloud2} className='cloud cl2' />
      <img src={cloud3} className='cloud cl3' />
      <img
        src={cloud2}
        className='cloud cl2'
        style={{ left: '0%', top: '10%' }}
      />
      <img
        src={cloud3}
        className='cloud cl3'
        style={{ left: '0%', top: '50%' }}
      />
      <img
        src={cloud}
        className='cloud cl1'
        style={{ left: '-40%', top: '20%' }}
      />
      <h5 className='achieve'>
        {reset ? (
          <Intro reset={setresetintro} introString={achData[idachdata]} />
        ) : (
          <div />
        )}
      </h5>
    </div>
  )
}
