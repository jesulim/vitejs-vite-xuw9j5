import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = ['Matrix', 'Bolivia', 'Mr Robot', 'Escher']

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs({ keyword: 'Reactjs' })// eslint-disable-line

  console.log(path)

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(keyword)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <div className='flex justify-center m-8'>
        <form onSubmit={handleSubmit}>
          <input placeholder='Search your gif here...' className='text-black rounded-full text-center p-1 w-60' onChange={handleChange} type='text' value={keyword} />
        </form>
      </div>
      <h3 className='font-bold text-2xl'>Ultima busqueda</h3>
      <div>
        <ListOfGifs gifs={gifs} />
      </div>
      <h3 className='font-bold text-2xl'>Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
