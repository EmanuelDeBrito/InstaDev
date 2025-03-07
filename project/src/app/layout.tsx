import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/ui/aside";

const getPoppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "InstaDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${getPoppins} antialiased`}>
        <Aside />
        {children}
      </body>
    </html>
  );
}
