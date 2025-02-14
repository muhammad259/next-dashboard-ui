import Image from "next/image"
import { Input } from "postcss"
import Input_ from "postcss/lib/input"

const Navbar = () => {
  return (
   <div className="flex items-center justify-between p-4">
    {/*SEARCH BAR*/}
    <div className="hidden md:flex">
      <Image src="/search.png" alt="" width={14} height={14}/>
      <input type="text" placeholder="search..." />
    </div>
    {/*icons */}
     <div className="flex items-center gap-2 justify-center">
      <div className="bg-white rounded-full w-7 h-7 ">
      <Image src="/message.png" alt="" width={15} height={15} />
      </div>
     </div>
   </div>
  )
}

export default Navbar