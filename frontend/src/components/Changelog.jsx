import React, { useState } from 'react'
import ChangelogModal from './ChangelogModal';
const Changelog = ({ data }) => {

  const [showChangelogModal, setShowChangelogModal] = useState(false);

  return (
    <div>
      <div className='bg-gray-700 flex justify-between px-10 md:mx-10 md:rounded-lg lg:w-2/3 xl:w-5/12 2xl:w-1/3 py-4 text-white'>
        
        <p className='uppercase'>{data.version}</p>
        <button onClick={() => {
          setShowChangelogModal(!showChangelogModal);
        }} className='font-inter text-emerald-400'>Öffnen</button>
        
      </div>
      { showChangelogModal ? <ChangelogModal id={data._id} showChangelogModal={showChangelogModal} setShowChangelogModal={setShowChangelogModal} version={data.version} content={data.content} /> : '' }
    </div>
    
  )
}

export default Changelog