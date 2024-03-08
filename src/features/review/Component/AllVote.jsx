import React from 'react'
import Voteting from './Voteting'
import Rates from './Rates'

export default function AllVote({value,width}) {
  return (
    <div className='flex gap-4'>
    <Voteting value={value} />
    <div className='w-full py-1'>
      <Rates width={width} />
    </div>
  </div>
  )
}
