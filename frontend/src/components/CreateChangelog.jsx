import React from 'react'

const CreateChangelog = () => {
  return (
    <div>
      <form>
        <input type="text" className='input' placeholder='Version' />
        <textarea className='text-area resize-none' placeholder='Changelogs'></textarea>
      </form>
    </div>
  )
}

export default CreateChangelog