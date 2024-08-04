import React from 'react'

export default function TestimonialItem( { txt , name , job } ) {
  return (
    <div className='flex flex-col gap-10'>

      <div className='clipPath border border-[var(--primary)] p-[30px] lg:py-12 lg:px-[52px] rounded-[45px]'>
        <p className='text-white'>{txt}</p>
      </div>

      <div className='ml-[52px]'>
        <h4 className='text-[var(--primary)]'>{name}</h4>
        <p className='text-white'>{job}</p>
      </div>
    </div>
  )
}
