// src/app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Provider from "./Context/Provider";

export const metadata: Metadata = {
  title: "Rodrigo Carvalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="dark">
      <body className="dark:bg-zinc-900">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
