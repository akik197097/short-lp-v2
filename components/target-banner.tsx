export function TargetBanner() {
  const targets = [
    "毎日不安やストレスを感じている方",
    "何から始めればいいか分からない方",
    "一人で抱え込んでしまっている方",
    "変わりたいけど行動できていない方",
  ];

  return (
    <section className="bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-line font-bold text-sm tracking-widest uppercase mb-3">
          こんな方におすすめ
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-black mb-6">
          あなたは<span className="text-yellow-400">当てはまりますか？</span>
        </h2>
        <ul className="space-y-3">
          {targets.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-gray-800 rounded-xl px-5 py-4 text-white text-left"
            >
              <span className="text-yellow-400 text-xl flex-shrink-0">✓</span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-gray-400 text-sm">
          ひとつでも当てはまるなら、まず無料でご相談ください
        </p>
      </div>
    </section>
  );
}
