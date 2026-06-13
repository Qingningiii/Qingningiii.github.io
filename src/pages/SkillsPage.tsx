import DefaultLayout from '../layouts/DefaultLayout';
import GlitchText from '../components/GlitchText';

const SKILLS = [
  { accent: 'text-primary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-primary/30', hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary-fixed-dim', bold: 'LLM',    rest: '运营'       },
  { accent: 'text-primary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-primary/30', hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary-fixed-dim', bold: 'RAG',    rest: '系统架构'    },
  { accent: 'text-primary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-primary/30', hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary-fixed-dim', bold: 'AGENT',  rest: '自主智能体'  },
  { accent: 'text-secondary',         bg: 'bg-surface-container-highest', border: 'border-secondary/30', hoverBg: 'hover:bg-secondary/10', hoverBorder: 'hover:border-secondary',      bold: 'VIBE',   rest: 'Coding'     },
  { accent: 'text-primary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-primary/30', hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary-fixed-dim', bold: 'PROMPT', rest: 'Engineering' },
  { accent: 'text-tertiary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-tertiary-fixed-dim/30', hoverBg: 'hover:bg-tertiary-fixed-dim/10', hoverBorder: 'hover:border-tertiary-fixed-dim', bold: 'PYTHON', rest: 'Core' },
  { accent: 'text-primary-fixed-dim', bg: 'bg-surface-container-highest', border: 'border-primary/30', hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary-fixed-dim', bold: 'VECTOR', rest: 'Database'   },
  { accent: 'text-on-surface',        bg: 'bg-surface-container-highest', border: 'border-outline',    hoverBg: 'hover:bg-primary/10', hoverBorder: 'hover:border-primary',            bold: 'GIT',    rest: 'Ops'         },
];

const METHODOLOGY = [
  { icon: 'token',            title: '黄金数据集', en: 'Iterative Golden Set development for high-precision model benchmarking.' },
  { icon: 'refresh',          title: '坏案例循环', en: 'Closing the loop via continuous badcase analysis and re-tuning protocols.' },
  { icon: 'standard_cluster', title: '提示词标准化', en: 'Institutionalized prompt templates for consistent, deterministic LLM outputs.' },
];

export default function SkillsPage() {
  return (
    <DefaultLayout>
      {/* Title */}
      <section className="mb-stack-md border-l-4 border-primary-container pl-margin-sm py-4">
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-primary-fixed-dim tracking-tight">
          <GlitchText speed={1} enableShadows enableOnHover={false} className="inline-block">
            技能栈
          </GlitchText>
          <br />
          <span className="text-tertiary-fixed-dim opacity-80">(SKILL_MATRIX)</span>
        </h1>
        <p className="mt-4 font-code-sm text-code-sm text-outline tracking-widest uppercase">
          Status: Online | Protocol: Neural_Handshake_v4.2 | Latency: 12ms
        </p>
      </section>

      {/* Technical Stack */}
      <div className="bg-surface-container-low border border-outline-variant p-6 relative overflow-hidden group">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            技术栈
          </h2>
          <span className="font-code-sm text-code-sm text-outline-variant">ID: SKILL_SET_001</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map(s => (
            <div
              key={s.bold}
              className={`${s.bg} border ${s.border} px-4 py-2 ${s.hoverBg} ${s.hoverBorder} transition-all cursor-crosshair flex items-center gap-2`}
            >
              <span className={`${s.accent} font-bold`}>{s.bold}</span>
              <span className="text-on-surface-variant">{s.rest}</span>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="mt-stack-md grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          {METHODOLOGY.map(m => (
            <div key={m.title} className="border-t border-outline-variant pt-4">
              <h3 className="text-primary-fixed-dim font-label-md text-label-md mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">{m.icon}</span>
                {m.title}
              </h3>
              <p className="text-on-surface-variant text-code-sm">{m.en}</p>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all" />
      </div>
    </DefaultLayout>
  );
}
