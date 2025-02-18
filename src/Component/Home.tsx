import React, { useEffect, useState } from 'react'
import Card from './Card'

type Post = {
    id:number;
    title: string;
    date: string;
    content: string;
}
type HomeProps={ 
}
const Home:React.FC<HomeProps> = () =>{
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
        fetch('/chibbohae.json') // JSON 파일 경로
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);
    
    return (
        <div className='flex flex-col w-full'>
            <div className='z-0 flex flex-col justify-end w-screen bg-orange-300'>
                <div className='flex flex-col mt-60'>
                    <div className='flex justify-center w-screen text-2xl font-bold '>내가 만든 개발 일지</div>
                    <div className='flex flex-wrap justify-around w-screen '>
                        {
                            posts.map((post,index)=>(
                                <Card key={index} title={post.title} id={post.id} date={post.date} />
                            ))
                        }
                        {/* <Card title='너의 하루는' date='25/02'/>
                        <Card title='취뽀해' date='25/01~'/>
                        <Card title='냉장고를 부탁해'/>
                        <Card title='냉장고를 부탁해'/>
                        <Card title='냉장고를 부탁해'/> */}
                    </div>
                    
                </div>
            </div>
            <div className='z-10 w-screen h-64 bg-white'>sehan</div>
        </div>
    )
}

export default Home;