import DefaultLayout from '../layouts/DefaultLayout';
import GlitchText from '../components/GlitchText';
import SpotlightCard from '../components/SpotlightCard';

const CONTACTS = [
  {
    key: '电子邮件', val: 'z1337362917@163.com', icon: 'mail',
    accentText: 'text-tertiary-fixed-dim', border: 'border-tertiary-fixed-dim/20',
    hoverBorder: 'hover:border-tertiary-fixed-dim', hoverShadow: 'hover:shadow-[0_0_20px_rgba(60,215,255,0.2)]',
    valHover: 'group-hover:text-tertiary-fixed',
    spotlight: 'rgba(60, 215, 255, 0.2)' as const,
  },
  {
    key: '微信', val: '18706815755', icon: 'chat',
    accentText: 'text-primary-fixed-dim', border: 'border-primary-fixed-dim/20',
    hoverBorder: 'hover:border-primary-fixed-dim', hoverShadow: 'hover:shadow-[0_0_20px_rgba(0,228,121,0.2)]',
    valHover: 'group-hover:text-primary-fixed',
    spotlight: 'rgba(0, 228, 121, 0.2)' as const,
  },
  {
    key: '电话', val: '18706815755', icon: 'call',
    accentText: 'text-secondary', border: 'border-secondary/20',
    hoverBorder: 'hover:border-secondary', hoverShadow: 'hover:shadow-[0_0_20px_rgba(255,171,243,0.2)]',
    valHover: 'group-hover:text-secondary-fixed',
    spotlight: 'rgba(255, 171, 243, 0.2)' as const,
  },
];

export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* Title */}
      <section className="mb-stack-md border-l-4 border-secondary/60 pl-margin-sm py-4">
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-secondary tracking-tight">
          <GlitchText speed={1} enableShadows enableOnHover={false} className="inline-block">
            联系我
          </GlitchText>
          <br />
          <span className="text-tertiary-fixed-dim opacity-80">(CONNECTION_ESTABLISHED)</span>
        </h1>
        <p className="mt-4 font-code-sm text-code-sm text-outline tracking-widest uppercase">
          状态: 在线 | 协议: Neural_Handshake_v4.2 | 延迟: 12ms
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Contact Cards */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {CONTACTS.map(c => (
            <SpotlightCard
              key={c.key}
              spotlightColor={c.spotlight}
              className={`bg-surface-container-low/40 backdrop-blur-xl border ${c.border} p-6 flex items-center justify-between ${c.hoverBorder} group transition-all duration-300 ${c.hoverShadow}`}
            >
              <div>
                <div className={`${c.accentText} font-code-sm text-code-sm uppercase tracking-tighter mb-1`}>{c.key}</div>
                <div className={`font-label-md text-label-md text-on-surface ${c.valHover} transition-colors`}>{c.val}</div>
              </div>
              <span className={`material-symbols-outlined ${c.accentText} text-3xl group-hover:scale-110 transition-transform`}>{c.icon}</span>
            </SpotlightCard>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-8">
          <SpotlightCard
            spotlightColor="rgba(255, 171, 243, 0.15)"
            className="bg-surface-container-lowest border-2 border-outline-variant p-margin-md h-full"
          >
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary/40 opacity-50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-secondary/30" />
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-4">
              <span className="text-secondary">&gt;</span>
              发送消息
              <span className="terminal-cursor" />
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">你的姓名</label>
                <input
                  type="text"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-secondary/50 focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="请输入姓名..."
                />
              </div>
              <div className="space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">回复邮箱</label>
                <input
                  type="email"
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-secondary/50 focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="email@domain.io"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">消息内容</label>
                <textarea
                  rows={5}
                  className="w-full bg-surface-container-low border border-outline-variant text-on-surface p-4 focus:ring-2 focus:ring-secondary/50 focus:border-transparent outline-none transition-all placeholder:text-outline/50 font-code-sm"
                  placeholder="请输入消息..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-secondary/20 border border-secondary text-secondary px-12 py-4 chamfer-tr font-bold text-label-md flex items-center gap-2 hover:bg-secondary/30 hover:shadow-[0_0_20px_rgba(255,171,243,0.3)] transition-all group glitch-click"
                >
                  发送
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </DefaultLayout>
  );
}
