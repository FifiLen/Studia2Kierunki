'use client'
import { useState } from 'react';
import { FaBars, FaTimes, FaChartPie, FaICursor, FaFingerprint, FaPlug, FaRedo, FaBookOpen, FaArrowRight, FaAdjust, FaTextHeight } from 'react-icons/fa';
import { AiFillPhone, AiFillPlayCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useUserPreferences } from './UserPreferencesContext';

interface Product {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
}

interface CallToAction {
  name: string;
  href: string;
  icon: JSX.Element;
}

const products: Product[] = [
  { name: 'Strona główna', description: 'Get a better understanding of your traffic', href: '#', icon: <FaChartPie /> },
  { name: 'Oferta', description: 'Speak directly to your customers', href: '#', icon: <FaICursor /> },
  { name: 'Rekrutacja', description: 'Your customers’ data will be safe and secure', href: '#', icon: <FaFingerprint /> },
  { name: 'FAQ', description: 'Connect with third-party tools', href: '#', icon: <FaPlug /> },
  { name: 'Kontakt', description: 'Build strategic funnels that will convert', href: '#', icon: <FaRedo /> },
];

const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: <AiFillPlayCircle /> },
  { name: 'Contact sales', href: '#', icon: <AiFillPhone /> },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setFontSize, fontSize, highContrast, setHighContrast } = useUserPreferences();

  const fontSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const navbarContrastStyles = highContrast 
    ? 'bg-[#FFFF00] text-black' 
    : 'bg-blue-950 text-white';

  const linkContrastStyles = highContrast 
    ? 'text-black hover:text-white' 
    : 'text-white';

  return (
    <header className={` ${navbarContrastStyles} ${fontSizeStyles[fontSize]}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Your Company</span>
            <FaBookOpen className={` ${highContrast ? 'text-black' : 'text-blue-400'}`} />
            <h2 className='tracking-tighter text-xl font-semibold'>ISP Rybnik</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${linkContrastStyles}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className={`text-sm font-semibold tracking-tight leading-6 ${linkContrastStyles}`}>
              {product.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <button onClick={() => setFontSize('small')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A-</button>
          <button onClick={() => setFontSize('medium')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A</button>
          <button onClick={() => setFontSize('large')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A+</button>
          <button onClick={() => setHighContrast(!highContrast)} className={`p-2 ${linkContrastStyles}`}><FaAdjust /></button>
          <Link href="#" className={`text-sm flex items-center gap-1 p-1 px-3 rounded-md font-semibold leading-6 ${highContrast ? 'bg-black text-white' : 'bg-white text-blue-950'}`}>
            Zapisz się na studia <span aria-hidden="true"><FaArrowRight /></span>
          </Link>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`fixed inset-0 z-10 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${navbarContrastStyles}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className='tracking-tighter text-2xl font-semibold'>ISP Rybnik</h2>
            </a>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${linkContrastStyles}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className={`block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${linkContrastStyles} hover:bg-gray-50`}
                  >
                    {product.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link href="#" className={`text-sm flex items-center gap-1 p-1 px-3 rounded-md border font-semibold leading-6 ${highContrast ? 'bg-black text-white border-white' : 'border-white text-white'}`}>
                  Zapisz się na studia <span aria-hidden="true"><FaArrowRight /></span>
                </Link>
              </div>
            </div>
            <div className="py-6 flex gap-4">
              <button onClick={() => setFontSize('small')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A-</button>
              <button onClick={() => setFontSize('medium')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A</button>
              <button onClick={() => setFontSize('large')} className={`p-2 ${linkContrastStyles}`}><FaTextHeight />A+</button>
              <button onClick={() => setHighContrast(!highContrast)} className={`p-2 ${linkContrastStyles}`}><FaAdjust /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
