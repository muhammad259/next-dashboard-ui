import Image from "next/image"
import { Input } from "postcss"
import Input_ from "postcss/lib/input"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-md hover:bg-yellow-100">
      {/*SEARCH BAR*/}
      <div className="hidden md:flex items-center gap-2 rounded-full text-xs ring-[1.5px] ring-gray-500 px-2 ">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="search..." className="w-[170px] p-2 outline-none bg-transparent" />
      </div>
      {/*icons */}
      <div className="flex items-center gap-6  justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={15} height={15} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative ">
          <Image src="/announcement.png" alt="" width={15} height={15} />
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-purple-400 text-white flex items-center justify-center rounded-full text-xs ">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-serif leading-3 text-medium">Ahmed</span>
          <span className="text-[10px] font-serif text-gray-500 text-right ">admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={20} height={20} className="w-7 rounded-full" />
      </div>
    </div>
  )
}

export default Navbar