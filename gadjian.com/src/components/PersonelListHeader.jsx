import React from 'react'

function PersonelListHeader () {
  return (
    <div className="lg:flex lg:justify-between">
        <div>
          <p className="font-bold text-tosca text-2xl">PERSONEL LISTS</p>
          <p className="text-lg text-gray-600">List of all personels</p>
        </div>
        <div className="lg:flex lg:gap-2">
          <div className="relative text-gray-700">
            <input className=" h-10 pl-8 pr-3 text-base placeholder-gray-600 border focus:shadow-outline" type="text" placeholder="Find Personels"/>
            <div className="absolute inset-y-0 left-0 h-10 flex items-center px-2 pointer-events-none text-tosca">
              <ion-icon name="search"></ion-icon>
            </div>
          </div>
          <button className="bg-tosca text-white font-bold py-2 px-4 flex justify-center h-10">
            ADD PERSONELS
            <svg xmlns='http://www.w3.org/2000/svg' className='ionicon w-6 ml-2' viewBox='0 0 512 512'><title>Add</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='70' d='M256 112v288M400 256H112'/></svg>
          </button>
        </div>
      </div>
  )
}

export default PersonelListHeader