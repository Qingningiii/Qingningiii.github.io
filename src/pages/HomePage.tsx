import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import GlitchText from '../components/GlitchText';

export default function HomePage() {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const text = '深耕 SaaS 规模化与 LLM 架构的严谨 AI 产品经理。';
    let index = 0;
    const el = typewriterRef.current;
    if (!el) return;
    el.textContent = '';
    const timer = setInterval(() => {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>('.glitch-click');
    const handlers: Array<() => void> = [];
    buttons.forEach(btn => {
      const handler = () => {
        btn.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => { btn.style.transform = ''; }, 100);
      };
      btn.addEventListener('mouseenter', handler);
      handlers.push(() => btn.removeEventListener('mouseenter', handler));
    });
    return () => handlers.forEach(fn => fn());
  }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-8 space-y-stack-md">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-code-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
            System Online: Neural PM Interface
          </div>
          <GlitchText
            speed={0.8}
            enableShadows
            enableOnHover={false}
            className="font-display-lg text-display-lg leading-tight lg:leading-[1.1] text-primary"
          >
            将复杂 AI 逻辑转化为直观设计
          </GlitchText>
          <div className="bg-surface-container-low border-l-4 border-primary-fixed-dim p-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            <span ref={typewriterRef} />
            <span className="cursor-blink" />
          </div>
          <div className="flex gap-stack-md pt-4">
            <button
              className="bg-primary-container text-on-primary-container px-8 py-3 chamfer-tr font-bold font-label-md text-label-md primary-glow glitch-click"
              onClick={() => navigate('/projects')}
            >
              INITIATE_PROJECT
            </button>
            <button
              className="border-2 border-secondary text-secondary px-8 py-3 chamfer-tr font-bold font-label-md text-label-md hover:bg-secondary/10 transition-colors glitch-click"
              onClick={() => navigate('/about')}
            >
              VIEW_ARCHIVE
            </button>
          </div>
        </div>

        {/* UID Card */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative w-full aspect-square bg-surface-container border border-outline-variant chamfer-tr p-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full overflow-hidden" />
            <div className="absolute bottom-6 right-6 font-code-sm text-primary-fixed-dim bg-surface-container-lowest/80 px-2 py-1 border border-primary/30">
              UID: ZHANG_C_0X7F
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {[
          { icon: 'automation', id: '001_EFFICIENCY', value: '72%',  label: '自助服务率'        },
          { icon: 'psychology', id: '002_ACCURACY',   value: '90%',  label: '问答准确率'        },
          { icon: 'speed',      id: '003_LATENCY',    value: '4.8s', label: '延迟下限 (P99)'    },
          { icon: 'group',      id: '004_USER_BASE',  value: '30W+', label: '日活跃用户 (MAU)'  },
        ].map(m => (
          <div key={m.id} className="bg-surface-container-low p-margin-sm border-b-2 border-primary-container/20 hover:border-primary-container transition-all group terminal-glow">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
              <span className="font-code-sm text-outline">{m.id}</span>
            </div>
            <div className="font-display-lg text-primary-container text-5xl mb-2">{m.value}</div>
            <div className="font-label-md text-on-surface-variant uppercase tracking-tighter">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto lg:h-[600px]">
        {/* LLM Architecture */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant p-margin-md flex flex-col justify-between chamfer-tr relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="font-headline-lg text-primary mb-stack-md flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed-dim">token</span>
              LLM 架构集成
            </h3>
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              深耕基于 RAG (检索增强生成) 的知识库构建，优化向量数据库检索效率，实现高度可控的 AI 对话体验。通过多模型调度策略，在成本与性能间取得极致平衡。
            </p>
          </div>
          <div className="relative z-10 flex gap-4 mt-8 overflow-x-auto pb-4">
            {['GPT-4_TURBO', 'CLAUDE-3_OPUS', 'VECTOR_DB_PINECONE', 'LANGCHAIN_PRO'].map(t => (
              <span key={t} className="bg-surface-container-highest px-4 py-2 border border-outline font-code-sm whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>

        {/* Core Logic */}
        <div className="md:col-span-4 grid grid-rows-2 gap-gutter">
          {[
            { id: 'CORE_LOGIC_01', title: 'SaaS 规模化',  desc: '从 0 到 1 构建可扩展的产品体系，支撑百万级并发请求。' },
            { id: 'CORE_LOGIC_02', title: '严谨产品管理', desc: '数据驱动决策，全生命周期管控，确保逻辑无死角。' },
          ].map(c => (
            <div key={c.id} className="bg-surface-container border border-outline-variant p-margin-md chamfer-tr group hover:bg-primary/5 transition-colors">
              <div className="font-label-md text-secondary-fixed-dim mb-4 tracking-widest font-bold">{c.id}</div>
              <h4 className="font-headline-md text-primary mb-2">{c.title}</h4>
              <p className="font-body-md text-on-surface-variant">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
