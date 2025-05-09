import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from 'next/script';
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ExamBazz | Assess Smarter, Teach Better",
    template: "%s | ExamBazz",
  },
  description:
    "ExamBazz is Bangladesh’s leading online exam software for teachers, schools & coaching centers. Easily create, manage & analyze secure online exams and question banks. Assess smarter, teach better.",
  keywords: [
    "online exam platform Bangladesh",
    "online test maker Bangladesh",
    "online exam software Bangladesh",
    "exam management system Bangladesh",
    "virtual assessment tool Bangladesh",
    "question bank software Bangladesh",
    "ExamBazz Bangladesh",
    "create online exams Bangladesh",
    "secure online assessments BD",
    "teacher exam creator Bangladesh",
  ],
  authors: [
    { name: "ExamBazz Team", url: "https://www.exambazz.com/about" },
  ],
  creator: "ExamBazz Team",
  publisher: "ExamBazz",
  generator: "Next.js",
  applicationName: "ExamBazz",
  metadataBase: new URL("https://www.exambazz.com"),
  alternates: {
    canonical: "https://www.exambazz.com",
  },
  openGraph: {
    title: "ExamBazz | Assess Smarter, Teach Better",
    description:
      "Bangladesh’s top online exam platform for teachers, schools & coaching centers. Create, manage & analyze secure online exams and question banks easily. Assess smarter, teach better.",
    url: "https://www.exambazz.com",
    siteName: "ExamBazz",
    images: [
      {
        url: "https://www.exambazz.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExamBazz - Assess Smarter, Teach Better",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamBazz | Assess Smarter, Teach Better",
    description:
      "Create, manage & analyze online exams with ExamBazz — Bangladesh’s top exam platform for teachers & coaching centers. Assess smarter, teach better.",
    images: "https://www.exambazz.com/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  category: "Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${montserrat.variable} antialiased bg-gray-50`}>
        <Toaster position="top-right" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WCDDGZ9D50"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WCDDGZ9D50');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
