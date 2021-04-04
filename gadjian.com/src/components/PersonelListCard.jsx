import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersonelList } from '../store/action'
import loadingGIF from '../assets/ZZ5H.gif'

function PersonelListCard () {
  const dispatch = useDispatch()
  const page = useSelector(state => state.apiUrl.page)
  const results = useSelector(state => state.apiUrl.results)
  const seed = useSelector(state => state.apiUrl.seed)
  const loading = useSelector(state => state.personelList.loading)
  const personelList = useSelector(state => state.personelList.personelList)

  useEffect (()=>{
    dispatch(fetchPersonelList(`https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`))
  }, [page, results, seed, dispatch])

  return (
    <div>
      {
        loading ?
        <div className="flex justify-center mt-20">
          <img src={loadingGIF} alt="loading-gif"/>
        </div>: 
        <div className="lg:flex lg:justify-between">
          {
            personelList.map((personel) => (
              <div className="shadow w-60 rounded mt-5" key={personel.login.uuid}>
                <div className="flex gap-2 border-b border-gray-300 px-4 py-2">
                  <p className="text-gray-600">Personel ID</p>
                  <p className="text-tosca">{personel.login.uuid.slice(0,8)}</p>
                  <div className="text-gray-600 ml-5">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img className="ml-2 border-2 rounded-full h-32 w-32 flex items-center justify-center mt-5" src={personel.picture.medium} alt="personel-pic"/>
                </div>

                <div className="px-4 py-2">
                  <div className="mb-2">
                    <p className="font-bold">Name</p>
                    <p>{`${personel.name.first} ${personel.name.last}`}</p>
                  </div>

                  <div className="mb-2">
                    <p className="font-bold">Telephone</p>
                    <p>{personel.phone}</p>
                  </div>

                  <div className="mb-2">
                    <p className="font-bold">Birthday</p>
                    <p>{personel.dob.date.slice(0,10)}</p>
                  </div>

                  <div className="mb-2">
                    <p className="font-bold">Email</p>
                    <p>{personel.email}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
    

    
  )
}

export default PersonelListCard