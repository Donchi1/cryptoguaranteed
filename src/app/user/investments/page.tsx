"use client"
import AdminNavbar from "@/components/user/UserNavbar";
import useCollection from "@/components/hooks/UseCollection";
import Sidebar from "@/components/user/Sidebar";
import FooterUser from "@/components/user/FooterUser";
import TableCard from "@/components/user/TableCard";
import { auth } from "@/db/firebaseDb";
import React from "react";
import UserHero from "@/components/user/UserHero";
import moment from "moment";
import handleStatus from "@/utils/handleStatus";
import Layout from "@/components/Layout";

function Page() {
  const [investments] = useCollection(
    `investments/${auth.currentUser?.uid}/investmentDatas`
  );
  return (
    <>
      <AdminNavbar />
      <div className="flex  ">
        <Sidebar />
        <Layout>
          <div className="lg:mx-7 mx-5 mb-6">
            <UserHero title="Investments" />
            <div className=" ">
              <div
                className="!bg-[#011628]/30 c-bg p-4 rounded-xl "
                style={{ minHeight: "80vh" }}
              >
                <div>
                  <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            ID
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Progress
                          </th>

                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            amount
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            profit
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Charge
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            ExProfit
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Date
                          </th>
                          <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(investments?.length as number) > 0 &&
                          investments?.map((each) => (
                            <tr key={each.uid}>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.idx.slice(0, 5)}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.progress}
                              </th>

                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.investedAmount}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.profit}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.fixedCharge}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {each.expectedProfit}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {moment(each.date.toDate()).fromNow()}
                              </td>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {handleStatus(each.status)}
                              </td>
                            </tr>
                          ))}
                        {!investments?.length && (
                          <tr>
                            <td
                              colSpan={7}
                              rowSpan={7}
                              className=" text-red-500 uppercase text-center pt-8 text-sm font-bold pb-12"
                            >
                              No investment Yet
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

          <FooterUser />
        </Layout>
      </div>
    </>
  );
}

export default Page;
Page.defaultProps = {
  needsAuth: true,
};
