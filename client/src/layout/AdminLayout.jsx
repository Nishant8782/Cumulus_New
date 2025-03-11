import React from 'react'
import Sidebar from '../Component/Admin/Sidebar'
import Navbar from '../Component/Admin/Navbar'
import { Routes, Route } from 'react-router-dom'
import FAQ from '../Component/Admin/FAQ'
import SecurityQuestion from '../Component/Admin/SecurityQuestion'
import Dashboard from '../Component/Admin/Dashboard'
import ManageUsers from '../Component/Admin/ManageUsers'
import UserDetails from '../Component/Admin/utiles/userroutes/UserDetails'
import CumulusDefault from '../Component/Admin/CumulusDefault'

function AdminLayout() {
  return (
    <div className='flex'>
        
           
      <div className='min-h-screen bg-gray-100'>
        <Sidebar />
      </div>
      
      <div className='w-full'>
      <Navbar />
      <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/SecurityQuestion" element={<SecurityQuestion />} />
  <Route path="/ManageUsers/*" element={<ManageUsers />} />
  <Route path="/ManageUsers/user/:id" element={<UserDetails />} />
  <Route path="/CumulusDefault" element={<CumulusDefault />} />
</Routes>

      </div>
      
      
    </div>
  )
}

export default AdminLayout
