'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import Cookies from 'js-cookie';

// Define your supported languages here. 
const languages = [
  { code: 'en', name: 'English', flag: '/assets/flags/1.png' },
  { code: 'zh-CN', name: 'Chinese', flag: '/assets/flags/2.png' },
  { code: 'es', name: 'Spanish', flag: '/assets/flags/3.png' },
  { code: 'fr', name: 'French', flag: '/assets/flags/4.png' },
  { code: 'de', name: 'German', flag: '/assets/flags/5.png' },
  { code: 'ja', name: 'Japanese', flag: '/assets/flags/6.png' },
];


const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          // Only load the languages we defined in our array
          includedLanguages: languages.map(l => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  // Restore language from cookie on mount to persist selection across reloads
  useEffect(() => {
    const googtrans = Cookies.get('googtrans');
    if (googtrans) {
      const parts = googtrans.split('/');
      const langCode = parts[parts.length - 1];
      if (langCode) {
        const matched = languages.find(l => l.code === langCode);
        if (matched) {
          setSelectedLang(matched.code);
        }
      }
    }
  }, []);

  // Auto-translate if ?lang=... search parameter is set in the URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang) {
      const matched = languages.find(l => l.code === lang || l.code.split('-')[0] === lang);
      if (matched) {
        const interval = setInterval(() => {
          const select = document.querySelector('.goog-te-combo');
          if (select) {
            clearInterval(interval);
            setSelectedLang(matched.code);
            select.value = matched.code;
            select.dispatchEvent(new Event('change'));
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 5000);
      }
    }
  }, []);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Programmatically trigger the hidden Google Translate dropdown
  const handleLangChange = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Find the hidden Google select element
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change')); // Trigger the translation
    }
  };

  const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className="relative w-full lg:w-auto text-left z-50" ref={dropdownRef}>
      <div id="google_translate_element" className="hidden"></div>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full lg:w-auto gap-2 bg-[#f0f4f8] hover:bg-[#e2e8f0] text-[#475569] px-4 py-2 rounded-full text-sm font-semibold transition-all border border-transparent shadow-xs"
      >
        <div className="flex items-center gap-3">
          <Image
            src={currentLang.flag}
            alt={currentLang.name}
            width={28}
            height={28}
            className="w-6 h-6 rounded-full object-cover border border-gray-200/60 shadow-xs shrink-0"
          />
          <span className="font-medium text-sm text-gray-800">{currentLang.name}</span>
        </div>
        <IoIosArrowDown size={16} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Custom Dropdown Menu with Flags (Opens UPWARDS on mobile, downwards on desktop) */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 right-0 w-full lg:bottom-auto lg:top-full lg:mt-2 lg:mb-0 lg:left-auto lg:right-0 lg:w-48 bg-white border border-gray-100 rounded-2xl shadow-xl flex flex-col py-2 overflow-hidden z-50 transition-all">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 ${selectedLang === lang.code ? 'text-[#3A9AFF] bg-[#3A9AFF]/10 font-semibold' : 'text-gray-700'
                }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={28}
                height={28}
                className="w-6 h-6 rounded-full object-cover border border-gray-200/60 shadow-xs shrink-0"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default GoogleTranslate;
