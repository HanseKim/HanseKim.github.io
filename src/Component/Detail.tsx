import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Post {
    id: number;
    title: string;
    date: string;
    content: string;
}

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        fetch('/chibbohae.json') // JSON 파일 경로
            .then(response => response.json())
            .then(data => {
                const foundPost = data.find((item: Post) => item.id.toString() === id);
                setPost(foundPost || null);
            })
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    console.log('Post content:', post.content); // 확인용 로그

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>{post.title}</h1>
                <p className='text-gray-500'>{post.date}</p>
                <div className='mt-4'>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default Detail;
