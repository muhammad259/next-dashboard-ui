"use client"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'June',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'July',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Aug',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,
    },
];
import Image from "next/image"
const Finance = () => {
    return (
        <div className='bg-slate-200 rounded-xl w-full h-full mt-4 p-2'>
            <div className="flex items-center justify-between">
                <h1 className="text-[18px] font-medium">Finance</h1>
                <Image src="/moreDark.png" alt="More options" width={20} height={20} />
            </div>
            <div className="w-full h-[90%] flex flex-1">
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 5,
                            bottom: 6,
                        }}
                    >
                        <CartesianGrid strokeDasharray=" 4 4" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="natural" dataKey="name" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>



        </div>

    )
}

export default Finance