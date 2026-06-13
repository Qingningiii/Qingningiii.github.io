import { NavLink, useNavigate } from 'react-router-dom';

const NAV = [
  { to: '/',         label: '首页', end: true  },
  { to: '/about',    label: '关于', end: false },
  { to: '/projects', label: '项目', end: false },
  { to: '/skills',   label: '技能', end: false },
  { to: '/contact',  label: '联系', end: false },
];

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full z-[100] bg-surface-container-lowest/90 backdrop-blur-md border-b border-primary/20 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
      <div className="flex justify-between items-center px-margin-md py-4 w-full max-w-7xl mx-auto">
        <div
          className="font-headline-md text-headline-md text-primary-container drop-shadow-[0_0_8px_rgba(0,255,136,0.6)] font-bold tracking-tighter cursor-pointer"
          onClick={() => navigate('/')}
        >
          ZHANG_QU_OS_v1.0
        </div>
        <nav className="hidden md:flex items-center gap-stack-md font-label-md text-label-md uppercase tracking-widest">
          {NAV.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1 shadow-[0_5px_10px_-5px_rgba(0,255,136,0.5)]'
                  : 'text-on-surface-variant hover:text-primary transition-colors duration-300 hover:skew-x-[-2deg] hover:bg-primary/10 px-2'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-widest px-6 py-2 chamfer-tr font-bold glitch-click primary-glow hover:scale-105 transition-transform"
          onClick={() => navigate('/contact')}
        >
          LOGIN_SECURE
        </button>
      </div>
    </header>
  );
}
