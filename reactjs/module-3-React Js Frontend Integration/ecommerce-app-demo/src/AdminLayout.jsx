import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import AdminSidebarApp from './components/admin/AdminSidebarApp'
import DashboardApp from './components/admin/DashboardApp'
export default function AdminLayout() 
{
  return (
     <>
     <div class="min-h-screen bg-slate-50 text-slate-900">
     <AdminSidebarApp />
     <div class="min-h-screen lg:pl-72">
     <AdminHeader />
     <DashboardApp />
     </div>
    </div>
    </>
  )
}
