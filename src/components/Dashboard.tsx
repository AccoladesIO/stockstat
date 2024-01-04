import React from 'react'
import Card from './Card'
import {mockCompanyProfile} from '../constants/mock'
import Search from './Search'
import Header from './Header'

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr  gap-6">
        <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1'>
            <Header name={mockCompanyProfile.name} />
        </div>
        <div className='md:col-span-2 row-span-4'>
            <Card>
                Chart
            </Card>
        </div>
        <div>
            <Card>
                Overview
            </Card>
        </div>
        <div className='row-span-2 xl:row-span-3'>
            <Card>
                Details
            </Card>
        </div>
    </div>
  )
}

export default Dashboard