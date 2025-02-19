import Image from "next/image"

const Announcement = () => {
    return (
        <div className='bg-slate-200 p-4 rounded-md'>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl">Announcement</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <div className=" flex flex-col gap-4 mt-4 ">
                <div className="bg-blue-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ispum dolor</h2>
                        <span className="bg-slate-500 rounded-md py-1 px-1 text-white ">25-2024</span>
                    </div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
                </div>               
            </div>
            <div className=" flex flex-col gap-4 mt-4 ">
                <div className="bg-purple-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ispum dolor</h2>
                        <span className="bg-slate-500 rounded-md py-1 px-1 text-white ">25-2024</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>               
            </div>
            <div className=" flex flex-col gap-4 mt-4 ">
                <div className="bg-green-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ispum dolor</h2>
                        <span className="bg-slate-500 rounded-md py-1 px-1 text-white ">25-2024</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>               
            </div>


        </div>
    )
}

export default Announcement