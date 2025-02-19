"use client"; // Only needed in Next.js App Router

import Image from "next/image";
import React from "react";

import { BarChart, Bar, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Mon", present: 37, absent: 94 },
  { name: "Tue", present: 82, absent: 47 },
  { name: "Wed", present: 38, absent: 9800 },
  { name: "Thur", present: 76, absent: 63 },
  { name: "Fri", present: 93, absent: 71 },
];

const Attendance = () => {
  return (
    <div className="bg-slate-200 rounded-xl w-full h-full mt-4 p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-medium">Attendance</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <Bar dataKey="present" fill="lightblue" barSize={42} cx="50%" cy="50%"/>
            
            <Legend iconSize={8} layout="vertical" verticalAlign="top" />
          </BarChart>
          
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Attendance;
