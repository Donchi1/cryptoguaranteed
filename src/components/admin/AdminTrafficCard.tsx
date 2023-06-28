"use client"
import React from "react"
import { useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import formatCurrency from "@/utils/converter";

interface trafficCardType {
  profile: DocumentData | null;
  payments: DocumentData[] | null;
  investments: DocumentData[] | null;
  initial: number;
  total: number;
  interest: number;

}

export default function AdminTrafficCard({
  profile,
  payments,
  initial,
  total,
  interest,
  investments
}: trafficCardType) {

  const {push} = useRouter();
  return (
    <div className="!bg-[#011628]/30 c-bg rounded-xl p-4">
      <div className="justify-none ">
        <div className="w-full flex items-center justify-between py-3">
          <h2 className="main-color text-2xl uppercase">Account Info</h2>
          <button
            className="bg-transparent text-[#7450fe]"
            
            style={{ padding: 0 }}
            onClick={() => push("/user/profile")}
          >
            See More
          </button>
        </div>
      </div>
      <div>
      <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className=" text-gray-500  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Datas
                </th>
                <th className=" text-gray-500  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Values
                </th>
                <th className="  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
               <th className="border-b text-gray-400 border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                  Deposits
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {formatCurrency(Number(profile?.allDeposits) || 0)}
                </td>
                <td className="border-b  border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  
                </td>
              </tr>
              <tr>
               <th className="border-b text-gray-400 border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                 Payments
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
               {payments?.length}
                </td>
                <td className="border-b  border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  
                </td>
              </tr>
              <tr>
               <th className="border-b text-gray-400 border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                  Investments
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  {investments?.length}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  
                </td>
              </tr>
              <tr>
               <th className="border-b text-gray-400 border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                  Interests
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {formatCurrency(Number(profile?.allInterests || 0))}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  
                </td>
              </tr>
              <tr>
               <th className="border-b text-gray-400 border-gray-200 align-middle font-light text-sm whitespace-nowrap  py-4 text-left">
                  Total Payed
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                
                  { formatCurrency(Number(profile?.totalBalance) + Number(profile?.allInterests) ||
                    0)}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
