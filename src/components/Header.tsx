import React, { ReactNode } from 'react'
import Search from './Search'
import { mockCompanyProfile } from '../constants/mock'


interface HeaderProp {
    name: ReactNode
}
const Header = ({name}: HeaderProp) => {
  return (
    <div className='xl:px-32'>
        <h1 className='text-5xl text-left'>{name}</h1>
            <Search />
    </div>
  )
}

export default Header