export default function LitecoinIcon({ small = false }) {
  const sizeClasses = small ? 'h-10 w-10 text-xl rounded-xl' : 'h-12 w-12 text-2xl rounded-2xl';

  return (
    <div
      className={`flex ${sizeClasses} items-center justify-center border border-litecoin-400/40 bg-litecoin-400/10 font-black text-litecoin-300 shadow-glow`}
      aria-hidden="true"
    >
      Ł
    </div>
  );
}
