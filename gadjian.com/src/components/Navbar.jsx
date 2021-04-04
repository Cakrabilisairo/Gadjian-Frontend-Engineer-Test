import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import gadjianLogo from '../assets/Gadjian-Logo.png'
import { fecthGadjianUser } from '../store/action'

function Navbar () {
  const dispatch = useDispatch()
  const gadjianUser = useSelector(state => state.personelList.gadjianUser)
  const loading = useSelector(state => state.personelList.loading)
  
  useEffect(()=> {
    dispatch(fecthGadjianUser(`https://randomuser.me/api/?results=1&seed=gadjianUser`))
  }, [dispatch])

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img className="w-32" src={gadjianLogo} alt="gadjian-logo" />
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  {
                    loading ?
                    <p>Loading...</p>:
                    <div className="flex items-center leading-snug">
                      <p className="px-3 py-2 text-gray-700"> Hallo,</p>
                      <p className="text-tosca">{gadjianUser[0].name.first}</p>
                      <img className="ml-2 border-2 rounded-full h-14 w-14 flex items-center justify-center" src={gadjianUser[0].picture.thumbnail} alt="personel-pic"/>
                    </div>
                  }
                </li>
            </ul>
          </div>
        </div>
</      nav>
    </div>
  )
}

export default Navbar