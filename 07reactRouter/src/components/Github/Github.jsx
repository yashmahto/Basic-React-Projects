import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
      
    }, [])
    
  return (
    <div
    className='text-center m-4 bg-gray-600 p-4 text-white text-3xl ' >
        Github Followers: {data.followers}
        <img className='text-center' src={data.avatar_url} 
          width={300} alt='gitpic' />
        </div>
  )
}

export default Github