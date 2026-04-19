import { Link } from 'react-router-dom';
import { Brand, NavLinkItem } from './NavLinkItem';

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-metal text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <Brand />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="/guides">Guides</NavLinkItem>
            <NavLinkItem to="/tools">Tools</NavLinkItem>
            <NavLinkItem to="/maps/atms">ATM Map</NavLinkItem>
            <NavLinkItem to="/maps/merchants">Merchants</NavLinkItem>
            <NavLinkItem to="/maps/spend-litecoin">Spend Litecoin</NavLinkItem>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black">
              <span className="text-white">Learn</span>
              <span className="text-litecoin-400">Litecoin</span>
            </h3>
            <p className="mt-4 max-w-xl text-slate-300">
              Built to help people learn how Litecoin works and help merchants accept Litecoin with confidence.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-litecoin-300">Explore</div>
            <div className="mt-4 space-y-3 text-slate-300">
              <Link to="/guides" className="block hover:text-litecoin-300">Guides</Link>
              <Link to="/tools" className="block hover:text-litecoin-300">Tools</Link>
              <Link to="/maps/atms" className="block hover:text-litecoin-300">ATM Map</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-litecoin-300">Merchant</div>
            <div className="mt-4 space-y-3 text-slate-300">
              <a href="#bitpay-affiliate-link" className="block hover:text-litecoin-300">BitPay setup</a>
              <a href="#contact" className="block hover:text-litecoin-300">Work with LearnLitecoin</a>
              <Link to="/maps/merchants" className="block hover:text-litecoin-300">Merchant map</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
