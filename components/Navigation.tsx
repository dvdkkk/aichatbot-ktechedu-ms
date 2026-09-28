import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ExternalLink } from 'lucide-react';

const CONSULTATION_URL = "https://naver.me/FG794pnA";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isConsultation = false) => {
    if (isConsultation) {
      e.preventDefault();
      window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 모바일 기기 여부 확인
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
    if (!isMobile) {
      // PC 환경: 상담신청 주소로 새창 열기
      e.preventDefault();
      window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
    }
    // 모바일 환경: 기본 tel:01046312547 동작 유지
  };

  const navLinks = [
    { name: '비전 & 혜택', href: '#vision' },
    { name: '과정소개', href: '#courses' },
    { name: '취업지원', href: '#employment-support' },
    { name: '취업현황', href: '#employment' },
    { name: '수강후기', href: '#reviews' },
    { name: '상담신청', href: CONSULTATION_URL, isExternal: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-lg md:text-2xl font-black tracking-tighter text-white"
        >
          <span className="text-yellow-400">한국직업능력교육원</span> 안산
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, link.href, !!link.isExternal)}
              className={`text-lg font-medium transition-colors ${
                link.name === '상담신청' 
                  ? 'text-yellow-400 font-bold flex items-center gap-1 hover:text-yellow-300' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <span>{link.name}</span>
              {link.isExternal && <ExternalLink size={14} className="opacity-80" />}
            </a>
          ))}
          <a 
            href="tel:01046312547" 
            onClick={handlePhoneClick}
            title="상담신청"
            className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105 cursor-pointer shadow-md"
          >
            <PhoneCall size={20} />
            010-4631-2547
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className={`text-base font-medium py-2 border-b border-zinc-800 flex items-center justify-between ${
                link.name === '상담신청' 
                  ? 'text-yellow-400 font-bold' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
              onClick={(e) => handleNavClick(e, link.href, !!link.isExternal)}
            >
              <span>{link.name}</span>
              {link.isExternal && <ExternalLink size={14} />}
            </a>
          ))}
          <a 
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black text-center py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-yellow-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>무료상담 신청하기</span>
            <ExternalLink size={16} />
          </a>
        </div>
      )}
    </nav>
  );
};
