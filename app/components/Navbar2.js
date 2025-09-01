'use client';
import React, { useState, useEffect } from 'react';
import styles from './Navbar2.module.css'; // Import the CSS file
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
 
const Navbar2 = () => {
    const pathname = usePathname();  // Get the current path
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Track if the menu is open in mobile view
 
    useEffect(() => {
        // Handle the scroll event to toggle background color on scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 
    // Helper function to check if the link is active
    const isActiveLink = (href) => pathname === href;
 
    return (
        <div className={`${styles.customNavbar} ${isScrolled ? styles.customNavbarScrolled : ''}`} style={{
            color: 'black',
        }}>
            <div className={styles.customNavbarContent}>
                {/* Logo */}
                <Link href="#" className={styles.customNavbarLogo}>
                    <ExportedImage
                        src={isScrolled ? '/images/logoG.png' : '/images/logoG.png'}
                        width={132}
                        height={50}
                        alt="logo"
                    />
                </Link>
 
                {/* Mobile menu toggle button */}
                <button
                    className={styles.customNavbarToggle}
                    onClick={() => setIsOpen(!isOpen)} // Toggle menu on click
                >
                    <svg fill="#000000" height="30px" width="30px" viewBox="0 0 24 24">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
 
                {/* Navbar Menu */}
                <ul className={`${styles.customNavbarMenu} ${isOpen ? styles.customNavbarMenuOpen : ''}`}>
                    <li className={`${styles.customNavbarMenuLi} ${isActiveLink('/') ? styles.activeLink : ''}`}>
                        <Link href="/" className={styles.customNavbarMenuLink}>Home</Link>
                    </li>
                    <li className={`${styles.customNavbarMenuLi} ${isActiveLink('/about') ? styles.activeLink : ''}`}>
                        <Link href="/" className={styles.customNavbarMenuLink}>
                            About Us
                        </Link>
                    </li>
                    <li className={`${styles.customNavbarMenuLi} ${isActiveLink('/services') ? styles.activeLink : ''}`}>
                        <Link href="/" className={styles.customNavbarMenuLink}>Our Services</Link>
                    </li>
                    <li className={`${styles.customNavbarMenuLi} ${isActiveLink('/contact') ? styles.activeLink : ''}`}>
                        <Link href="/" className={styles.customNavbarMenuLink}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
 
export default Navbar2;