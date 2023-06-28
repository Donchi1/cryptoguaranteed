
import * as Icons from  "react-icons/hi2"
import {BiGroup} from  "react-icons/bi"
import * as Icon2 from  "react-icons/md"





type statusCardType = {
  color: string,
  icon: string,
  title: string,
  amount: number,
  percentage: number,
  percentageColor: string,
  percentageIcon: string,
  date: string,
}

export default function AdminStatusCard({
  color,
  icon,
  title,
  percentage,
  amount,
  percentageColor,
  percentageIcon,
  date,
}: statusCardType) {

  const checkIcon = (type: string) => {
      let icon 
      if(type === "users") icon = <BiGroup size={20} />
      if(type === "rInvestments") icon = <Icon2.MdAttachMoney size={20} />
      if(type === "cInvestments") icon = <Icon2.MdPayments size={20} />
      if(type === "pendingW") icon = <Icon2.MdMonetizationOn size={20} />

      return icon
  }
  return (
    <div className="lg:px-4 mb-4 lg:mb-10 mt-4">
    <div className="bg-[#011628]/30 c-bg rounded-xl shadow-lg">
      <div className=" border-black relativ flex justify-between items-center py-3  px-3 ">
        <div >
          <span className={ ` w-12 h-12 rounded-full flex justify-center items-center  bg-gradient-to-r from-[#21d397] to-[#7450fe] `}>
              {checkIcon(icon)}
              
            </span>
          </div>
          <div className=" mt-2 ">
            <h2 className="main-color text-xl mb-4">{title}</h2>
            <h2 className="text-lg">${amount || '000'}</h2>
          </div>
        </div>
        {/* <div className="border-b border-gray-200 mt-2"></div> */}

      
        <div
           className='pl-2 flex pb-2'
           >
          
          
          {percentageIcon === "arrow_downward"?
          <Icons.HiArrowDown className="h-4 w-6 text-red-500 mt-2" />: <Icons.HiArrowUp className="h-4 w-6 mt-2  text-green-500" />}
          <span className='text-gray-600 '>
            {date}
            </span>
        </div>
      </div>
    </div>
  )
}
