import React from 'react'

const Changelog = ({ data }) => {
  return (
    <div className='bg-gray-700 flex justify-between px-10 py-4 text-white'>
      <p className='uppercase'>{data.version}</p>
      <button className='font-inter text-emerald-400'>Öffnen</button>
    </div>
  )
}

export default Changelog