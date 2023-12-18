import React from 'react'

const SideNav = () => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:items-start'>
        <button className='hover:scale-100 hover:text-teal-300 hover:font-semibold py-2'>- About</button>
        <button className='hover:scale-100 hover:text-teal-300 py-2 hover:font-semibold '>- Projects</button>
        <button className='hover:scale-100 hover:text-teal-300 py-2 hover:font-semibold '>- Experience</button>
        <button className='hover:scale-100 hover:text-teal-300 py-2 hover:font-semibold '>- Education</button>
        <button className='hover:scale-100 hover:text-teal-300 py-2 hover:font-semibold '>- Affiliations</button>
        <button className='hover:scale-100 hover:text-teal-300 py-2 hover:font-semibold '>- Recommendations</button>
    </div>
  )
}

export default SideNav