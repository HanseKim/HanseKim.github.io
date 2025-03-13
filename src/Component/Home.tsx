import React, { useEffect, useState } from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

type Post = {
  id: number;
  title: string;
  date: string;
  bgcolor: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/chibbohae.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
        setIsLoading(false);
      });
  }, []);

  // 카드 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* 헤더 섹션 */}
      <div className="w-full shadow-lg bg-gradient-to-r from-orange-400 to-orange-300">
        <div className="flex flex-col items-center px-4 py-16 md:py-24">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            내가 만든 개발 일지
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-24 h-1 my-4 bg-white rounded"
          />
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg text-orange-50"
          >
            프로젝트 포트폴리오
          </motion.p>
        </div>
      </div>

      {/* 카드 섹션 */}
      <div className="w-full max-w-6xl px-4 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-t-4 border-orange-500 rounded-full animate-spin border-opacity-20 border-t-orange-500" />
          </div>
        ) : posts.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-gray-500">등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {posts.map((post, index) => (
              <motion.div key={post.id} variants={cardVariants}>
                <Card 
                  title={post.title} 
                  id={post.id} 
                  date={post.date} 
                  bgcolor={post.bgcolor}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;