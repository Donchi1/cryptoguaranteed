import React from "react";
import useCollection from "@/components/hooks/UseCollection";
import Layout from "@/components/Layout";
import Sidebar from "@/components/user/Sidebar";
import UserHero from "@/components/user/UserHero";
import AdminNavbar from "@/components/user/UserNavbar";
import FooterUser from "@/components/user/FooterUser";
import { auth } from "@/db/firebaseDb";
import handleStatus from "@/utils/handleStatus";

import moment from "moment";
import Image from "next/image";
import { MdDiversity2 } from "react-icons/md";

function Transactions() {
  const [transactions] = useCollection(
    `transactions/${auth.currentUser?.uid}/transactionDatas`
  );

  return (
    <>
       <AdminNavbar/> 
    <div className='tw-flex  '>
    <Sidebar />
      <Layout >
    <div className='lg:tw-mx-7 tw-mx-5 tw-mb-6'>
      <UserHero title='Transactions' />
        <div className=" ">

            <div
              className="!tw-bg-[#011628]/30 tw-p-4 tw-rounded-xl "
              style={{ minHeight: "80vh" }}
            >
              <div>
                <div className="tw-overflow-x-auto">
                  <table className="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
                    <thead>
                      <tr>
                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          ID
                        </th>
                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          User
                        </th>

                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          Type
                        </th>

                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          amount
                        </th>
                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          Remark
                        </th>
                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          Prove
                        </th>

                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          Date
                        </th>
                        <th className="tw-px-2 tw-text-white tw-align-middle tw-border-b tw-border-solid tw-border-gray-200 tw-py-3 tw-text-sm tw-whitespace-nowrap tw-font-light tw-text-left">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(transactions?.length as number) > 0 &&
                        transactions?.map((each) => (
                          <tr key={each.uid}>
                            <th className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {each.idx.slice(0, 5)}
                            </th>
                            <th className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {each.firstname}
                            </th>

                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {each.type}
                            </td>
                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {each.amount}
                            </td>
                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {each.remark}
                            </td>
                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              <Image
                                src={each.prove}
                                height={14}
                                width={40}
                                className="h-14 w-14 rounded-full"
                                alt="prove"
                              />
                            </td>
                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {moment(each.date.toDate()).fromNow()}
                            </td>
                            <td className="tw-border-b tw-border-gray-200 tw-align-middle tw-font-light tw-text-sm tw-whitespace-nowrap tw-px-2 tw-py-4 tw-text-left">
                              {handleStatus(each.status)}
                            </td>
                          </tr>
                        ))}
                      {!transactions?.length && (
                        <tr>
                          <td
                            colSpan={7}
                            rowSpan={7}
                            className=" tw-text-red-500 tw-uppercase tw-text-center tw-pt-8 tw-text-sm tw-font-bold tw-pb-12"
                          >
                            No transaction Yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        </div>
          </Layout>

          <FooterUser />
        </div>
      
    </>
  );
}

export default Transactions;
Transactions.defaultProps ={
  needsAuth: true,


}
