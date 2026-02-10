
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { BookOpen, Database, Smartphone, Brain, Rocket, CheckCircle2, Code2 } from 'lucide-react';

// Animation Component
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 mb-4">
            <Code2 size={14} />
            <span className="text-xs font-bold tracking-wide uppercase">CURRICULUM</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            최종 프로젝트를 향한<br />
            <span className="text-yellow-400">실무위주 체계적인 커리큘럼</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            기초 문법부터 인공지능 플랫폼 구축까지,<br />
            현업에서 즉시 활용 가능한 실전 기술을 마스터합니다.
          </p>
        </Reveal>

        <div className="space-y-24">
          {/* Phase 1 */}
          <CurriculumPhase 
            phase="PHASE 1"
            title="Python"
            subtitle="AI 인공지능 기반 프로그램을 개발하기 위한 필수 언어"
            icon={BookOpen}
            image="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2832&auto=format&fit=crop"
            projectTitle="AI 챗봇이 전 세계 웹에서 데이터를 추출하고 분석하는 프로그램 개발"
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "01 Python 구동", desc: "Python을 설치하고 IDE(통합 개발환경) 설정 방법 학습" },
                  { label: "02 코딩 기본 문법", desc: "변수, 자료형, 연산자 주석 등을 통해 Python 기본 문법 학습" },
                  { label: "03 제어문", desc: "조건문과 반복문을 사용하여 프로그램의 흐름 제어 방법 학습" },
                  { label: "04 함수", desc: "함수 정의 및 호출 방법과 매개변수, 반환값 학습" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "모듈", desc: "표준 라이브러리 및 사용자 정의 모듈을 사용하는 방법 학습" },
                  { label: "패키지", desc: "패키지를 생성하고 사용하는 방법과 코드 재사용성을 높이는 기법 학습" },
                  { label: "클래스와 객체", desc: "객체 지향 프로그래밍 코드와 구조 개선 학습" },
                  { label: "예외 처리", desc: "try, expect 구문을 통해 오류를 처리하는 방법 학습" }
                ]
              }
            ]}
          />

          {/* Phase 2 */}
          <CurriculumPhase 
            phase="PHASE 2"
            title="MariaDB(DB프로그램)" 
            subtitle="데이터베이스를 저장하고 관리하는 DB 프로그램"
            icon={Database}
            image="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop"
            projectTitle="챗봇이 사용자의 질문에 답변하기 위한 데이터베이스 구축"
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "MariaDB 구동", desc: "MariaDB 서버 설치 및 기본 설정 방법 학습" },
                  { label: "RDBMS 개념", desc: "스키마, 테이블, 레코드의 기본 개념 이해" },
                  { label: "SQL 기초", desc: "SQL 기초 문법 학습 (DDL, DML, DCL)" },
                  { label: "트랜잭션과 Lock", desc: "동시성 제어, 무결성을 유지하기 위한 장치 학습" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "JOIN, 서브쿼리", desc: "JOIN 기법과 서브쿼리를 사용하여 SQL 확장" },
                  { label: "그룹화 및 정렬", desc: "집계를 위한 함수 및 그룹화 방법 학습" },
                  { label: "보안 기초", desc: "계정 및 권한 관리" },
                  { label: "성능 최적화", desc: "index 개념, 실행 계획(Explain) 이해" },
              
                ]
              }
            ]}
          />

          {/* Phase 3 */}
          <CurriculumPhase 
            phase="PHASE 3"
            title="AI 챗봇 앱 개발"
            subtitle="Django를 활용하여 AI 챗봇 앱을 개발하고 MariaDB 연동"
            icon={Smartphone}
            image="https://postfiles.pstatic.net/MjAyNjAyMDlfMTA1/MDAxNzcwNjIzNDA3NDM0.FcqW2l5yGgtXs1clsTv1xc-dvZBu5VNqaq5IRjR6d9wg.tpYY8LnTBpTFF4o2YAgvvRYBvNwel9Pp3QupCOG2Mwog.JPEG/%ED%95%9C%EC%A7%81%EA%B5%90-%EC%B1%97%EB%B4%874.jpg?type=w966"
            projectTitle="AI 챗봇 UI 구성과 앱 개발 및 구동"
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "개발 환경 구축", desc: "Python 가상환경 구축, Django 프로젝트 및 앱 생성" },
                  { label: "MTV 아키텍처 이해", desc: "Model / View / Template 역할 이해" },
                  { label: "UI 구현", desc: "HTML, CSS, Django Template을 활용하여 페이지 구성" },
                  { label: "MariaDB 연동", desc: "Model 정의 및 마이그레이션, ORM 기본 CRUD 실습" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "데이터 처리/비즈니스 로직", desc: "ORM을 활용한 복합 쿼리 처리 및 트랜잭션 적용" },
                  { label: "사용자 인증 및 권한관리", desc: "로그인 / 로그아웃 및 인증 시스템 구현" },
                  { label: "웹 애플리케이션 통합기능", desc: "외부 API연동, 세션 / 쿠키 처리" },
                  { label: "테스트 및 배포 기초", desc: "Django TestCase 기반 테스트 및 결함 수정" }
                ]
              }
            ]}
          />

          {/* Phase 4 */}
          <CurriculumPhase 
            phase="PHASE 4"
            title="인공지능 플랫폼 개발 및 구현"
            subtitle="데이터 통계를 기반으로 한 AI 챗봇의 예측 기능 구현"
            icon={Brain}
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
            projectTitle="머신러닝기반 AI 챗봇 예측 기능 구현"
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "AI 요구사항 분석", desc: "문제 정의, 기술 요구사항 정리" },
                  { label: "AI 플랫폼 설계", desc: "데이터 흐름 설계 및 모듈의 구조 정의 학습" },
                  { label: "AI 시스템 구축 계획", desc: "데이터 / 모델 버전 관리 및 저장 방식 학습" },
                  { label: "데이터 준비 및 전처리", desc: "결측치/이상치 처리, 인코딩/스케일링 학습" }
                ]
              },
              {
                title: "STEP 2 고급",
                items: [
                  { label: "AI 기능 구현", desc: "로지스틱 회귀, 결정 트리 등 알고리즘 학습" },
                  { label: "AI 기능 모듈화", desc: "전처리 / 학습 / 예측 코드의 모듈화 실습" },
                  { label: "인터페이스 구현", desc: "예측 API 설계 및 웹 서버와 연동 학습" }
                ]
              }
            ]}
          />

          {/* Phase 5 Final */}
          <Reveal>
            <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-8 md:p-12 overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               
               <div className="text-center mb-12 relative z-10">
                 <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 rounded-full text-sm mb-4">PHASE 5</div>
                 <h3 className="text-4xl md:text-5xl font-black text-white mb-4">최종 프로젝트 <span className="text-yellow-400">(AI 챗봇 구동)</span></h3>
                 <p className="text-gray-400">AI챗봇개발하고 포트폴리오를 완성합니다.</p>
               </div>

               <div className="grid lg:grid-cols-3 gap-6 relative z-10">
                 <FinalProjectCard 
                    num="01"
                    title="Django 기반 챗봇 시스템 구축"
                    items={[
                      "대화형 웹 챗봇 서비스 구현",
                      "의도 분류(ML) 후 예측, 추천, FAQ 응답 제공",
                      "응답 결과와 로그를 DB 서버에 저장하는 통합형 서비스"
                    ]}
                 />
                 <FinalProjectCard 
                    num="02"
                    title="DB관리 웹 구현"
                    items={[
                      "DB를 효율적으로 관리하기 위한 웹 기반 시스템",
                      "DB 등록 / 조회 / 수정 기능 구현",
                      "서버 기반 CRUD 웹 애플리케이션 구축"
                    ]}
                 />
                 <FinalProjectCard 
                    num="03"
                    title="머신러닝 예측/분석 프로그램"
                    items={[
                      "DB를 수집·전처리하여 가능성을 예측하는 모델 구현",
                      "로지스틱 회귀, 결정 트리 등의 알고리즘 적용",
                      "학습된 모델을 활용한 예측 결과 도출 및 AI 기능 구현"
                    ]}
                 />
               </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

const CurriculumPhase: React.FC<{
  phase: string;
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  projectTitle: string;
  steps: { title: string; items: { label: string; desc: string }[] }[];
}> = ({ phase, title, subtitle, icon: Icon, image, projectTitle, steps }) => {
  return (
    <Reveal>
      {/* lg:flex-row를 적용하여 데스크탑에서 Visual(왼쪽), Content(오른쪽) 순서로 배치 */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Visual Side (Image & Title) - 첫 번째 요소이므로 왼쪽에 배치됨 */}
        <div className="lg:w-1/3 space-y-6">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full border border-zinc-800 group shadow-2xl">
            <img 
              src={image} 
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-400 rounded-xl text-black">
                  <Icon size={24} />
                </div>
                <span className="text-yellow-400 font-bold tracking-widest">{phase}</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-2 leading-tight">{title}</h3>
              <p className="text-gray-300 font-medium leading-relaxed">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content Side (Steps & Project) - 두 번째 요소이므로 오른쪽에 배치됨 */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="grid md:grid-cols-2 gap-6 flex-grow mb-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400/30 transition-colors">
                <h4 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">{step.title}</h4>
                <ul className="space-y-6">
                  {step.items.map((item, i) => (
                    <li key={i} className="group">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-yellow-400 font-bold text-sm group-hover:text-white transition-colors">{item.label}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mini Project Banner */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-zinc-900 rounded-xl border border-zinc-700 shrink-0 text-yellow-400 group-hover:scale-110 transition-transform">
              <Rocket size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">Project</span>
              <p className="text-white font-bold text-base md:text-lg leading-tight">"{projectTitle}"</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const FinalProjectCard: React.FC<{ num: string; title: string; items: string[] }> = ({ num, title, items }) => (
  <div className="bg-black/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-400 transition-colors group h-full">
    <div className="flex justify-between items-start mb-6">
      <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
      <span className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors select-none">{num}</span>
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
          <CheckCircle2 size={16} className="text-zinc-600 mt-0.5 shrink-0 group-hover:text-yellow-400 transition-colors" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
