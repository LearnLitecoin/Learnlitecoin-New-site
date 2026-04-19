import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import { InfoCards, ActionCards } from '../components/CardGrid';

const whyLitecoin = [
  { title: 'Fast Payments', text: 'Litecoin is designed for quick confirmations that work well for real-world payments.' },
  { title: 'Low Fees', text: 'Keep more of every transaction with low network fees.' },
  { title: 'Proven Network', text: 'A long-running payment network with a strong history and recognizable brand.' },
  { title: 'Global Access', text: 'Use Litecoin across borders without waiting on bank hours.' },
  { title: 'Optional Privacy', text: 'MWEB can be explained clearly in your educational content and guides.' },
  { title: 'Real Utility', text: 'Wallets, maps, merchant tools, and tutorials support real-world Litecoin use.' },
];

const getStarted = [
  { title: '1. Create a Wallet', text: 'Use Nexus Wallet or Cake Wallet to store, send, and receive Litecoin.' },
  { title: '2. Buy Litecoin', text: 'Use wallet buying options or exchange routes you explain in your guides.' },
  { title: '3. Send & Receive', text: 'Scan a QR code or paste an address to move Litecoin with confidence.' },
  { title: '4. Accept Litecoin', text: 'Business owners can start with BitPay or work directly with LearnLitecoin.' },
];

const guides = [
  { title: 'How to Set Up a Litecoin Wallet', text: 'Learn how to install, secure, and back up a Litecoin wallet using Nexus Wallet or Cake Wallet.' },
  { title: 'How to Buy Litecoin', text: 'Understand the safest ways to buy Litecoin and move it into your wallet.' },
  { title: 'How to Send & Receive Litecoin', text: 'Use wallet addresses, QR codes, and confirmations with confidence.' },
  { title: 'How to Accept Litecoin for Your Business', text: 'Set up business payments, QR checkout, and invoicing with trusted tools.' },
];

const maps = [
  { title: 'Litecoin ATM Map', text: 'Find ATMs that support Litecoin by location, ZIP code, or current location.', cta: 'Open ATM Map', href: '/maps/atms' },
  { title: 'Merchants Near You', text: 'Discover local businesses that accept Litecoin directly or through payment processors.', cta: 'View Merchant Map', href: '/maps/merchants' },
  { title: 'Spend Litecoin', text: 'Browse online and in-person ways to use Litecoin in the real world.', cta: 'View Spend Directory', href: '/maps/spend-litecoin' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="why-litecoin" className="container-shell py-20">
        <SectionIntro
          label="Why Litecoin"
          title="Fast, low-cost, and built for payments."
          text="Explain Litecoin in a simple, accurate way for both merchants and beginners."
        />
        <div className="mt-10">
          <InfoCards items={whyLitecoin} />
        </div>
      </section>

      <section id="get-started" className="border-y border-white/10 bg-white/5">
        <div className="container-shell py-20">
          <SectionIntro
            label="Get Started"
            title="Set up your wallet and start using Litecoin."
          />
          <div className="mt-10">
            <InfoCards items={getStarted} columns="lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <section id="merchant-solutions" className="container-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionIntro
              label="Merchant Solutions"
              title="Accept Litecoin for your business."
              text="Show merchants the money, simplicity, and payment benefits without overloading them with jargon."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Lower transaction fees', 'Fast payment confirmations', 'No chargebacks after confirmation', 'Global customer reach'].map((item) => (
                <div key={item} className="panel p-5 font-semibold">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-litecoin-400/20 bg-gradient-to-b from-litecoin-400/10 to-white/5 p-8">
            <div className="text-sm uppercase tracking-[0.2em] text-litecoin-300">Done-for-you setup</div>
            <h3 className="mt-3 text-3xl font-black">Work with LearnLitecoin</h3>
            <p className="mt-4 text-slate-300">
              Guide businesses through wallet setup, BitPay setup, QR payment flow, and merchant onboarding.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {['Wallet setup', 'BitPay setup', 'QR payment setup', 'Merchant onboarding'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-litecoin-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#bitpay-affiliate-link" className="button-primary">Start with BitPay</a>
              <a href="#contact" className="button-secondary">Work With LearnLitecoin</a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="border-y border-white/10 bg-white/5">
        <div className="container-shell py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              label="Learn"
              title="Guides that teach Litecoin step by step."
              text="Use written tutorials, video embeds, wallet walkthroughs, and merchant setup guides."
            />
            <Link to="/guides" className="button-secondary">View All Guides</Link>
          </div>
          <div className="mt-10">
            <InfoCards items={guides} columns="lg:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <section id="maps" className="container-shell py-20">
        <SectionIntro
          label="Maps"
          title="Find ATMs, merchants, and places to spend Litecoin."
          text="Map pages can start with outbound or embedded data sources, then grow into your own verified network."
        />
        <div className="mt-10">
          <ActionCards items={maps} />
        </div>
      </section>

      <section id="tools" className="border-y border-white/10 bg-white/5">
        <div className="container-shell py-20">
          <SectionIntro
            label="Tools"
            title="Trusted Litecoin tools, organized clearly."
            text="Wallets, buying paths, spending options, business tools, and future MWEB-focused guides."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/tools" className="button-primary">Open Tools Page</Link>
            <Link to="/guides" className="button-secondary">Open Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
