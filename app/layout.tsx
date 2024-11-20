import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import Navbar from '@/components/navbar';
import './globals.css';

const interFont = Inter({
    weight: ['400', '600'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-inter',
});

const antonFont = Anton({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

export const metadata: Metadata = {
    title: 'Alzaf - e-commerce',
    description: 'Alzaf - e-commerce',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interFont.variable} ${antonFont.variable} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
