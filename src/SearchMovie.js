import React from 'react'

export default function SearchMovie(){
  return (
    <div>
        <form className='form'>
            <label className='label' htmlFor='query'>movie name</label>
            <input type='text' name='query' placeholder='e.g.  '></input>
            <button className='button' type='submit'>Search</button>
        </form>
    </div>
  )
  
}

