import React from 'react'
import { useNavigate } from 'react-router-dom'

type CardProps={
    title:string
    id:number
    date:string
}
const Card:React.FC<CardProps> = ({title,id,date}) =>{
    const navigate = useNavigate();
    return (
        <div className='flex flex-col m-2 items-center justify-between w-[12rem] h-64 p-4 bg-orange-200 rounded-3xl'
            onClick={()=>{navigate(`/detail/${id}`)}}>
            <h2 className='text-lg font-bold'>{title}</h2>
            <footer className=''>{date}</footer>
        </div>
    )
}

export default Card;