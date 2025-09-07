import React from 'react'

function VideoTittle({ title, overview }) {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-end pb-32 px-8 text-white bg-gradient-to-r from-black/80 via-black/50 to-transparent">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="py-6 text-lg max-w-md drop-shadow-md">{overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2 text-black bg-white rounded-lg font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="flex items-center gap-2 px-6 py-2 bg-gray-700 bg-opacity-70 text-white rounded-lg font-semibold hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTittle
