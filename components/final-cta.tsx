interface FinalCtaProps {
  lineUrl: string;
}

export function FinalCta({ lineUrl }: FinalCtaProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-line font-bold text-sm tracking-widest uppercase mb-3">
          今すぐ無料登録
        </p>
        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
          まずは一歩、
          <br />
          <span className="text-line">無料で相談</span>してみませんか？
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          費用は一切かかりません。
          <br />
          あなたのペースで、安心してご相談ください。
        </p>

        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-btn w-full max-w-sm mx-auto flex"
        >
          <LineIcon />
          無料でLINE登録する
        </a>

        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-line">✓</span> 登録無料
          </span>
          <span className="flex items-center gap-1">
            <span className="text-line">✓</span> 相談無料
          </span>
          <span className="flex items-center gap-1">
            <span className="text-line">✓</span> いつでも退会可能
          </span>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © 2024 All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

function LineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}
