import React from 'react'

 function StudioCard ({ txt , btn , index , maxHeight} ) {
  return (
    <div style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }} className={`studioCard flex flex-col gap-5 py-[42px] px-[50px] lg:pr-16 lg:py-0 ${index === 0 ? "lg:pl-0" : 'lg:pl-16'} bg-[var(--secondary)] rounded-[45px] lg:rounded-none`}>
        
      <p className='text-white'>{txt}</p>

      <div className='flex items-center gap-[15px]'>
        <span className='text-[var(--primary)]'>{btn}</span>
        <img src="/images/studioIcon.png" />
      </div>
    </div>
  )
}


export default StudioCard
