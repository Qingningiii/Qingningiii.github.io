import { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import GlitchText from '../components/GlitchText';

export default function AboutPage() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (Math.random() > 0.98) {
        const glitch = document.createElement('div');
        glitch.className = 'fixed pointer-events-none z-[2000] bg-primary/20 w-8 h-[1px]';
        glitch.style.left = e.clientX + 'px';
        glitch.style.top = e.clientY + 'px';
        document.body.appendChild(glitch);
        setTimeout(() => glitch.remove(), 100);
      }
    };
    document.addEventListener('mousemove', handler);
    return () => document.removeEventListener('mousemove', handler);
  }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 space-y-stack-md">
          <div className="flex items-center gap-4 text-primary-fixed-dim">
            <span className="font-code-sm text-code-sm border border-primary-fixed-dim px-2 py-1 uppercase">
              User_Status: Authorized
            </span>
            <div className="h-[1px] flex-grow bg-primary-fixed-dim/30" />
          </div>
          <h1 className="font-display-lg text-display-lg leading-none tracking-tighter">
            <GlitchText
              speed={1}
              enableShadows
              enableOnHover={false}
              className="inline-block"
            >
              关于我
            </GlitchText>{' '}
            <span className="text-primary-fixed-dim opacity-50 font-label-md text-headline-md">· BIOMETRIC_PROFILE</span>
          </h1>
          <h2 className="font-headline-lg text-headline-lg text-on-surface-variant">
            智能流的构建者 <span className="text-secondary animate-pulse">_</span>
          </h2>
          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant/80">
            专注于 AI 与 SaaS 领域的交汇点。通过逻辑定义与 UX 架构，将复杂的神经网络能力转化为直观、可规模化的产品体验。
          </p>
        </div>

        {/* Avatar */}
        <div className="md:col-span-4 relative flex justify-center">
          <div className="w-64 h-64 bg-surface-container-high border-2 border-primary/20 chamfer-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary-fixed-dim text-6xl group-hover:scale-110 transition-transform duration-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                batch_prediction
              </span>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-code-sm text-code-sm text-primary-fixed-dim tracking-widest uppercase">
              ID: 8824-ZC
            </div>
          </div>
          <div className="absolute -z-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Career + Methodology */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Career Timeline */}
        <div className="space-y-stack-md">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-secondary">history</span>
            <h3 className="font-headline-md text-headline-md uppercase tracking-tight">CAREER_LOG</h3>
          </div>
          <div className="relative pl-8 space-y-12">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] circuit-line opacity-40" />
            {/* Node 1 */}
            <div className="relative group">
              <div className="absolute -left-[35px] top-1 w-4 h-4 bg-background border-2 border-primary-fixed-dim rounded-full shadow-[0_0_10px_rgba(0,255,136,0.6)] z-10" />
              <div className="p-6 bg-surface-container-low border-l-4 border-primary-fixed-dim chamfer-tr">
                <span className="font-code-sm text-code-sm text-primary-fixed-dim">2023 - 至今</span>
                <h4 className="font-headline-md text-headline-md mt-2">AI 产品经理 (AI_PM)</h4>
                <p className="text-on-surface-variant mt-2">引领企业级生成式 AI 转型，构建多模态工作流与自动化代理系统。</p>
              </div>
            </div>
            {/* Node 2 */}
            <div className="relative group">
              <div className="absolute -left-[35px] top-1 w-4 h-4 bg-background border-2 border-secondary rounded-full shadow-[0_0_10px_rgba(255,171,243,0.6)] z-10" />
              <div className="p-6 bg-surface-container-low border-l-4 border-secondary/50 chamfer-tr">
                <span className="font-code-sm text-code-sm text-secondary">2019 - 2023</span>
                <h4 className="font-headline-md text-headline-md mt-2">SaaS 产品经理 (SaaS_PM)</h4>
                <p className="text-on-surface-variant mt-2">负责复杂 B2B 系统的生命周期管理，主导多项核心模块从 0 到 1 的全过程。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="space-y-stack-md">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-primary-fixed-dim">architecture</span>
            <h3 className="font-headline-md text-headline-md uppercase tracking-tight">METHODOLOGY</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: '[01]', title: '逻辑定义',   en: 'Define core business logic and AI constraints.'     },
              { id: '[02]', title: '用户流映射', en: 'Mapping fluid multi-state user journeys.'            },
              { id: '[03]', title: '快速原型',   en: 'Iterative prototyping with rapid cycles.'            },
              { id: '[04]', title: '规模化打磨', en: 'Polish for scale, reliability, and UX edge.'         },
            ].map(m => (
              <div key={m.id} className="p-4 border border-outline-variant hover:border-primary-fixed-dim transition-colors group">
                <div className="font-code-sm text-code-sm text-primary-fixed-dim mb-2">{m.id}</div>
                <h5 className="font-headline-md text-body-lg font-bold group-hover:translate-x-1 transition-transform">{m.title}</h5>
                <p className="text-code-sm text-on-surface-variant mt-1 opacity-70">{m.en}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-surface-container border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
            <p className="font-body-md text-on-surface-variant italic">
              "在混沌中寻找结构，在算法中植入人性。我的目标是让每一行代码转化的功能都具备直觉般的丝滑。"
            </p>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="space-y-stack-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-secondary">verified_user</span>
          <h3 className="font-headline-md text-headline-md uppercase tracking-tight">CORE_STRENGTHS</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'psychology', iconColor: 'text-primary-fixed-dim', borderColor: 'border-primary/30',
              hoverBg: 'group-hover:bg-primary/10',
              title: 'AI 产品 0-1 落地',
              desc: '从市场空缺发现到模型选型、调优与工程化落地的全链路交付能力。',
              tags: [
                { label: 'LLM_OPS',    style: 'bg-primary/5 border-primary/20 text-primary-fixed-dim' },
                { label: 'PROMPT_ENG', style: 'bg-primary/5 border-primary/20 text-primary-fixed-dim' },
              ],
            },
            {
              icon: 'terminal', iconColor: 'text-secondary', borderColor: 'border-secondary/30',
              hoverBg: 'group-hover:bg-secondary/10',
              title: '技术沟通能力',
              desc: '桥接商业需求与工程边界，能够与开发者进行深度技术对齐与架构博弈。',
              tags: [
                { label: 'API_ARCH',  style: 'bg-secondary/5 border-secondary/20 text-secondary' },
                { label: 'DATA_FLOW', style: 'bg-secondary/5 border-secondary/20 text-secondary' },
              ],
            },
            {
              icon: 'layers', iconColor: 'text-primary-fixed-dim', borderColor: 'border-primary/30',
              hoverBg: 'group-hover:bg-primary/10',
              title: 'UX 架构设计',
              desc: '深度理解人类认知负担，构建即使在复杂 AI 场景下依然简洁的设计系统。',
              tags: [
                { label: 'DESIGN_SYSTEMS', style: 'bg-primary/5 border-primary/20 text-primary-fixed-dim' },
                { label: 'IA_MAPPING',     style: 'bg-primary/5 border-primary/20 text-primary-fixed-dim' },
              ],
            },
          ].map(s => (
            <div key={s.title} className="holographic-glass p-8 chamfer-tr flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-full border ${s.borderColor} flex items-center justify-center mb-6 ${s.hoverBg} transition-colors`}>
                <span className={`material-symbols-outlined ${s.iconColor} text-3xl`}>{s.icon}</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">{s.title}</h4>
              <p className="text-on-surface-variant text-body-md">{s.desc}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {s.tags.map(tag => (
                  <span key={tag.label} className={`text-code-sm px-2 py-1 border ${tag.style}`}>{tag.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
