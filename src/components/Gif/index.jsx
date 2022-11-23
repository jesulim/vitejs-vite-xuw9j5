import React from "react"
import { Link } from 'wouter'

export default function Gif({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className="grid rounded-md w-full border mb-4">
      <div className="relative mb-4">
        <img className="w-full rounded-md cursor-pointer" src={url} alt={title} />
        <h4 className="absolute text-xs bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">{title}</h4>
      </div>
    </Link>
  )
}