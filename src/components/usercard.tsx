import Image from "next/image"

const Usercard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl  odd:bg-teal-200 hover:odd:bg-teal-100 even:bg-slate-300 hover:even:bg-slate-200 p-4 flex-1 min-w-[130px] '>
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white rounded-full text-green-300 py-1 px-2">20/2024</span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      
      <h1 className="text-2xl font-semibold flex-col gap-2 ">6,305 </h1>
      <h1 className="text-gray-500 font-medium capitalize ">{type}</h1>
      
      
    </div>
  )
}

export default Usercard