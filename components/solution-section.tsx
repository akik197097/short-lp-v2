export function SolutionSection() {
  const benefits = [
    { icon: "💬", text: "LINEで気軽に相談できる" },
    { icon: "🎯", text: "あなた専用のアドバイスを提供" },
    { icon: "🔒", text: "完全非公開・プライバシー保護" },
    { icon: "⚡", text: "登録から最短当日対応" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-line font-bold text-sm tracking-widest uppercase text-center mb-2">
          解決策
        </p>
        <h2 className="section-title mb-3">
          私たちが<span className="text-line">解決します</span>
        </h2>
        <p className="text-center text-gray-500 mb-10 leading-relaxed">
          専門家チームがLINEを通じて、
          <br />
          あなたの状況に合った具体的なサポートを提供します。
        </p>

        {/* Big benefit box */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-line rounded-3xl p-8 mb-8 text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl font-black text-gray-800 mb-3">
            登録するだけで<span className="text-line">完全無料</span>で
            <br />
            プロに相談できる
          </h3>
          <p className="text-gray-600">
            面倒な手続きなし。LINEで友達追加するだけで、すぐにサポートが受けられます。
          </p>
        </div>

        <ul className="space-y-3">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4"
            >
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <span className="font-bold text-gray-800">{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
