export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="h-screen flex">
        {/* LEFT*/}
        <div className="w-[14%] md:[16%] bg-red-200">l</div>
        {/* right*/}
        <div className="w-[86%] md:[84%] bg-blue-200">r</div>
    </div>
  }