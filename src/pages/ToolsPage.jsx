import SectionIntro from '../components/SectionIntro';
import LitecoinIcon from '../components/LitecoinIcon';

const walletTools = [
  {
    title: 'Nexus Wallet',
    type: 'Wallet tool',
    desc: 'Litecoin-focused wallet for buying, storing, sending, receiving, and using Litecoin.',
    cta: 'Set Up Nexus Wallet',
    secondary: 'How to Use Nexus Wallet',
    affiliate: '#nexus-affiliate-link',
  },
  {
    title: 'Cake Wallet',
    type: 'Wallet tool',
    desc: 'Mobile wallet with Litecoin support and MWEB-focused functionality.',
    cta: 'Download Cake Wallet',
    secondary: 'Learn About Cake Wallet',
    affiliate: '#cake-affiliate-link',
  },
  {
    title: 'BitPay',
    type: 'Spend & merchant tool',
    desc: 'Use BitPay for spending options, merchant checkout, or business payment setup.',
    cta: 'Use BitPay',
    secondary: 'Set Up BitPay for Business',
    affiliate: '#bitpay-affiliate-link',
  },
];

const compare = [
  ['First Litecoin wallet', 'Nexus Wallet'],
  ['Wallet with MWEB-oriented messaging', 'Cake Wallet'],
  ['Spending and merchant tools', 'BitPay'],
  ['Business setup', 'BitPay + LearnLitecoin'],
  ['Beginner path', 'LearnLitecoin guides + wallet setup'],
];

export default function ToolsPage() {
  return (
    <div className="container-shell py-20">
      <SectionIntro
        label="Tools"
        title="The tools to buy, store, use, and accept Litecoin."
        text="Organize wallet tools, spending tools, and merchant tools in one Litecoin-first place."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {walletTools.map((tool) => (
          <div key={tool.title} className="panel p-7">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <LitecoinIcon />
                <div>
                  <h3 className="text-2xl font-bold">{tool.title}</h3>
                  <div className="text-sm text-slate-400">{tool.type}</div>
                </div>
              </div>
              <div className="rounded-full border border-litecoin-400/25 bg-litecoin-400/10 px-3 py-1 text-xs font-semibold text-litecoin-300">
                Affiliate Link
              </div>
            </div>
            <p className="text-slate-300">{tool.desc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={tool.affiliate} className="button-primary">{tool.cta}</a>
              <a href="#guide" className="button-secondary">{tool.secondary}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="panel p-8">
          <div className="section-label">Business</div>
          <h3 className="mt-3 text-3xl font-black">Work with LearnLitecoin</h3>
          <p className="mt-4 text-slate-300">
            Need help setting things up? Guide businesses through wallets, QR checkout, and merchant onboarding.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            {['Wallet setup', 'BitPay setup', 'QR payment setup', 'Merchant training'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-litecoin-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-primary">Get Set Up with LearnLitecoin</a>
            <a href="#bitpay-affiliate-link" className="button-secondary">Start with BitPay</a>
          </div>
        </div>

        <div className="panel overflow-hidden">
          <div className="border-b border-white/10 px-8 py-6">
            <div className="section-label">Compare Tools</div>
            <h3 className="mt-3 text-3xl font-black">Which Litecoin tool is right for you?</h3>
          </div>
          <div className="divide-y divide-white/10">
            {compare.map(([need, best]) => (
              <div key={need} className="grid gap-3 px-8 py-5 md:grid-cols-2">
                <div className="font-semibold text-white">{need}</div>
                <div className="text-slate-300">{best}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
