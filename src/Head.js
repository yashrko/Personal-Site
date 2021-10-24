import React, { useRef } from 'react'
import Intro from './Intro'
import IntroPara from './IntroPara'
import { useEffect, useState } from 'react'
import hackimg from './images/hackmasksmall.jpg'
import { Link } from 'react-router-dom'

export default function Head() {
  const eye1 = useRef(null)
  const eye2 = useRef(null)
  const [isIntro, setisIntro] = useState(true)
  const [reset, setreset] = useState(false)
  useEffect(() => {
    const introinterval = setTimeout(() => {
      setisIntro((val) => !val)
      //setreset(false)
    }, 1000)
    return () => {
      clearInterval(introinterval)
    }
  }, [reset])
  useEffect(() => {
    const resetinterval = setTimeout(() => {
      setreset(!reset)
    }, 3000)
    return () => {
      clearTimeout(resetinterval)
    }
  }, [reset])
  const handleMouseMove = (e) => {
    const eye1rect = eye1.current.getBoundingClientRect()
    const eye2rect = eye2.current.getBoundingClientRect()
    const totaly = e.pageY - eye1rect.y
    const totalx = e.pageX - eye1rect.x
    const totaly2 = e.pageY - eye2rect.y
    const totalx2 = e.pageX - eye2rect.x
    const slope = totaly / totalx
    const slope2 = totaly2 / totalx2
    const y = Math.abs(1 * slope)
    const yper = y / (y + 1)
    const xper = 1 - yper
    const y2 = Math.abs(1 * slope2)
    const yper2 = y2 / (y2 + 1)
    const xper2 = 1 - yper2
    if (totalx > 0) {
      if (totaly > 0) {
        eye1.current.style.left = 35 + 4 * parseFloat(xper) + '%'
        eye1.current.style.top = 40 + 1.2 * parseFloat(yper) + '%'
      } else {
        eye1.current.style.left = 35 + 4 * parseFloat(xper) + '%'
        eye1.current.style.top = 40 - 1.2 * parseFloat(yper) + '%'
      }
    } else {
      if (totaly > 0) {
        eye1.current.style.left = 35 - 4 * parseFloat(xper) + '%'
        eye1.current.style.top = 40 + 1.2 * parseFloat(yper) + '%'
      } else {
        eye1.current.style.left = 35 - 4 * parseFloat(xper) + '%'
        eye1.current.style.top = 40 - 1.2 * parseFloat(yper) + '%'
      }
    }
    if (totalx2 > 0) {
      if (totaly2 > 0) {
        eye2.current.style.left = 60 + 4 * parseFloat(xper2) + '%'
        eye2.current.style.top = 40 + 1.2 * parseFloat(yper2) + '%'
      } else {
        eye2.current.style.left = 60 + 4 * parseFloat(xper2) + '%'
        eye2.current.style.top = 40 - 1.2 * parseFloat(yper2) + '%'
      }
    } else {
      if (totaly2 > 0) {
        eye2.current.style.left = 60 - 4 * parseFloat(xper2) + '%'
        eye2.current.style.top = 40 + 1.2 * parseFloat(yper2) + '%'
      } else {
        eye2.current.style.left = 60 - 4 * parseFloat(xper2) + '%'
        eye2.current.style.top = 40 - 1.2 * parseFloat(yper2) + '%'
      }
    }
  }
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })
  return (
    <>
      <div className='blur'>
        <h1>Loading</h1>
        <h2 className='hackwatch'>I'm watching everything</h2>
      </div>
      <div className='navbar-outer'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    aria-current='page'
                    to='/Personal-Site'
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/skills'>
                    Skills
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='Other'>
                    Others
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='container-fluid ps-0 pe-0 headOuter'>
        <div className='row intro-row'>
          <div className='introOuter pe-0'>
            <div className='intro'>
              <h2 className='ms-5 camelcase colWhite'>
                {isIntro ? (
                  <span className='blink'>|</span>
                ) : (
                  <Intro
                    reset={setreset}
                    introString='Hello, my name is yash'
                  />
                )}
              </h2>
              <h6 className='ms-5 mt-5 colPara'>
                <IntroPara />
              </h6>
            </div>
          </div>
          <div className='imgintro ps-0 pe-0'>
            <div className='imgouter hackload'>
              <img src={hackimg} alt={'alternate'} height='100%' width='100%' />
              <div className='eye1' ref={eye1}></div>
              <div className='eye2' ref={eye2}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
