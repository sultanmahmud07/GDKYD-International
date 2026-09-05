import "./globals.css";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import NavbarWrap from "../components/Shared/Navbar/NavberWrap";
import NewFooter from "../components/Shared/Footer/NewFooter";
import ChatBox from "../components/Shared/ChatBox/ChatBox";
import SocialIcons from "../components/Shared/SocialIcons/SocialIcons";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title:
    "Nonwoven PPE & Medical Equipment Machinery Manufacturer | KYD",
  description:
    "Guangdong KYD manufactures premium nonwoven medical face mask, surgical gowns, gloves, and PPE equipment for machinery manufacturers. Trusted by healthcare facilities worldwide. FDA & CE certified—bulk supplier",
  metadataBase: new URL(`https://gdkyd.com`),
  alternates: {
    canonical: "./",
    languages: {
      "en": "https://gdkyd.com",
      "bn": "https://gdkyd.com/bn",
      "pt": "https://gdkyd.com/pt",
      "de": "https://gdkyd.com/de",
      "ja": "https://gdkyd.com/ja",
      "hi": "https://gdkyd.com/hi",
    }
  },
  siteName: "GDKYD",
  type: "Organization",
  category: "Service",
  url: "https://gdkyd.com",
  icons: {
    icon: "https://gdkyd.com/assets/logo/main-logo.webp",
  },
  openGraph: {
    title: "Guangdong KYD Company",
    description: "The best medical equipment at your fingertips.",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
        alt: "Guangdong KYD Company Logo",
      },
    ],
  },
  // authors: [{ name: "GDKYD" }, { name: "GDKYD", url: "https://www.gdkyd.com" }],
  creator: "GDKYD",
  publisher: "GDKYD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Trusted Medical Equipment Manufacturer",
    "Face Mask Machine Supplier",
  ],
  verification: {
    google: "h3e62bYsWEGHaX-2QCqFFXfOGtkjb5lMJ_FJpg0a6R0",
    yandex: "5e6c720b2ded4231",
    other: {
      "baidu-site-verification": ["codeva-uB2leomNuE"],
    },
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W3BPJSZR" />
      <GoogleAnalytics gaId="G-9GV6PTWLPM" />
      <body className={``}>
        <NextTopLoader
          color="#fafafac3"
          height={3}
          showSpinner={false}
        />
        <Toaster position="top-center" />
        <NavbarWrap></NavbarWrap>
        <SocialIcons></SocialIcons>
        <ChatBox></ChatBox>
        {children}
        <NewFooter></NewFooter>
      </body>
    </html>
  );
}
