import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CONSULTATION_URL = "https://naver.me/FG794pnA";

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금 발생하면 버튼 표시
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a 
        href={CONSULTATION_URL} 
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm w-16 h-16 rounded-full shadow-[0_4px_20px_rgba(250,204,21,0.5)] flex flex-col items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="상담 신청하기 (새창 열림)"
        title="상담신청 바로가기"
      >
        <span className="leading-tight">문의</span>
        <span className="text-[10px] font-normal opacity-80 flex items-center -mt-0.5">
          신청<ExternalLink size={10} className="ml-0.5" />
        </span>
      </a>
    </div>
  );
};
