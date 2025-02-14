import React from 'react'
import SideBar from './SideBar'

type HomeProps={ 
}
const Home:React.FC<HomeProps> = () =>{
    return (
        <div className='flex flex-col w-full'>
            <div className='w-screen bg-orange-300 h-[600px] z-0'></div>
            <div className='z-10 w-screen h-64 bg-white'>sehan</div>
        </div>
    )
}

export default Home;