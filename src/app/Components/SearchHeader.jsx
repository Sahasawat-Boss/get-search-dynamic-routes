import React from 'react'

function SearchHeader() {
  return (
    <header className='bg-gradient-to-r from-purple-500 to-green-600 h-[300px] flex justify-center items-center '>
      <div className='text-center'>
        <h1 className='text-white text-4xl'>Pokemon Details</h1>
        <p className='text-white text-lg'>Search Your Pokemon</p>
        <form action="" className='flex mt-4'>
          <input
            type="text"
            className='w-full px-3 py-2 bg-white rounded-lg shadow-lg'
            placeholder='Search'/>
            <button className='mx-2 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer'>Search</button>
        </form>
      </div>
    </header>
  )
}

export default SearchHeader