import { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import GlitchText from '../components/GlitchText';

export default function ProjectsPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.glitch-click');
    const ups: Array<() => void> = [];
    els.forEach(el => {
      const down = () => { el.style.transform = `translate(${Math.random()*4-2}px,${Math.random()*4-2}px)`; };
      const up   = () => { el.style.transform = 'translate(0,0)'; };
      el.addEventListener('mousedown', down);
      el.addEventListener('mouseup', up);
      ups.push(() => { el.removeEventListener('mousedown', down); el.removeEventListener('mouseup', up); });
    });
    return () => ups.forEach(fn => fn());
  }, []);

  return (
    <DefaultLayout>
      {/* Page Header */}
      <header className="mb-stack-md border-l-4 border-primary-container pl-6 py-2">
        <div className="font-code-sm text-code-sm text-primary-fixed-dim opacity-70 mb-1">
          LOCAL_HOST // SESSION: PROJECT_HUB_0x3F
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase tracking-tight text-on-surface">
          <GlitchText speed={1.2} enableShadows enableOnHover className="inline-block">
            张超 · 项目案例
          </GlitchText>{' '}
          <span className="text-primary-container">(SECURE_ARCHIVE)</span>
        </h1>
      </header>

      {/* Main Project Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin-lg">
        {/* Primary Project */}
        <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 font-code-sm text-code-sm bg-primary-container text-on-primary-container uppercase">
            Main_Asset
          </div>
          <div className="flex flex-col h-full">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-fixed-dim mb-4">
              独立 AI 客户服务系统<br />
              <span className="text-on-surface-variant text-headline-md opacity-80">(LLM+RAG+Agent+Skills)</span>
            </h2>

            {/* Architecture layers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-stack-md">
              {[
                { id: 'L1_INPUT',  name: '输入清洗层', pct: '85%'  },
                { id: 'L2_SEARCH', name: '向量检索层', pct: '92%'  },
                { id: 'L3_REASON', name: '逻辑推理层', pct: '78%'  },
                { id: 'L4_SYNTH',  name: '合成输出层', pct: '95%'  },
              ].map(l => (
                <div key={l.id} className="bg-surface-container-high border-t-2 border-primary/40 p-4 transition-all hover:bg-primary/10">
                  <div className="font-code-sm text-code-sm text-primary-container mb-2">{l.id}</div>
                  <div className="font-label-md text-on-surface">{l.name}</div>
                  <div className="mt-4 h-1 w-full bg-primary/20">
                    <div className="h-full bg-primary-container" style={{ width: l.pct }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-grow bg-surface-container-highest/50 p-4 border border-primary/10 font-body-md text-body-md text-on-surface-variant italic">
              "系统通过多层感知与知识闭环，实现了从原始文本输入到高精度情感合成输出的端到端自动化。基于混合 RAG 架构，大幅降低了大型语言模型的幻觉率..."
            </div>
          </div>
        </div>

        {/* Right: Evolution + Stats */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Version Evolution */}
          <div className="bg-surface-container border border-outline-variant p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-label-md text-label-md uppercase text-primary-fixed-dim">SYSTEM_EVOLUTION</span>
              <span className="material-symbols-outlined text-primary-container">history</span>
            </div>
            <div className="space-y-4">
              {[
                { v: 'V1.0', label: 'ALPHA',  pos: '0%',   active: false },
                { v: 'V2.5', label: 'STABLE', pos: '25%',  active: false },
                { v: 'V5.0', label: 'ACTIVE', pos: '100%', active: true  },
              ].map(ver => (
                <div key={ver.v} className="flex items-center gap-4 group">
                  <div className={`w-12 font-code-sm ${ver.active ? 'text-primary-container' : 'text-on-surface-variant'}`}>{ver.v}</div>
                  <div className={`h-[2px] flex-grow relative ${ver.active ? 'bg-primary-container/30' : 'bg-outline-variant'}`}>
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        ver.active
                          ? 'left-full w-4 h-4 bg-primary-container rounded-sm animate-pulse shadow-[0_0_10px_rgba(0,255,136,1)]'
                          : `w-3 h-3 bg-surface border border-outline-variant rounded-full`
                      }`}
                      style={ver.active ? {} : { left: ver.pos }}
                    />
                  </div>
                  <div className={`font-label-md ${ver.active ? 'text-primary-container font-bold' : 'text-on-surface-variant opacity-40'}`}>{ver.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* System Metrics */}
          <div className="bg-surface-container border border-outline-variant p-6 grid grid-cols-2 gap-4">
            {[
              { key: 'Requests/Sec', val: '2.4k+' },
              { key: 'Latency',      val: '42ms'  },
              { key: 'Knowledge',    val: '10M+'  },
              { key: 'Precision',    val: '99.8%' },
            ].map(m => (
              <div key={m.key} className="p-3 border-l border-primary/30">
                <div className="font-code-sm text-primary opacity-50 uppercase">{m.key}</div>
                <div className="font-headline-md text-primary-container">{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Project + HUD */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Secondary Project */}
        <div className="bg-surface-container-low border border-on-secondary-fixed-variant/30 p-6 relative group overflow-hidden chamfer-tr">
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-code-sm text-secondary mb-1 uppercase tracking-widest">Secondary_Asset</div>
                <h3 className="font-headline-md text-secondary-fixed-dim">灵睿超声 3.0 (Smart Super Voice)</h3>
              </div>
              <span className="material-symbols-outlined text-secondary text-4xl">graphic_eq</span>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-on-surface-variant font-label-md">
                <span>Audio Synthesis Engine</span>
                <span className="text-secondary">READY</span>
              </div>
              <div className="w-full h-[1px] bg-secondary/20" />
              <p className="font-body-md text-on-surface-variant">
                新一代智能音频处理矩阵，融合多模态语音增强与语义对齐技术。在极低信噪比环境下仍能保持语音特征的高还原度。
              </p>
            </div>
            <button className="w-full border border-secondary text-secondary py-3 font-label-md uppercase tracking-widest hover:bg-secondary/10 hover:glow-magenta transition-all glitch-click">
              DECRYPT_DETAILS
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
            {[4, 8, 6, 10].map((h, i) => (
              <div key={i} className="w-1 bg-secondary" style={{ height: `${h * 4}px` }} />
            ))}
          </div>
        </div>

        {/* Terminal HUD Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Donut */}
          <div className="bg-surface-container border border-outline-variant p-4 flex flex-col justify-center items-center text-center">
            <div className="font-code-sm text-on-surface-variant uppercase mb-2">Neural_Core_Load</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-outline-variant" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeWidth="2" />
                <circle className="text-primary-container drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]" cx="48" cy="48" fill="none" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="80" strokeWidth="6" />
              </svg>
              <span className="absolute font-headline-md text-primary">68%</span>
            </div>
          </div>

          {/* Signal Log */}
          <div className="bg-surface-container border border-outline-variant p-4 flex flex-col">
            <div className="font-code-sm text-on-surface-variant uppercase mb-4">Signal_Log</div>
            <div className="space-y-1 font-code-sm text-[10px] text-primary-fixed-dim/60">
              {[
                '[OK] AUTH_TOKEN_VALID',
                '[OK] KNOWLEDGE_BASE_LINKED',
                '[WARN] LATENCY_SPIKE_TOKYO',
                '[OK] SECURE_CONNECTION_ESTABLISHED',
              ].map(log => (
                <div key={log}>&gt; {log}</div>
              ))}
              <div className="animate-pulse">&gt; _</div>
            </div>
          </div>

          {/* Global Distribution */}
          <div className="col-span-2 bg-surface-container border border-outline-variant p-4">
            <div className="flex justify-between items-center font-code-sm text-on-surface-variant mb-4">
              <span>GLOBAL_DISTRIBUTION</span>
              <span className="text-primary-container">LIVE</span>
            </div>
            <div className="h-24 bg-surface-container-highest/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating FAB */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center chamfer-tr shadow-[0_0_15px_rgba(0,255,136,0.5)] cursor-pointer hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">support_agent</span>
        </div>
      </div>
    </DefaultLayout>
  );
}
