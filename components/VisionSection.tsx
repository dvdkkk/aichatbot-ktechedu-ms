
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Eye } from 'lucide-react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const VisionSection: React.FC = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden min-h-[800px] flex flex-col justify-center">
      
      {/* Background Decoration (Robot removed as requested) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <Reveal className="mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 mb-4">
              <Eye size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Vision</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            모든 기업이 원하는 AI 챗봇,<br />
            <span className="text-yellow-400">자체 개발자로 고연봉 취업!</span>
          </h2>
           <p className="text-zinc-500 mt-4 text-sm">
             미래 산업의 핵심 인재로 성장할 수 있는 확실한 비전을 제시합니다.
           </p>
        </Reveal>

        {/* Separator Dots */}
        <div className="mb-12 flex flex-col gap-2 opacity-50">
          <div className="w-2 h-2 bg-zinc-800 rounded-full mx-auto"></div>
          <div className="w-2 h-2 bg-zinc-600 rounded-full mx-auto"></div>
          <div className="w-2 h-2 bg-zinc-400 rounded-full mx-auto"></div>
        </div>

        {/* Chart Section */}
        <div ref={chartRef} className="w-full max-w-xl mx-auto mb-20 px-4 relative">
          <Reveal delay={200} className="mb-12">
            <h3 className="text-zinc-200 text-sm font-black uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md inline-block px-6 py-2 rounded-full border border-white/5">
              국내 기업 챗봇 도입 수요 예측
            </h3>
          </Reveal>

          <div className="relative h-80 flex items-end justify-center gap-16 md:gap-24 border-b-2 border-zinc-700 pb-4 bg-black/30 backdrop-blur-[4px] rounded-t-2xl px-8 border-x border-t border-white/5 shadow-2xl">
            
            {/* 2021 Bar */}
            <div className="flex flex-col items-center gap-4 w-24 z-10">
              <div className="relative w-full">
                <div 
                  className={`w-full bg-zinc-700/80 rounded-t-xl transition-all duration-1000 ease-out origin-bottom`}
                  style={{ height: startAnimate ? '45px' : '0px' }}
                >
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-300 text-xs font-black transition-opacity duration-500 delay-1000 ${startAnimate ? 'opacity-100' : 'opacity-0'}`}>
                    5.6%
                  </span>
                </div>
              </div>
              <span className="text-zinc-400 text-sm font-bold tracking-tighter">2021년</span>
            </div>

            {/* 2026 Bar */}
            <div className="flex flex-col items-center gap-4 w-28 z-10">
              <div className="relative w-full">
                
                {/* Ultra High-Focus Delta Value */}
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 ${startAnimate ? 'animate-pop-in delay-[1.2s]' : ''}`}>
                  <div className="flex flex-col items-center">
                    <span className="text-yellow-400 text-6xl font-black italic tracking-tighter text-shine drop-shadow-[0_0_20px_rgba(251,191,36,0.7)]">
                      68.6<span className="text-2xl not-italic ml-1">↑</span>
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`w-full bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 rounded-t-xl transition-all duration-1000 ease-out origin-bottom shadow-[0_0_60px_rgba(251,191,36,0.5)]`}
                  style={{ height: startAnimate ? '230px' : '0px' }}
                >
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-sm md:text-base font-black transition-opacity duration-500 delay-1000 ${startAnimate ? 'opacity-100' : 'opacity-0'}`}>
                    74.2%
                  </span>
                </div>
              </div>
              <span className="text-white text-base font-black tracking-tighter">2026년</span>
            </div>
          </div>

          <Reveal delay={400} className="mt-10">
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold bg-black/40 backdrop-blur-sm inline-block px-4 py-1.5 rounded-lg border border-white/5">
              * 출처: 협약 기업 챗봇 도입 수요 조사 및 시장 분석 결과
            </p>
          </Reveal>
        </div>

        {/* Final CTA Text */}
        <Reveal delay={500} className="space-y-8 max-w-3xl">
          <p className="text-zinc-200 text-lg md:text-2xl font-medium leading-relaxed break-keep px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
            비전공자도, 초보자도 상관없습니다.<br />
            실무 중심의 AI 기술은 <span className="text-white font-bold underline decoration-yellow-400 decoration-4 underline-offset-8">당신의 연봉을 바꾸는 가장 확실한 카드</span>입니다.
          </p>
          <div className="pt-6">
            <h4 className="text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,1)]">
              비전공자도 경력자로!<br />
              <span className="text-yellow-400">한국직업능력교육원</span>
            </h4>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
