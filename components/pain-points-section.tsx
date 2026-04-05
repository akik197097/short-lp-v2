export function PainPointsSection() {
  const pains = [
    {
      emoji: "😔",
      title: "毎日がしんどい",
      desc: "やる気が出ない、何をしても楽しくない、そんな日々が続いていませんか？",
    },
    {
      emoji: "😰",
      title: "誰にも相談できない",
      desc: "周りに心配をかけたくなくて、一人でずっと我慢していませんか？",
    },
    {
      emoji: "😤",
      title: "何度やっても変われない",
      desc: "やろうとしても続かない、また失敗した…と自分を責めていませんか？",
    },
    {
      emoji: "🤯",
      title: "情報が多くて混乱する",
      desc: "ネットで調べても情報が溢れすぎて、何が正解か分からなくなっていませんか？",
    },
  ];

  return (
    <section className="py-16 px-4 bg-red-50">
      <div className="max-w-2xl mx-auto">
        <p className="text-red-500 font-bold text-sm tracking-widest uppercase text-center mb-2">
          あなたの悩み
        </p>
        <h2 className="section-title mb-3">
          こんな<span className="text-red-500">悩み</span>はありませんか？
        </h2>
        <p className="text-center text-gray-500 mb-10">
          一人で抱え込まないでください。あなただけじゃありません。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-red-100"
            >
              <div className="text-4xl mb-3">{pain.emoji}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {pain.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
