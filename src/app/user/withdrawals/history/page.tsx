"use client"
import React from "react";
import useCollection from "@/components/hooks/UseCollection";
import TableCard from "@/components/user/TableCard";
import { auth } from "@/db/firebaseDb";
import AdminNavbar from "@/components/user/UserNavbar";
import FooterUser from "@/components/user/FooterUser";
import Sidebar from "@/components/user/Sidebar";
import UserHero from "@/components/user/UserHero";
import Layout from "@/components/Layout";

const WithdrawalHistory = () => {
  const [withdrawals] = useCollection(
    `withdrawals/${auth.currentUser?.uid}/withdrawalDatas`
  );
  return (
    <>
      <AdminNavbar/> 
    <div className='flex  '>
    <Sidebar />
      <Layout >
    <div className='lg:mx-7 mx-5 mb-6'>
      <UserHero title='Withdrawals' />
        <div className=" ">
          <TableCard data={withdrawals} />
        </div>
        </div>
      <FooterUser />
        </Layout>
        </div>
      
    </>
  );
};

export default WithdrawalHistory;

WithdrawalHistory.defaultProps ={
  needsAuth: true,


}
