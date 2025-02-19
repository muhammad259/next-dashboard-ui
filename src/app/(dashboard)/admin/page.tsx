import Attendance from "@/Components/Attendance"
import reactCalendar from "@/Components/reactCalendar"
import Finance from "@/Components/Finance"
import Usercard from "@/Components/usercard"
import Usercharts from "@/Components/usercharts"
import MyApp from "@/Components/reactCalendar"
import Announcement from "@/Components/Announcement"

const adminPage = () => {
  return (
    <div className='p-4 flex md:flex-row gap-4 flex-col'>
     {/*LEFT*/}
     <div className="w-full lg:w-2/3 flex flex-col gap-6">
     {/*USERS CARDS*/}
     <div className="flex gap-4 justify-between flex-wrap">
      <Usercard type="students"/>
      <Usercard type="teachers"/>
      <Usercard type="staffs"/>
      <Usercard type="parents"/>
     </div>
     
     {/*Middle Chart*/}
     <div className="flex gap-4 flex-col lg:flex-row">
      {/*charts Chart*/}
      <div className="w-full lg:w-1/3 h-[450px] ">
      <Usercharts/>
      </div>
     {/*Attendance Chart*/}
     <div className="w-full lg:w-2/3 h-[450px]">
     <Attendance/>
     </div>
     </div>
     {/*Bottom Chart*/}
     <div className="w-full h-full lg:w-3/3 ">
      <Finance/>
     </div>
     </div>
     
     {/*RIGHT*/}
     <div className="w-full lg:w-1/3 flex flex-col gap-8">
     <MyApp/>
     <Announcement/>
     </div>
    </div>
  )
}

export default adminPage