import SectionIntro from '../components/SectionIntro';
import { InfoCards } from '../components/CardGrid';

const guideCards = [
  { title: 'How to Set Up a Litecoin Wallet', text: 'Show how to install Nexus Wallet or Cake Wallet and back up the recovery phrase correctly.' },
  { title: 'How to Buy Litecoin', text: 'Explain wallet buying paths, exchange routes, and how to move LTC into a personal wallet.' },
  { title: 'How to Send & Receive Litecoin', text: 'Walk users through QR codes, wallet addresses, confirmations, and common mistakes.' },
  { title: 'How to Accept Litecoin for Your Business', text: 'Teach BitPay setup, QR checkout, and basic merchant payment flow.' },
  { title: 'What Is MWEB?', text: 'Add a clean explanation of optional Litecoin privacy features in beginner-friendly language.' },
  { title: 'How to Use Litecoin ATMs', text: 'Teach the ATM flow step by step and link into the ATM map page.' },
];

export default function GuidePage() {
  return (
    <div className="container-shell py-20">
      <SectionIntro
        label="Guides"
        title="Step-by-step Litecoin guides."
        text="This page is ready for written tutorials, embedded videos, screenshots, and wallet-specific walkthroughs."
      />
      <div className="mt-10">
        <InfoCards items={guideCards} columns="md:grid-cols-2 xl:grid-cols-3" />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="panel p-8">
          <div className="section-label">Featured Guide</div>
          <h3 className="mt-3 text-3xl font-black">How to Buy and Use Litecoin on Nexus Wallet</h3>
          <p className="mt-4 text-slate-300">
            This is the best place to embed your video, add screenshots, and place your Nexus affiliate link naturally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#nexus-affiliate-link" className="button-primary">Set Up Nexus Wallet</a>
            <a href="#video-link" className="button-secondary">Watch the Guide</a>
          </div>
        </div>
        <div className="panel p-8">
          <div className="section-label">Build Out</div>
          <h3 className="mt-3 text-3xl font-black">How to expand this page</h3>
          <ul className="mt-6 space-y-3 text-slate-300">
            {['Add screenshots from the real wallet flow', 'Embed your video guides', 'Create one guide page per wallet or topic', 'Keep every visual Litecoin-only and clean'].map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
