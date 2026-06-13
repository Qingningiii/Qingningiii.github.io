import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0') + ':' +
        now.getSeconds().toString().padStart(2, '0')
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const links1 = ['LLM_CORE', 'RAG_PIPELINE', 'VECTOR_DB'];
  const links2 = ['STATION_X', 'SIGNAL_LOG'];

  return (
    <footer className="bg-surface-container-lowest border-t-2 border-secondary/30 pt-margin-md pb-margin-sm mt-margin-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-lg max-w-full">
        {/* Brand */}
        <div className="space-y-4">
          <div className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest">
            ZHANG_QU // NEURAL_PM_SYSTEMS
          </div>
          <p className="font-code-sm text-on-surface-variant opacity-70">
            Terminal Access: Secure Port 8080<br />
            Status: OPERATIONAL_v1.0.4
          </p>
          <div className="font-code-sm text-secondary-fixed-dim mt-8">
            © 2024 ZHANG_QU // ALL_RIGHTS_RESERVED
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            {links1.map(l => (
              <a key={l} className="font-code-sm text-on-surface-variant opacity-70 hover:text-secondary-fixed hover:opacity-100 transition-opacity cursor-pointer" href="#">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {links2.map(l => (
              <a key={l} className="font-code-sm text-on-surface-variant opacity-70 hover:text-secondary-fixed hover:opacity-100 transition-opacity cursor-pointer" href="#">{l}</a>
            ))}
          </div>
        </div>

        {/* Clock */}
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:scale-110 transition-transform">terminal</span>
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:scale-110 transition-transform">hub</span>
            <span className="material-symbols-outlined text-secondary cursor-pointer hover:scale-110 transition-transform">database</span>
          </div>
          <div className="bg-secondary/10 border border-secondary/30 p-2 text-secondary font-code-sm mt-4">
            SIGNAL_STRENGTH: 100%
          </div>
          <div className="text-right mt-4">
            <div className="font-code-sm text-secondary-fixed-dim opacity-40 uppercase">SYSTEM_TIME</div>
            <div className="font-label-md text-secondary text-xl">{time}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
