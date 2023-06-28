"use client"
import SettingsForm from '@/components/SettingsForm'
import ProfileCard from '@/components/ProfileCard'
import AdminNavbar from '@/components/user/UserNavbar'
import Layout from '@/components/Layout'
import FooterAdmin from '@/components/admin/FooterAdmin'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHero from '@/components/admin/AdminHero'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'


export default function Dashboard() {
  const {currentUser, userDate} = useSelector((state: RootState) => state.auth)


  return (
    <>

<AdminNavbar/> 
    <div className='flex  '>
    <AdminSidebar />
      <Layout>
    <div className='lg:mx-7 mx-5'>
      <AdminHero title='Profile' />
        <div className=" ">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
            <div className=" col-span-2 mb-16 mb-lg-4 lg:mt-0 mt-8">
              <SettingsForm user={currentUser} />
            </div>
            <div className=" mb-16 lg:mt-0 mt-8 ">
              <ProfileCard  user={currentUser} />
            </div>
          </div>
        </div>
        </div>
      <FooterAdmin/>
      </Layout>
        </div>
     
      
     
    </>
  )
}

Dashboard.defaultProps ={
  needsAuth: true,
  isAdmin: true

}
