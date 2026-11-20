import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BREAKLINE ESPORTS — Built to Compete",
  description:
    "BREAKLINE is an emerging esports organisation built around ambition, discipline, and excellence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
