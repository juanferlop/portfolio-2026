import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Navbar } from "@/components/Navbar"; // Asegúrate de que la ruta coincida

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mi Portafolio 2026",
    description: "Buscando prácticas de verano 2026",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.className} bg-[#050505] text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}