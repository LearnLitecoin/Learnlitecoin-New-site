import { Link } from 'react-router-dom';
import LitecoinIcon from './LitecoinIcon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_left,rgba(148,163,184,0.12),transparent_25%)]" />
      <div className="container-shell relative grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-litecoin-400/25 bg-litecoin-400/10 px-4 py-2 text-sm text-litecoin-300">
            <LitecoinIcon small />
            <span>Built for Litecoin merchants and learners</span>
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Accept Litecoin. Learn Litecoin. Use Litecoin in the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            LearnLitecoin helps businesses accept Litecoin and helps people understand how to buy, store, send, receive, and use it with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#merchant-solutions" className="button-primary">Start Accepting Litecoin</a>
            <Link to="/guides" className="button-secondary">Learn How Litecoin Works</Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {['Fast payments', 'Low fees', 'Litecoin-first education'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <div className="rounded-[28px] border border-litecoin-400/20 bg-white/5 p-6 shadow-glow">
            <div className="mb-4 flex items-center gap-3">
              <LitecoinIcon />
              <div>
                <div className="font-semibold">Litecoin payment flow</div>
                <div className="text-sm text-slate-400">Customer scans. Merchant gets paid.</div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Open Wallet', 'Scan QR Code', 'Payment Sent'].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-litecoin-300">Step {index + 1}</div>
                  <div className="font-semibold">{step}</div>
                  <div className="mt-2 text-sm text-slate-400">Clean Litecoin checkout flow with no extra clutter.</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Trusted path</div>
            <div className="mt-2 text-2xl font-bold">Wallets, guides, merchant setup, and maps in one place.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
