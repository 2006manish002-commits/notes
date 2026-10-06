import React from 'react'
import {X} from "lucide-react"

const Card = (props) => {
  return (
    <div className='w-60 h-64  relative bg-cover bg-center p-5 rounded-2xl shrink-0 overflow-y-auto shadow-lg text-black bg-[url("https://www.bing.com/th/id/OIP.HiHK4Pa1BI9ovQXxBgBjygHaHy?w=193&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2")]'>
        <button onClick={(idx)=>
            props.deleteTask(props.idx)
        } className='bg-red-600 text-white p-5 active:scale-9.3 rounded-full px-2.5 py-1 absolute top-2 right-2 text-xs font-bold '><X /></button>
        <div>
            <h2 className='text-xl p-2.5 font-bold mb-2'>{props.title}</h2>
            <p className='text-base p-0.5'>{props.details}</p>
        </div>
    </div>
  );
};

export default Card