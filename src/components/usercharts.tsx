"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        Total: 120,
        fll: 'white',
    },
    {
        name: 'Boys',
        present: 64,
        fill: 'lightyellow '



    },
    {
        name: 'Girls',
        present: 56,
        fill: 'lightblue',


    },

];

const Usercharts = () => {
    return (
        <div className="bg-slate-200 rounded-xl w-full h-full mt-4 p-2 ">
            {/* top chart*/}
            <div className="flex items-center justify-between ">
                <h1 className='text-[18px] font-medium'>Students</h1>

                <Image src="/moreDark.png" alt='' width={20} height={20} />

            </div>
            {/* middle chart*/}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="present"
                        />
                        <Legend iconSize={5} layout="vertical" verticalAlign="top" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={30} height={30} className=' bg-slate-300 rounded-lg hover:bg-slate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* bottom chart*/}
            <div className="flex justify-center gap-16">
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-sky-300 rounded-full' />
                    <h1 className='text-xl '>1,428</h1>
                    <h1 className='text-xs text-gray-400 hover:text-gray-300'>Boys60%</h1>

                </div>
                <div className='flex flex-col gap-1 '>
                    <div className='w-5 h-5 bg-lime-300 rounded-full' />
                    <h1 className='text-xl'>1,412</h1>
                    <h1 className='text-xs text-gray-400 hover:text-gray-300'>Girls60%</h1>

                </div>

            </div>


        </div>
    )
};

export default Usercharts