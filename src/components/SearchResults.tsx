import React from 'react'

interface ResultProps {
    results: any
}
const SearchResults = ({results}:ResultProps) => {
  return (
    <div className='absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-100 custom-scrollbar'>
        {results.map((each: any) => {
            return (
                <div key={each.symbol} className='cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200'> 
                <span>{each.symbol}</span>
                <span>{each.description}</span>
                </div>
            )
        })}
    </div>
  )
}

export default SearchResults