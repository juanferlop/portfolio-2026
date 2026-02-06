import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Fernández López - Developer Java & POO | Portfolio Profesional",
  description: "Portfolio profesional de Juan Fernández López. Especializado en Java, Programación Orientada a Objetos y desarrollo multiplataforma. Disponible para prácticas verano 2026.",
  keywords: ["Java", "POO", "Desarrollo", "Frontend", "Mobile", "Oviedo", "Prácticas 2026", "Ingeniero Informático"],
  authors: [{ name: "Juan Fernández López" }],
  creator: "Juan Fernández López",
  metadataBase: new URL("https://juanferlop.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://juanferlop.dev",
    siteName: "Juan Fernández López - Developer",
    title: "Juan Fernández López - Developer Java & POO",
    description: "Especializado en Java y Programación Orientada a Objetos. Disponible para prácticas profesionales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juan Fernández López Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Fernández López - Developer Java & POO",
    description: "Portfolio profesional - Especializado en Java, POO y desarrollo multiplataforma",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://juanferlop.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/projects/logo-JFL.png" type="image/png" />
        <link rel="shortcut icon" href="/projects/logo-JFL.png" type="image/png" />
        <link rel="apple-touch-icon" href="/projects/logo-JFL.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Juan Fernández López",
              url: "https://juanferlop.dev",
              image: "/og-image.jpg",
              sameAs: [
                "https://github.com/juanferlop",
                "https://www.linkedin.com/in/juan-fernández-lópez-6681b9333",
              ],
              jobTitle: "Estudiante de Ingeniería Informática",
              email: "juanfernandezlopez729@gmail.com",
              telephone: "+34672647033",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oviedo",
                addressRegion: "Asturias",
                addressCountry: "ES",
              },
              knowsAbout: [
                "Java",
                "Programación Orientada a Objetos",
                "Desarrollo Multiplataforma",
                "Frontend",
                "React",
                "TypeScript",
                "JavaScript",
                "SQL",
                "Android",
                "iOS",
              ],
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Escuela de Ingeniería Informática de Oviedo",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
