import React, { useState } from 'react'
import {mockData} from '../constants/mock'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import SearchResults from './SearchResults'

const Search = () => {

    const [input, setInput] = useState('')
    const [bestMatches, setBestMatches] = useState(mockData.result)

    const clear = () => {
        setInput('')
        setBestMatches([])
    }

    const updateBestMatches = () => {
        setBestMatches(mockData.result)
    }
  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-whit border-neutral-100 custom-scrollbar'>
        <input  type='text' value={input} className='w-full px-4 py-2 focus:outline-none rounded-md' placeholder='Search stock' onChange={(e)=> setInput(e.target.value)} onKeyPress={
            (e)=> {
                if(e.key === 'Enter'){
                    updateBestMatches()
                }
            }
        }/>
        {
            input ?
            <button onClick={clear}>
            <XMarkIcon className="h-4 w-4 fill-gray-500"/>
             </button>
        : null
        }
         <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2">
            <MagnifyingGlassIcon  className="h-4 w-4 fill-gray-100"/>
             </button>

             {input && bestMatches.length > 0 ? (<SearchResults results={bestMatches}/>) : null}
    </div>
  )
}

export default Search