import { Link, NavLink } from 'react-router-dom';

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-litecoin-400/40 bg-litecoin-400/10 text-xl font-black text-litecoin-300">
        Ł
      </div>
      <div>
        <div className="text-xl font-extrabold tracking-tight">
          <span className="text-white">Learn</span>
          <span className="text-litecoin-400">Litecoin</span>
        </div>
        <div className="text-xs text-slate-400">Merchant onboarding & education</div>
      </div>
    </Link>
  );
}

export function NavLinkItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition ${isActive ? 'text-litecoin-300' : 'text-slate-300 hover:text-litecoin-300'}`
      }
    >
      {children}
    </NavLink>
  );
}
