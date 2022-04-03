import React from 'react';
import Markdown from 'markdown-to-jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const OpenChangelog = ({ version, content, setShowChangelogModal, item, id }) => {

  const deleteChangelog = () => {
    axios.post('http://localhost:5483/delete-changelog', {id: id}).then(() => {
      console.log('Delete doc succesfully!');
    })
  }

  return (
    <div ref={item} className='absolute top-20 text-white bg-gray-900 w-10/12 left-1/2 -translate-x-1/2 h-4/5 py-6 overflow-auto px-10 rounded-xl shadow-lg'>
      <div className='flex justify-between items-center border-b-2 border-gray-700 pb-3'>
        <h1 className='text-2xl font-bold uppercase text-teal-400'>{version}</h1>
        <div className="text-rose-400" onClick={() => setShowChangelogModal(false)}><FontAwesomeIcon icon={faClose} size='xl' /></div>
      </div>
      <div className="md mt-5">
        <Markdown>{content}</Markdown>
      </div>
      <button onClick={deleteChangelog} className='text-rose-400 absolute bottom-6 right-8'><FontAwesomeIcon icon={faTrashCan} size='lg' /></button>
    </div>
  )
}

export default OpenChangelog;