import React from 'react'
import expData from './expData'
import ExpCard from './ExpCard'
import EduCardBtn from './EduCardBtn'
import EduCard from './EduCard'
import eduData from './eduData'
import { useState } from 'react'
import hackmask from './images/topkey.jpg'

export default function Middle() {
  const [toplink, settoplink] = useState(true)
  const [active, setactive] = useState(1)
  const handleslide = (val) => {
    if (val === 0) return eduData.length
    if (val > eduData.length) return 1
    else return val
  }
  return (
    <div className='row mt-5'>
      <div className='col-sm-3 flex-column flex-shrink-0 p-3 bg-light sidebar'>
        <span className='d-flex align-items-center mb-3 mb-md-4 me-md-auto link-dark text-decoration-none'>
          <span className='fs-4 sidebarspan'>Sidebar</span>
        </span>
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <button
              className={toplink ? 'nav-link active w-100' : 'nav-link w-100'}
              onClick={() => {
                settoplink(true)
              }}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={!toplink ? 'nav-link active w-100' : 'nav-link w-100'}
              onClick={() => {
                settoplink(false)
              }}
            >
              Education
            </button>
          </li>
        </ul>
      </div>

      {toplink ? (
        <div className='col-sm-8 flex-shrink-1 ms-5'>
          <div className='row'>
            {expData.map((data) => (
              <ExpCard {...data} key={data.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className='col-sm-8 flex-shrink-1 ms-5'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-indicators'>
              {eduData.map((edata, index) => {
                if (active === index + 1)
                  return (
                    <EduCardBtn
                      key={edata.id}
                      active={true}
                      index={index + 1}
                      setactive={setactive}
                    />
                  )
                else
                  return (
                    <EduCardBtn
                      key={edata.id}
                      active={false}
                      index={index + 1}
                      setactive={setactive}
                    />
                  )
              })}
            </div>
            <div className='carousel-inner'>
              {eduData.map((edata, index) => {
                if (active === index + 1)
                  return (
                    <EduCard
                      {...edata}
                      key={edata.id}
                      active={true}
                      index={index + 1}
                    />
                  )
                else
                  return (
                    <EduCard
                      {...edata}
                      key={edata.id}
                      active={false}
                      index={index + 1}
                    />
                  )
              })}
            </div>

            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'
              onClick={() => {
                setactive(handleslide(active - 1))
              }}
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'
              onClick={() => {
                setactive(handleslide(active + 1))
              }}
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
