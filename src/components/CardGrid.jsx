import LitecoinIcon from './LitecoinIcon';

export function InfoCards({ items, columns = 'md:grid-cols-2 xl:grid-cols-3' }) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <div key={item.title} className="panel p-6">
          <div className="mb-4">
            <LitecoinIcon />
          </div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ActionCards({ items, columns = 'lg:grid-cols-3' }) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <div key={item.title} className="panel p-6">
          <div className="mb-4">
            <LitecoinIcon />
          </div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="mt-3 text-slate-300">{item.text}</p>
          {item.cta ? (
            <a href={item.href ?? '#'} className="mt-6 inline-flex rounded-2xl border border-litecoin-400/25 px-4 py-2 font-semibold text-litecoin-300">
              {item.cta}
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
