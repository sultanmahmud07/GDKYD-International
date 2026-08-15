import HomePage from "../components/Pages/Home/HomePage";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gdkyd.com/#organization",
        "name": "Guangdong KYD Company",
        "alternateName": "KYD Precision Machinery",
        "url": "https://gdkyd.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://gdkyd.com/#logo",
          "url": "https://gdkyd.com/assets/logo/main-logo.webp",
          "caption": "Guangdong KYD Company Logo"
        },
        "image": {
          "@id": "https://gdkyd.com/#logo"
        },
        "description": "Guangdong KYD manufactures premium nonwoven medical face mask, surgical gowns, gloves, and PPE equipment for machinery manufacturers. Trusted by healthcare facilities worldwide.",
        "telephone": "+86-13902617335",
        "email": "kyd@kuaiyuda.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No.321 Dongshen Road, Tangxia Town",
          "addressLocality": "Dongguan City",
          "addressRegion": "Guangdong Province",
          "addressCountry": "CN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+86-13902617335",
            "contactType": "customer service",
            "areaServed": "World",
            "availableLanguage": ["English", "Chinese"]
          }
        ],
        "sameAs": [
          "https://x.com/KYD_Precision",
          "https://www.facebook.com/guangdongkyd",
          "https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gdkyd.com/#website",
        "url": "https://gdkyd.com",
        "name": "KYD",
        "description": "Nonwoven PPE & Medical Equipment Machinery Manufacturer",
        "publisher": {
          "@id": "https://gdkyd.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage></HomePage>
    </div>
  );
}
