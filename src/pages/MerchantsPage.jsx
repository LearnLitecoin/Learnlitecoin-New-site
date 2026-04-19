import SectionIntro from '../components/SectionIntro';
import LitecoinIcon from '../components/LitecoinIcon';

const merchants = [
  ['Business Name', 'Coffee / Food', 'Accepts Litecoin via BitPay'],
  ['Business Name', 'Retail', 'Accepts Litecoin Directly'],
  ['Business Name', 'Service', 'LearnLitecoin Verified'],
];

export default function MerchantsPage() {
  return (
    <div className="container-shell py-20">
      <SectionIntro
        label="Merchants"
        title="Merchants that accept Litecoin."
        text="Start with verified merchants and onboarded LearnLitecoin partners, then expand this into your own map network."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel p-8">
          <div className="flex flex-wrap gap-3">
            {['Search location', 'In-store', 'Online', 'Accepts LTC directly', 'BitPay', 'LearnLitecoin Verified'].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border px-4 py-3 text-sm ${index === 0 ? 'min-w-[200px] border-white/10 text-slate-400' : 'border-litecoin-400/25 text-litecoin-300'}`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 flex min-h-[420px] items-center justify-center rounded-[24px] border border-dashed border-litecoin-400/25 bg-slate-950/50 text-center">
            <div className="max-w-md px-6">
              <div className="mb-4 flex justify-center">
                <LitecoinIcon />
              </div>
              <h3 className="text-2xl font-bold">Merchant map area</h3>
              <p className="mt-3 text-slate-300">
                Replace this with your verified merchant map. Great place for LearnLitecoin partner pins and local businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel overflow-hidden">
            <div className="border-b border-white/10 px-8 py-6">
              <div className="section-label">Directory Preview</div>
              <h3 className="mt-3 text-3xl font-black">Merchant listing cards</h3>
            </div>
            <div className="divide-y divide-white/10">
              {merchants.map(([name, category, method]) => (
                <div key={`${name}-${category}`} className="px-8 py-5">
                  <div className="font-semibold text-white">{name}</div>
                  <div className="mt-2 text-sm text-slate-400">{category}</div>
                  <div className="mt-3 text-slate-300">{method}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-8">
            <div className="section-label">Own a Business?</div>
            <h3 className="mt-3 text-3xl font-black">Get listed on LearnLitecoin</h3>
            <p className="mt-4 text-slate-300">
              Start accepting Litecoin and get featured in your merchant network.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">Get Listed</a>
              <a href="#bitpay-affiliate-link" className="button-secondary">Set Up Your Business</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
