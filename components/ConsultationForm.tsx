import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ExternalLink, CheckCircle2, Sparkles, ArrowRight, Calendar } from 'lucide-react';

const CONSULTATION_URL = "https://naver.me/FG794pnA";

// 스크롤 애니메이션 컴포넌트
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
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 모바일 기기 여부 확인 (UserAgent 또는 1024px 미만 뷰포트)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
    if (!isMobile) {
      // PC 환경에서는 상담신청 주소로 새창 열기
      e.preventDefault();
      window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
    }
    // 모바일 환경에서는 기본 href="tel:..." 로 전화 연결
  };

  return (
    <section id="consultation" className="py-12 md:py-16 bg-yellow-400 text-black scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/20 text-black font-bold text-xs mb-4">
                <Sparkles size={14} className="text-black" />
                <span>1:1 맞춤 무료 진로 컨설팅</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                망설이지 마세요.<br/>
                AI 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg md:text-xl font-medium text-black/85 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업 및 교육과정까지<br/>
                <span className="border-b-2 border-black font-bold">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-75">교육문의 </p>
                    <a 
                      href="tel:01046312547" 
                      onClick={handlePhoneClick}
                      className="text-2xl md:text-3xl font-black block hover:opacity-75 transition-opacity cursor-pointer"
                      title="클릭 시 상담 연결"
                    >
                      010-4631-2547
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-75">교육장소</p>
                    <p className="text-xl font-bold">안산캠퍼스</p>
                  </div>
                </div>
              </div>

              <p className="font-bold text-base md:text-lg mt-6 text-black/90">
                여러분의 새로운 도약과 꿈을 끝까지 응원합니다!
              </p>
            </Reveal>
          </div>

          {/* Right Column: 새로 생성된 상담신청 디자인 카드 & 버튼 (좌우 나란히 배치) */}
          <Reveal delay={200} className="w-full">
            <div className="bg-black text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-zinc-800 relative overflow-hidden group">
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10 space-y-6">
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-wider">
                    <Calendar size={13} />
                    <span>네이버 간편 예약</span>
                  </div>
                  <span className="text-xs font-semibold text-yellow-400/90 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    선착순 마감 임박
                  </span>
                </div>

                {/* Card Title & Desc */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                    빠르고 간편한 <br/>
                    <span className="text-yellow-400">온라인 상담신청</span>
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    복잡한 절차 없이 간편하게 상담을 예약하세요. 전문 상담원이 교육과정 및 국비지원 혜택을 1:1 맞춤으로 친절히 안내해 드립니다.
                  </p>
                </div>

                {/* Benefit Points */}
                <div className="bg-zinc-900/90 rounded-2xl p-4 md:p-5 border border-zinc-800 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                    <span>국비지원 100% 무료 수강 자격 여부 진단</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                    <span>비전공자·초보자를 위한 맞춤 취업 로드맵 설계</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                    <span>매월 최대 80만원 훈련장려금 & 수당 안내</span>
                  </div>
                </div>

                {/* Primary CTA Button (상담신청 버튼 생성 & 새창 링크) */}
                <a
                  href={CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-black text-lg md:text-xl py-4 md:py-5 px-6 rounded-2xl shadow-[0_8px_25px_rgba(250,204,21,0.35)] hover:shadow-[0_12px_35px_rgba(250,204,21,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group/btn"
                >
                  <span>상담신청 바로가기</span>
                  <ExternalLink size={20} className="transition-transform group-hover/btn:translate-x-1" />
                </a>

                <p className="text-center text-[11px] md:text-xs text-zinc-500">
                  * 버튼을 누르시면 네이버 상담 예약 페이지가 새 창으로 열립니다.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
