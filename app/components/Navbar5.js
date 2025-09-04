'use client';
import React, { useState, useEffect } from 'react';
import styles from './Navbar5.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

const Navbar5 = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // run once to set initial state (in case page loads not at very top)
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.customNavbar} ${
          isScrolled ? styles.customNavbarScrolled : ''
        }`}
      >
        <div className={styles.customNavbarContent}>
          {/* Logo */}
          <Link
            href="#"
            className={styles.customNavbarLogo}
            onClick={handleLinkClick}
          >
            <ExportedImage
              src="/images/asFooterLogo.png"
              width={132}
              height={50}
              alt="logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Link>

          {/* Mobile menu toggle button */}
          <button
            className={styles.customNavbarToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              fill="none"
              height="28"
              width="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* use currentColor so CSS controls the stroke (white/black on scroll) */}
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Navbar Menu */}
          <ul
            className={`${styles.customNavbarMenu} ${
              isOpen ? styles.customNavbarMenuOpen : ''
            }`}
          >
            <li className={styles.customNavbarMenuLi}>
              <Link
                href="/"
                className={styles.customNavbarMenuLink}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className={styles.customNavbarMenuLi}>
              <Link
                href="/about"
                className={styles.customNavbarMenuLink}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li className={styles.customNavbarMenuLi}>
              <Link
                href="/services"
                className={styles.customNavbarMenuLink}
                onClick={handleLinkClick}
              >
                Our Services
              </Link>
            </li>
            <li className={styles.customNavbarMenuLi}>
              <Link
                href="/contact"
                className={styles.customNavbarMenuLink}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Floating Contact Icons */}
      <div className={styles.floatingIcons}>
        <a href="tel:+966501881230" className={styles.floatingIcon} aria-label="Call +966 501 881 230">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        <a href="https://wa.me/966501881230" target="_blank" rel="noopener noreferrer" className={styles.floatingIcon} aria-label="WhatsApp +966 50 188 1230">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.050-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.500-.669-.510-.173-.008-.371-.010-.570-.010-.198 0-.520.074-.792.372-.272.297-1.040 1.016-1.040 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.360.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.870 9.870 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.860 9.860 0 0 1-1.510-5.260c.001-5.450 4.436-9.884 9.888-9.884 2.640 0 5.122 1.030 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.450-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.050 0C5.495 0 .160 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 24 12.050c0-3.176-1.240-6.165-3.488-8.411"></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Navbar5;