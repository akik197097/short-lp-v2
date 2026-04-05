export function StepsSection() {
  const steps = [
    {
      step: "01",
      title: "LINEを友達追加",
      desc: "下のボタンをタップして、公式LINEを友達追加するだけ。たった10秒で完了します。",
      icon: "📱",
    },
    {
      step: "02",
      title: "無料相談を申し込む",
      desc: "LINEでメッセージを送るだけで相談受付完了。難しい入力は一切不要です。",
      icon: "✉️",
    },
    {
      step: "03",
      title: "専門家からアドバイスが届く",
      desc: "あなたの状況に合わせた具体的なアドバイスを、専門家が直接お届けします。",
      icon: "💡",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <p className="text-line font-bold text-sm tracking-widest uppercase text-center mb-2">
          始め方
        </p>
        <h2 className="section-title mb-3">
          たった<span className="text-line">3ステップ</span>で始まる
        </h2>
        <p className="text-center text-gray-500 mb-12">
          難しい手続きは一切ありません
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-line/30 hidden md:block" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-line text-white flex items-center justify-center font-black text-sm z-10">
                  {s.step}
                </div>
                <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="font-bold text-lg text-gray-800">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
