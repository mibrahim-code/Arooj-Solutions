'use client';
import React, { useState, useEffect } from 'react';
import styles from './Navbar2.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

const Navbar2 = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
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
            src="/images/logoG.png"
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
        >
          <svg
            fill="none"
            height="28"
            width="28"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#000"
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
              href="#"
              className={styles.customNavbarMenuLink}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className={styles.customNavbarMenuLi}>
            <Link
              href="#"
              className={styles.customNavbarMenuLink}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li className={styles.customNavbarMenuLi}>
            <Link
              href="#"
              className={styles.customNavbarMenuLink}
              onClick={handleLinkClick}
            >
              Our Services
            </Link>
          </li>
          <li className={styles.customNavbarMenuLi}>
            <Link
              href="#"
              className={styles.customNavbarMenuLink}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
