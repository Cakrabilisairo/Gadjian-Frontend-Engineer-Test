import React from 'react'
import {NavLink} from 'react-router-dom'

function SideNavbar () {
  const currentPath = window.location.pathname
  return (
    <div className="w-72 h-auto">
      {
        currentPath === '/personel-list' ?
        <ul className="ml-14 pt-12">
          <li className="mt-3">
            <NavLink to="/"><ion-icon name="home"></ion-icon><span className="ml-3">Beranda</span></NavLink>
          </li>
          <li className="mt-3 font-bold text-tosca">
            <NavLink to="/personel-list"><ion-icon name="people"></ion-icon><span className="ml-3 ">Personel List</span></NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/daily-attendance"><ion-icon name="calendar"></ion-icon><span className="ml-3">Daily Attendance</span></NavLink>
          </li>
        </ul> :
        currentPath === '/' ?
        <ul className="ml-14 pt-12">
          <li className="mt-3 font-bold text-tosca">
            <NavLink to="/"><ion-icon name="home"></ion-icon><span className="ml-3">Beranda</span></NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/personel-list"><ion-icon name="people"></ion-icon><span className="ml-3">Personel List</span></NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/daily-attendance"><ion-icon name="calendar"></ion-icon><span className="ml-3">Daily Attendance</span></NavLink>
          </li>
        </ul> :
          <ul className="ml-14 pt-12">
          <li className="mt-3">
            <NavLink to="/"><ion-icon name="home"></ion-icon><span className="ml-3">Beranda</span></NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/personel-list"><ion-icon name="people"></ion-icon><span className="ml-3">Personel List</span></NavLink>
          </li>
          <li className="mt-3 font-bold text-tosca">
            <NavLink to="/daily-attendance"><ion-icon name="calendar"></ion-icon><span className="ml-3">Daily Attendance</span></NavLink>
          </li>
        </ul>
      }
      
    </div>
  )
}

export default SideNavbar