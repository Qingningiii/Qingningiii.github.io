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

const CONTACTS = [
  {
    key: 'Electronic_Mail', val: 'CHAO.ZHANG@NEURAL.TECH', icon: 'mail',
    accentText: 'text-tertiary-fixed-dim', border: 'border-tertiary-fixed-dim/20',
    hoverBorder: 'hover:border-tertiary-fixed-dim', hoverShadow: 'hover:shadow-[0_0_20px_rgba(60,215,255,0.2)]',
    valHover: 'group-hover:text-tertiary-fixed',
  },
  {
    key: 'Signal_Handle', val: 'WECHAT: ZC_AI_CORE', icon: 'chat',
    accentText: 'text-primary-fixed-dim', border: 'border-primary-fixed-dim/20',
    hoverBorder: 'hover:border-primary-fixed-dim', hoverShadow: 'hover:shadow-[0_0_20px_rgba(0,228,121,0.2)]',
    valHover: 'group-hover:text-primary-fixed',
  },
  {
    key: 'Comms_Line', val: '+86 1XX-XXXX-8888', icon: 'call',
    accentText: 'text-secondary', border: 'border-secondary/20',
    hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,171,243,0.2)]',
    valHover: 'group-hover:text-secondary-fixed',
  },
];

export default function SkillsPage() {
  return (
    <DefaultLayout>
      {/* Title */}
      <section className="mb-stack-md border-l-4 border-primary-container pl-margin-sm py-4">
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-primary-fixed-dim tracking-tight">
          <GlitchText speed={1} enableShadows enableOnHover className="inline-block">
            张超 · 技能与联系
          </GlitchText>
          <br />
          <span className="text-tertiary-fixed-dim opacity-80">(CONNECTION_ESTABLISHED)</span>
        </h1>
        <p className="mt-4 font-code-sm text-code-sm text-outline tracking-widest uppercase">
          Status: Online | Protocol: Neural_Handshake_v4.2 | Latency: 12ms
        </p>
      </section>

      {/* Main Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

        {/* Technical Stack */}
        <div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-6 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              Technical Stack
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

        {/* Contact Cards */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {CONTACTS.map(c => (
            <div
              key={c.key}
              className={`bg-surface-container-low/40 backdrop-blur-xl border ${c.border} p-6 flex items-center justify-between ${c.hoverBorder} group transition-all duration-300 ${c.hoverShadow}`}
            >
              <div>
                <div className={`${c.accentText} font-code-sm text-code-sm uppercase tracking-tighter mb-1`}>{c.key}</div>
                <div className={`font-label-md text-label-md text-on-surface ${c.valHover} transition-colors`}>{c.val}</div>
              </div>
              <span className={`material-symbols-outlined ${c.accentText} text-3xl group-hover:scale-110 transition-transform`}>{c.icon}</span>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-12 mt-stack-md">
          <div className="bg-surface-container-lowest border-2 border-outline-variant p-margin-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary-container opacity-50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary-container" />
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-4">
              <span className="text-primary-fixed-dim">&gt;</span>
              发送加密请求
              <span className="terminal-cursor" />
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md max-w-4xl">
              <div className="space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">User_Identity</label>
                <input
                  type="text"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="ENTER NAME..."
                />
              </div>
              <div className="space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">Return_Address</label>
                <input
                  type="email"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="EMAIL@DOMAIN.IO"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">Message_Payload</label>
                <textarea
                  rows={4}
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="INITIATING TRANSMISSION..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary-container px-12 py-4 chamfer-tr font-bold text-label-md flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all group glitch-click"
                >
                  EXECUTE_SEND
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
