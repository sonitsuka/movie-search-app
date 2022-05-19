import React, {useState} from 'react'

export default function SearchMovie(){

  // initialise value of input
  const [query, setQuery] =useState('')
  const [movies, setMovies] = useState([]) //empty array as initialise  

  const searchMovies = async (e) => {
    e.preventDefault();
    //console.log('submmiting');
  

  const url ='https://api.themoviedb.org/3/search/movie/550?api_key=bc6c6d479cb8166b0fa55facea70e9b2&language=en-us&query=${query}&include_adult=false';

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
    setMovies(data.results )
  }catch(err){
    console.log(err)
  }

}
  return (
    <div>
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>movie name</label>
            <input className='input' type='text' name='query' 
                  placeholder='e.g. Leon' 
                  value={query}
                  onChange ={(e) => setQuery(e.target.value)}>
            </input>
            <button className='button' type='submit'>Search</button>
        </form>
    </div>
  )
  
}

