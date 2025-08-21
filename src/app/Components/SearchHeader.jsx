"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchHeader() {

  const router = useRouter

  const [pokeName, setPokeName] = useState("");
  console.log(pokeName)

  const handleInput = (e) => {
    setPokeName(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Submitted:", pokeName);

    // router.push{`/pokesearch/${pokeName}`};
  }

  return (
    <header className='bg-gradient-to-r from-purple-500 to-green-600 h-[220px] flex-center'>
      <div className='text-center'>
        <h1 className='text-white text-4xl'>Pokemon Details</h1>
        <p className='text-white text-lg'>Search Your Pokemon</p>
        <form onSubmit={handleForm}
          action="" className='flex mt-4'>
          <input
            onChange={handleInput}
            type="text"
            className='w-full px-3 py-1.5 bg-white rounded-lg shadow-lg'
            placeholder='Search' />
          <button className='mx-2 px-5 py-1.5 bg-blue-700 text-white rounded-lg hover'>Search</button>
        </form>
      </div>
    </header>
  )
}

export default SearchHeader