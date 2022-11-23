import Gif from '../Gif'

export default function ListOfGifs({ gifs }) {
  return <div className='columns-2 md:columns-3 lg:columns-4 my-4'>
    {
      gifs.map(({ id, title, url }) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}