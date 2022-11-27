import { Link } from 'wouter'

export default function Gif ({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`}>
      <div className='relative mb-4'>
        <img className='w-full rounded-md cursor-pointer' src={url} alt={title} />
        <h4 className='absolute text-[10px] inset-x-0 bottom-0 px-2 py-1 bg-gray-800 opacity-70'>{title}</h4>
      </div>
    </Link>
  )
}
