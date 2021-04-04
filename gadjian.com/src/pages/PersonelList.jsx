import React from 'react'
import PersonelListCard from '../components/PersonelListCard'
import PersonelListHeader from '../components/PersonelListHeader'
import PersonelListPagination from '../components/PersonelListPagination'

function PersonelLists () {
  return (
    <div className="w-full mx-12 mt-24">
      <PersonelListHeader />
      <PersonelListCard />
      <PersonelListPagination />
    </div>
  )
}

export default PersonelLists