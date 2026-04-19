export default function SectionIntro({ label, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}
