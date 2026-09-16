import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


const siteUrl = "https://www.cincotree.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cincotree | AI Engineering: from jargon to business impact",
    template: "%s | Cincotree",
  },
  description:
    "An AI engineering practice. Twenty years building production systems, the last few of them AI. Agents, retrieval and evaluation for teams that have to run them on Monday.",
  openGraph: {
    type: "website",
    siteName: "Cincotree",
    url: siteUrl,
    title: "Cincotree | AI Engineering: from jargon to business impact",
    description:
      "An AI engineering practice. Twenty years building production systems, the last few of them AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cincotree | AI Engineering: from jargon to business impact",
    description:
      "An AI engineering practice. Twenty years building production systems, the last few of them AI.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#practice`,
      name: "Cincotree",
      url: siteUrl,
      email: "hello@cincotree.com",
      description:
        "AI engineering practice building agents, retrieval and evaluation systems for production.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: "Worldwide",
      founder: { "@id": `${siteUrl}/#senthil` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#senthil`,
      name: "Senthil Velu Sundaram",
      jobTitle: "Principal AI Engineer",
      url: `${siteUrl}/about/`,
      sameAs: [
        "https://www.linkedin.com/in/siliconsenthil/",
        "https://siliconsenthil.in",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${plexSans.variable} ${plexMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
