import React from 'react'
import SkillCard from './SkillCard'
import skillData from './SkillData'
import { useState, useEffect } from 'react'
export default function Skill() {
  const [randx, setrandx] = useState(0)
  const [randz, setrandz] = useState(0)
  useEffect(() => {
    const randxtimeout = setTimeout(() => {
      setrandx((val) => {
        const rand = Math.floor(Math.random() * skillData.length)
        if (rand === val) return rand + 1
        else return rand
      })
    }, 2000)
    return () => {
      clearTimeout(randxtimeout)
    }
  }, [randx])
  useEffect(() => {
    const randztimeout = setTimeout(() => {
      setrandz((val) => {
        const rand = Math.floor(Math.random() * skillData.length)
        if (rand === val) return rand + 1
        else return rand
      })
    }, 2000)
    return () => {
      clearTimeout(randztimeout)
    }
  }, [randz])
  return (
    <div
      className='container-fluid mt-3'
      style={{
        background: 'linear-gradient(360deg,  #3743ce, #f4f4f40d)',
      }}
    >
      <div className='row'>
        {skillData.map((skill) => {
          return (
            <SkillCard
              {...skill}
              key={skill.id}
              randxid={randx}
              randzid={randz}
            />
          )
        })}
      </div>
    </div>
  )
}
