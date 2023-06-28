"use client"

import SettingsForm from '@/components/SettingsForm'
import ProfileCard from '@/components/ProfileCard'
import Sidebar from '@/components/user/Sidebar'
import AdminNavbar from '@/components/user/UserNavbar'
import UserHero from '@/components/user/UserHero'
import Layout from '@/components/Layout'
import FooterUser from '@/components/user/FooterUser'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Dashboard() {

  const {currentUser} = useSelector((state: RootState) => state.auth)


  return (
    <>
    <AdminNavbar/> 
    <div className='flex  '>
    <Sidebar />
      <Layout>
    <div className='lg:mx-7 mx-5'>
      <UserHero title='Profile' />
        <div className=" ">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
            <div className=" col-span-2 mb-16 mb-lg-4 lg:mt-0 mt-8">
              <SettingsForm user={currentUser}  />
            </div>
            <div className=" mb-16 lg:mt-0 mt-8 ">
              <ProfileCard user={currentUser} />
            </div>
          </div>
        </div>
        </div>
      <FooterUser />
      </Layout>
        </div>
      
     
    </>
  )
}
Dashboard.defaultProps ={
  needsAuth: true,


}
