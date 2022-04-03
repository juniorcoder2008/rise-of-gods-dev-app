import React, { useState } from 'react'
import ChangelogModal from './ChangelogModal';
const Changelog = ({ data }) => {

  const [showChangelogModal, setShowChangelogModal] = useState(false);

  return (
    <div>
      <div className='bg-gray-700 flex justify-between px-10 py-4 text-white'>
        
        <p className='uppercase'>{data.version}</p>
        <button onClick={() => setShowChangelogModal(!showChangelogModal)} className='font-inter text-emerald-400'>Öffnen</button>
        
      </div>
      { showChangelogModal ? <ChangelogModal id={data._id} showChangelogModal={showChangelogModal} setShowChangelogModal={setShowChangelogModal} version={data.version} content={data.content} /> : '' }
    </div>
    
  )
}

export default Changelog