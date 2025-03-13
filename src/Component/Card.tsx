// type CardProps={
//     title:string
//     id:number
//     date:string
//     bgcolor: string
// }

// const Card:React.FC<CardProps> = ({title,id,date}) =>{
//     const navigate = useNavigate();
//     return (
//         <div className='flex flex-col m-2 items-center justify-between w-[12rem] h-64 p-4 bg-orange-200 rounded-3xl'
//             onClick={()=>{navigate(`/detail/${id}`)}}>
//             <h2 className='text-lg font-bold'>{title}</h2>
//             <footer className=''>{date}</footer>
//         </div>
//     )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { getColorSet } from '../colorUtils/Color';

interface CardProps {
  id: number;
  title: string;
  date: string;
  bgcolor: string;
}

const Card: React.FC<CardProps> = ({ id, title, date, bgcolor }) => {
  const colorSet = getColorSet(bgcolor);
  
  // 아이콘 선택 (간단한 이모티콘 사용)
  const getIcon = (title: string) => {
    const iconMap: Record<string, string> = {
      '취뽀해': '💼',
      '너의 하루는': '✏️',
      '냉장고를 부탁해': '🍽️',
    };
    
    return iconMap[title] || '📝';
  };

  return (
    <Link to={`/detail/${id}`} className="block transition-transform duration-300 hover:scale-105">
      <div className={`w-full h-full p-1 overflow-hidden rounded-2xl shadow-md ${colorSet.bgLight} hover:shadow-lg`}>
        <div className={`w-full h-full p-5 rounded-xl bg-white`}>
          <div className="flex flex-col h-full">
            {/* 아이콘 + 날짜 */}
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center justify-center w-12 h-12 text-xl rounded-full ${colorSet.bgMedium} ${colorSet.text}`}>
                {getIcon(title)}
              </div>
              <p className={`text-sm font-medium ${colorSet.text}`}>{date}</p>
            </div>
            
            {/* 제목 */}
            <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
            
            {/* 하단 버튼 */}
            <div className="mt-auto">
              <div className={`flex items-center justify-center w-full p-2 mt-4 font-medium rounded-lg ${colorSet.bgMedium} ${colorSet.text}`}>
                자세히 보기
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;