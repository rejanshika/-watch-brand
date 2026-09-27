const WORDS = [
  "Arka",
  "Vanya",
  "Vijay",
  "Inspired by India",
  "Individually Numbered",
  "Made to Keep",
];

export default function Marquee() {
  // duplicated once so the -50% translate loops seamlessly
  const run = [...WORDS, ...WORDS];
  return (
    <div className="marquee overflow-hidden border-y border-white/10 bg-black py-6">
      <div className="marquee-track">
        {run.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-3xl text-chalk sm:text-4xl">{w}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
