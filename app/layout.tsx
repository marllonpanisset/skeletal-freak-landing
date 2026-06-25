import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://skeletalfreak.com"),

  title: {
    default: "Skeletal Freak — Arquivo da cena gótica brasileira",
    template: "%s — Skeletal Freak",
  },

  description:
    "Skeletal Freak é um arquivo vivo da cena gótica brasileira. Eventos, bandas, DJs e memórias que não desaparecem com o algoritmo.",

  keywords: [
    "cena gótica brasileira",
    "gótico Brasil",
    "darkwave Brasil",
    "deathrock Brasil",
    "EBM Brasil",
    "underground Brasil",
    "Rio de Janeiro gótico",
    "eventos góticos Brasil",
    "bandas góticas brasileiras",
    "arquivo cultural underground",
    "memória da cena gótica",
  ],

  authors: [{ name: "Skeletal Freak" }],
  creator: "Skeletal Freak",
  publisher: "Skeletal Freak",

  alternates: {
    canonical: "https://skeletalfreak.com",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://skeletalfreak.com",
    siteName: "Skeletal Freak",

    title: "Skeletal Freak — Arquivo da cena gótica brasileira",
    description:
      "Um sistema vivo que preserva eventos, bandas, DJs e memórias da cena gótica brasileira.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skeletal Freak — Arquivo da cena gótica brasileira",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Skeletal Freak — Arquivo da cena gótica brasileira",
    description:
      "A memória da cena gótica brasileira não desaparece mais.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "culture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-void text-bone font-mono antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}