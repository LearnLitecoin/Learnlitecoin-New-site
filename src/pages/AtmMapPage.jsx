import SectionIntro from '../components/SectionIntro';
import LitecoinIcon from '../components/LitecoinIcon';

export default function AtmMapPage() {
  return (
    <div className="container-shell py-20">
      <SectionIntro
        label="Litecoin ATM Map"
        title="Find a Litecoin ATM near you."
        text="This page is ready for a live embedded map or a styled outbound link to your preferred ATM locator source."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-8">
          <div className="flex flex-wrap gap-3">
            {['City / ZIP / Address', 'Use My Location', 'Buy Litecoin', 'Sell Litecoin', 'Open Now', 'Two-Way ATM'].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border px-4 py-3 text-sm ${index === 0 ? 'min-w-[220px] border-white/10 text-slate-400' : 'border-litecoin-400/25 text-litecoin-300'}`}
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
              <h3 className="text-2xl font-bold">Live map area</h3>
              <p className="mt-3 text-slate-300">
                Replace this panel with an embedded ATM map or connect your own Leaflet or Google Maps implementation.
              </p>
              <a href="#atm-data-source-link" className="mt-6 inline-flex rounded-2xl border border-litecoin-400/25 px-4 py-2 font-semibold text-litecoin-300">
                View Live Litecoin ATM Map
              </a>
            </div>
          </div>
        </div>

        <div className="panel p-8">
          <div className="section-label">How It Works</div>
          <h3 className="mt-3 text-3xl font-black">Using a Litecoin ATM</h3>
          <div className="mt-6 space-y-4">
            {[
              'Find a Litecoin ATM',
              'Select Litecoin on the machine',
              'Scan your wallet QR code',
              'Insert cash or follow the prompts',
              'Confirm the transaction',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-litecoin-300">Step {index + 1}</div>
                <div className="mt-2 font-semibold">{step}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-300">
            ATM availability, fees, and ID requirements can vary by location and operator.
          </div>
        </div>
      </div>
    </div>
  );
}
