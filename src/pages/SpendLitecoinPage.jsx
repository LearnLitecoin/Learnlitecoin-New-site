import SectionIntro from '../components/SectionIntro';
import { ActionCards } from '../components/CardGrid';

const spendCategories = [
  { title: 'Online Stores', text: 'Point people to online stores, services, and merchant directories where Litecoin can be used.' },
  { title: 'Food & Restaurants', text: 'Feature local merchants and spending options for meals, coffee, and casual stops.' },
  { title: 'Travel', text: 'Use this section for travel-related Litecoin spending options and booking routes.' },
  { title: 'Gift Cards', text: 'Add gift card spending paths that help people use Litecoin indirectly where needed.' },
  { title: 'Services', text: 'Highlight service businesses that can accept Litecoin payments.' },
  { title: 'Digital Products', text: 'Use this section for online tools, subscriptions, and digital purchases.' },
];

export default function SpendLitecoinPage() {
  return (
    <div className="container-shell py-20">
      <SectionIntro
        label="Spend Litecoin"
        title="Discover ways to use Litecoin online and in person."
        text="This page can blend your own merchant listings with curated outward paths and spend resources."
      />
      <div className="mt-10">
        <ActionCards items={spendCategories} columns="md:grid-cols-2 xl:grid-cols-3" />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="panel p-8">
          <div className="section-label">Spend Paths</div>
          <h3 className="mt-3 text-3xl font-black">Ways to use Litecoin</h3>
          <ul className="mt-6 space-y-3 text-slate-300">
            {['Pay a merchant directly', 'Use BitPay checkout', 'Buy gift cards', 'Use business invoices and payment links'].map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel p-8">
          <div className="section-label">Directory Links</div>
          <h3 className="mt-3 text-3xl font-black">Link out to trusted spend resources</h3>
          <p className="mt-4 text-slate-300">
            Replace these buttons with your chosen spend directory links and your own local merchant pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#litecoin-spend-link" className="button-primary">Open Spend Resources</a>
            <a href="#bitpay-directory-link" className="button-secondary">Open BitPay Directory</a>
          </div>
        </div>
      </div>
    </div>
  );
}
