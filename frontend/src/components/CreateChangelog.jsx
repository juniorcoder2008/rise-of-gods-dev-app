import React, { useRef } from 'react';
import axios from 'axios';

const CreateChangelog = () => {

  const version = useRef();
  const content = useRef();
  const date = Date.now();

  const createNewChangelog = async e => {
    e.preventDefault();

    axios.post('https://rog-dev-app.herokuapp.com//create-changelog', {date: date, version: version.current.value, content: content.current.value}).then(() => {
      console.log('test');
      version.current.value = '';
      content.current.value = '';
    })
  }

  return (
    <div className='ml-10 mt-10'>
      <h1 className='text-xl font-bold mb-4'>Neuen Changelog erstellen</h1>
      <form className='flex flex-col gap-3' onSubmit={createNewChangelog}>
        <input type="text" className='input' placeholder='Version' ref={version} />
        <textarea className='text-area resize-none' placeholder='Changelogs' ref={content}></textarea>
        <button className='btn-success'>Erstellen</button>
      </form>
    </div>
  )
}

export default CreateChangelog;