import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "低温输运研究雷达",
  description: "跨材料追踪低温输运实验、器件制备、理论计算、测量设备与原子制造进展。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
