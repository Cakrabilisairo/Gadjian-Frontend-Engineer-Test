import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setPageIncrement, setPageDecrement} from '../store/action'

function PersonelListPagination () {
  const page = useSelector(state => state.apiUrl.page)
  const dispatch = useDispatch()

  function nextPage () {
    dispatch(setPageIncrement())
  }

  function previousPage () {
    dispatch(setPageDecrement())
  }


  return (
    <div className="flex justify-center mt-24 mb-10">
      <div className="flex gap-5">
        {
          page === 1 ?
          <div className="flex gap-3 text-gray-300">
            <div className="text-xl ">
              <ion-icon name="chevron-back"></ion-icon>
            </div>
            <button className="font-bold" disabled>Previous Page</button>
          </div> :
          <div className="flex gap-3">
            <div className="text-xl">
              <ion-icon name="chevron-back"></ion-icon>
            </div>
            <button 
            className="font-bold"
            onClick={previousPage}>
              Previous Page
            </button>
          </div>
        }
        
        {
          page === 7 ?
          <div className="flex gap-3 text-gray-300">
            <button 
            className="font-bold"
            onClick={nextPage}
            disabled>
              Next Page
            </button>
            <div className="text-xl">
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
          </div> :
          <div className="flex gap-3">
            <button 
            className="font-bold"
            onClick={nextPage}>
              Next Page
            </button>
            <div className="text-xl">
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default PersonelListPagination