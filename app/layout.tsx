import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "あなたの悩みを解決します | 公式LINE登録",
  description:
    "今すぐ公式LINEに登録して、あなたの悩みを解決しましょう。無料で始められます。",
  openGraph: {
    title: "あなたの悩みを解決します | 公式LINE登録",
    description: "今すぐ公式LINEに登録して、あなたの悩みを解決しましょう。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
