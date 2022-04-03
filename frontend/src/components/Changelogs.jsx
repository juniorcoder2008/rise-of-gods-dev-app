import React, { useState } from 'react';
import axios from 'axios';
import Changelog from './Changelog';

const Changelogs = () => {

  const [changelogs, setChangelogs] = useState([]);

  axios.get('http://localhost:5483/get-changelogs').then(info => {
    setChangelogs(info.data.reverse());
  });

  return (
    <div className='mt-10'>
      <h1 className='font-bold text-xl ml-10 mr-10'>Alle Changelogs</h1>
      <div className='mt-4 flex flex-col gap-2'>
        {changelogs.map(item => {
          return <Changelog key={item._id} data={item} />
        })}
      </div>
    </div>
  )
}

export default Changelogs