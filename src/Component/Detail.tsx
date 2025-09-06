import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorSet, getColorSet, defaultColorSet } from '../colorUtils/Color';

interface Section {
    type: 'text' | 'list' | 'heading' | 'image';
    content: string | string[];
}

interface Post {
    id: number;
    title: string;
    date: string;
    bgcolor: string; // pink, blue, etc.
    sections: Section[];
}

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [colorSet, setColorSet] = useState<ColorSet>({
        bgLight: 'bg-white',
        bgMedium: 'bg-white',
        bgDark: 'bg-white',
        text: 'text-white',
        border: 'border-white',
    });

    useEffect(() => {
        fetch('/blog.json') // JSON 통합 데이터
        .then(response => response.json())
        .then(data => {
            const foundPost = data.find((item: Post) => item.id.toString() === id);
            setPost(foundPost || null);
            if (foundPost) {
                setColorSet(getColorSet(foundPost.bgcolor)); // 색상 셋 저장
            }
        })
        .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    if (!post) {
        return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg text-gray-500">포스트를 찾을 수 없습니다.</p>
        </div>
        );
    }

    return (
        <div className={`flex flex-col items-center w-screen min-h-screen px-4 py-12 pt-32 ${colorSet.bgLight}`}>
            <div className={`w-full max-w-3xl p-8 bg-white shadow-lg rounded-3xl ${colorSet.border} border`}>
                <h1 className={`mb-2 text-4xl font-bold ${colorSet.text}`}>{post.title}</h1>
                <p className="mb-6 text-gray-400">{post.date}</p>
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    {post.sections.map((section, index) => {
                        if (section.type === 'text') {
                            return <pre key={index} className="text-gray-700 whitespace-pre-wrap break-words">
                                    {section.content}
                                </pre>
                        } else if (section.type === 'list' && Array.isArray(section.content)) {
                            return (
                                <ul key={index} className="pl-4 space-y-1 list-disc list-inside">
                                {section.content.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                                </ul>
                            );
                        } else if (section.type === 'heading') {
                            return (
                                <h2 key={index} className={`text-2xl font-semibold ${colorSet.text}`}>
                                {section.content}
                                </h2>
                            );
                        } else if (section.type === 'image') {
                            return (
                                <div key={index} className="flex justify-center my-6">
                                    <img 
                                        src={`/${section.content}`} 
                                        alt={`${post.title} 스크린샷`}
                                        className="max-w-full h-auto rounded-lg shadow-md"
                                        style={{ maxWidth: '300px' }}
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Detail;