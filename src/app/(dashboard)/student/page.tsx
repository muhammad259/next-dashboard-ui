
import Announcement from "@/Components/Announcement"
import MyApp from "@/Components/reactCalendar"
import Schedule from "@/Components/Schedule"

const studentPage = () => {
  return (
    <div className='p-4 flex md:flex-row gap-4 flex-col'>
      {/*LEFT*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
       <Schedule/>
      </div>
      {/*RIGHT*/}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <MyApp />
        <Announcement />
      </div>
    </div>


  )

}

export default studentPage