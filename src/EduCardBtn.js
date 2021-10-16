import React from 'react'

export default function EduCardBtn({ index, active, setactive }) {
  return (
    <button
      type='button'
      data-bs-target='#carouselExampleIndicators'
      data-bs-slide-to={String(index - 1)}
      className={active ? 'active' : ''}
      //   aria-current='true'
      aria-label='Slide 1'
      onClick={() => {
        setactive(index)
      }}
    ></button>
  )
}
