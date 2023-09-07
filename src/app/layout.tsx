import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./provider";
import SideBar from "@/component/sideBar/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테스트",
  description: "테스트당",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <SideBar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
// 테스트
