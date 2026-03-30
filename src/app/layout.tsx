import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Power - Livraison de carburant à domicile",
  description:
    "Rejoignez le programme de test exclusif de Power. Téléchargez l'app et aidez-nous à bâtir l'avenir de la livraison de carburant.",
  openGraph: {
    title: "Power - Livraison de carburant à domicile",
    description:
      "Rejoignez le programme de test exclusif de Power.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo_Power.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics - Replace GA_MEASUREMENT_ID */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
