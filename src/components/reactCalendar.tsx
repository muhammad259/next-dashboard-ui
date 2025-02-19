"use client"

import { time } from 'console';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const event = [
  {
    id: "1",
    time: "12:00pm to 13:00pm",
    title: "lorem ispum djsdsxsgd",
    Description: "lsowvxs xwkmxwxhebx knxjwed",
  },
  {
    id: "1",
    time: "12:00pm to 13:00pm",
    title: "lorem ispum djsdsxsgd",
    Description: "lsowvxs xwkmxwxhebx knxjwed",
  },
  {
    id: "1",
    time: "12:00pm to 13:00pm",
    title: "lorem ispum djsdsxsgd",
    Description: "lsowvxs xwkmxwxhebx knxjwed",
  }
]
const reactCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-slate-200 p-4 rounded-md '>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl my-4 '> Event</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4'>
        {event.map(event => (
          <div className='p-4 border-gray-300 rounded-md border-2 border-t-purple-300 odd:border-t-green-400 border-l-green-600 border-r-yellow-400 hover:border-r-yellow-200' key={event.id}>
            <div className='flex items-center justify-between'>
              <h1>{event.time}</h1>
              <span>{event.title}</span>
            </div>
            <p>{event.Description}</p>
          </div>
        ))}
      </div>
    </div>

  );
}


export default reactCalendar;
