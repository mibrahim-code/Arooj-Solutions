"use client";

import React, { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ about: false, packages: false });
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen({ ...dropdownOpen, [menu]: false });
  };

  const isActiveLink = (href) => {
    return currentPath === href ? styles.navLinkActive : "";
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      {/* Navbar Area */}
      <div className={styles.headerContent}>
        {/* Logo for Desktop View */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="flex items-center">
            <ExportedImage
              unoptimized={true}
              src="/images/logoG.png"
              className={styles.logo}
              width={100}
              height={25}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className={`${styles.navLinks} hidden md:flex`}>
          <Link href="/" className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/")}`}>
            الصفحة الرئيسية
          </Link>
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <Link
              href="/about"
              className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/about")}`}
            >
              من نحن
              <i className="ri-arrow-down-s-line ml-1" />
            </Link>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen.about ? "" : styles.dropdownMenuHidden}`}>
              <li>
                <Link href="/file" className={styles.dropdownMenuItem}>
                  مَلَفّ
                </Link>
              </li>
              <li>
                <Link href="/ourClients" className={styles.dropdownMenuItem}>
                  عملائنا
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/services"
            className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/services")}`}
          >
            خدماتنا
          </Link>
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter("packages")}
            onMouseLeave={() => handleMouseLeave("packages")}
          >
            <Link
              href="/packages"
              className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/packages")}`}
            >
              الباقات
              <i className="ri-arrow-down-s-line ml-1" />
            </Link>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen.packages ? "" : styles.dropdownMenuHidden}`}>
              <li>
                <Link href="/websiteDesign" className={styles.dropdownMenuItem}>
                  تصميم مواقع
                </Link>
              </li>
              <li>
                <Link href="/graphicDesign" className={styles.dropdownMenuItem}>
                  تصميم جرافيك
                </Link>
              </li>
              <li>
                <Link href="/socialMediaManagement" className={styles.dropdownMenuItem}>
                  إدارة صفحات السوشيال ميديا
                </Link>
              </li>
              <li>
                <Link href="/seoServices" className={styles.dropdownMenuItem}>
                  خدمات السيو
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/contact"
            className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/contact")}`}
          >
            اتصل بنا
          </Link>

           <Link
            href="/internship"
            className={`${styles.navLink} ${isScrolled ? "text-black" : "text-black"} ${isActiveLink("/internship")}`}
          >
             Internship
          </Link>
        </div>

        {/* Other Options */}
        <div className="flex items-center space-x-4">
          <button className={styles.menuButton}>
            {/* <i className="ri-search-line" /> */}
          </button>
          <button className={styles.menuButton}>
            {/* <i className="ri-bar-chart-horizontal-line" data-bs-toggle="modal" data-bs-target="#sidebarModal" /> */}
          </button>
        </div>
      </div>

      {/* Responsive Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""} md:hidden`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-gray-800">
              <ExportedImage
                unoptimized={true}
                src="/images/logoff.webp"
                className={styles.logo}
                width={100}
                height={25}
                alt="Logo"
              />
            </Link>
            <button className="text-gray-800" onClick={toggleMenu}>
              <i className="ri-menu-line" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="container mx-auto px-4 bg-white shadow-lg rounded-lg mt-2">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link href="/" className="text-gray-800">
                الصفحة الرئيسية
              </Link>
              <Link href="/about" className="text-gray-800">
                من نحن
              </Link>
              <Link href="/services" className="text-gray-800">
                خدماتنا
              </Link>
              <div className={styles.dropdown}>
                <Link href="/packages" className="block w-full text-center text-gray-800">
                  الباقات
                  <i className="ri-arrow-down-s-line ml-1" />
                </Link>
                <ul className={`${styles.dropdownMenu} ${dropdownOpen.packages ? "" : styles.dropdownMenuHidden}`}>
                  <li>
                    <Link href="/websiteDesign" className={styles.dropdownMenuItem}>
                      تصميم مواقع
                    </Link>
                  </li>
                  <li>
                    <Link href="/graphicDesign" className={styles.dropdownMenuItem}>
                      تصميم جرافيك
                    </Link>
                  </li>
                  <li>
                    <Link href="/socialMediaManagement" className={styles.dropdownMenuItem}>
                      إدارة صفحات السوشيال ميديا
                    </Link>
                  </li>
                  <li>
                    <Link href="/seoServices" className={styles.dropdownMenuItem}>
                      خدمات السيو
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="text-gray-800">
                اتصل بنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



