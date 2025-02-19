<<<<<<< HEAD
import Menu from "@/Components/Menu";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
=======
export default function DashboardLayout({
>>>>>>> 5c3d957a8a9b99ab6127b7cb9f920b48c5ae2524
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
<<<<<<< HEAD
      <div className="h-screen flex">
        {/*LEFT*/}
        <div className="w-[14%] md:w-[8%] lg:w-[15%] xl:w-[14%] ">
        <Link href="/" className="flex items-center justify-center lg:justify-start">
        <span className="font-serif text-blue-300 hover:text-blue-200 text-start bg-yellow-100 rounded-lg hidden lg:block">Ahmed School</span>
        <Image src="/logo.png" alt="" width={20} height={20} className="gap-2 size-6 lg:justify-start"/>
        </Link>
        <Menu/>
        </div>
        {/*RIGHT*/}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f3f5ee] overflow-scroll">
          <Navbar/>
          {children}
        </div>
        
      </div>
      
    );
  }
=======
    <div className="h-screen flex">
        {/* LEFT*/}
        <div className="w-[14%] md:[16%] bg-red-200">l</div>
        {/* right*/}
        <div className="w-[86%] md:[84%] bg-blue-200">r</div>
    </div>
    );
  };
>>>>>>> 5c3d957a8a9b99ab6127b7cb9f920b48c5ae2524
