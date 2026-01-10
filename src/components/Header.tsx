"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <>
      <header className="header header-two tw-transition-all tw-z-99 relative border-b border-white/20">
        <div className="container tw-container-1624-px mx-auto px-4 2xl:px-0">
          <nav className="flex items-center justify-between relative py-6">
            <div className="header-left flex items-center gap-8 xl:gap-16">
              {/* Logo Start */}
              <div className="logo">
                <Link href="/" className="link block">
                  <img
                    src="/images/logo/logo-two.png"
                    alt="Logo"
                    className="max-w-[200px]"
                  />
                </Link>
              </div>
              {/* Logo End  */}

              {/* Menu Start  */}
              <div className="header-menu hidden lg:block">
                <ul className="nav-menu flex items-center gap-8">
                  <li className="nav-menu__item has-submenu activePage relative group">
                    <Link
                      href="#"
                      className="nav-menu__link pr-4 text-white hover:text-main-600 py-9 font-medium w-full flex items-center gap-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-menu__item has-submenu relative group">
                    <Link
                      href="#"
                      className="nav-menu__link pr-4 text-white hover:text-main-600 py-9 font-medium w-full flex items-center gap-1"
                    >
                      Pages
                    </Link>
                  </li>
                  <li className="nav-menu__item has-submenu relative group">
                    <Link
                      href="#"
                      className="nav-menu__link pr-4 text-white hover:text-main-600 py-9 font-medium w-full flex items-center gap-1"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-menu__item has-submenu relative group">
                    <Link
                      href="#"
                      className="nav-menu__link pr-4 text-white hover:text-main-600 py-9 font-medium w-full flex items-center gap-1"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-menu__item has-submenu relative group">
                    <Link
                      href="#"
                      className="nav-menu__link pr-4 text-white hover:text-main-600 py-9 font-medium w-full flex items-center gap-1"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-menu__item">
                    <Link
                      href="#"
                      className="nav-menu__link text-white hover:text-main-600 py-9 font-medium w-full"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Menu End  */}
            </div>

            {/* Header Right start */}
            <div className="header-right flex items-center gap-5">
              {/* Call Start  */}
              <div className="header-two-call hidden xl:flex items-center gap-2">
                <div>
                  <span>
                    <img src="/images/icons/telk.svg" alt="telk" />
                  </span>
                </div>
                <div>
                  <a
                    className="font-heading font-medium text-3xl text-white hover:text-main-two-600 transition-colors duration-300"
                    href="tel:+2085550112"
                  >
                    +208-555-0112
                  </a>
                </div>
              </div>
              {/* Call Start  */}

              {/* Search Start  */}
              <div className="header-search hidden 2xl:block">
                <button
                  className="open-search w-12 h-12 leading-none inline-flex justify-content-center items-center rounded-full bg-neutral-800 text-white hover:bg-main-two-600 hover:text-white transition-all duration-300"
                  aria-label="search products"
                  title="open search box"
                >
                  <span className="text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              {/* Search End  */}

              {/* Button Start  */}
              <div className="header-button hidden xl:block">
                <Link
                  className="border border-main-two-600 rounded-3xl px-8 py-3 inline-flex items-center text-main-two-600 font-medium hover:bg-main-two-600 hover:text-white transition-all duration-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              {/* Button End  */}

              {/* offcanvas Button Start  */}
              <div className="header-offcanvas hidden lg:block">
                <button
                  className="tw-menu-bar"
                  type="button"
                  onClick={() => setIsOffcanvasOpen(true)}
                >
                  <span>
                    <img src="/images/icons/memu-toggole.svg" alt="icon" />
                  </span>
                </button>
              </div>
              {/* offcanvas Button End  */}

              {/* MobileMenu Button Start  */}
              <button
                type="button"
                className="toggle-mobileMenu lg:hidden text-white text-4xl"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span>
                  <img src="/images/icons/memu-toggole.svg" alt="icon" />
                </span>
              </button>
              {/* MobileMenu Button End  */}
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed bg-black w-[300px] h-screen overflow-y-auto p-6 z-[999] top-0 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0 left-0" : "-translate-x-full left-0"
        }`}
      >
        <button
          type="button"
          className="close-button absolute right-0 top-0 mr-2 mt-2 w-10 h-10 rounded-full flex justify-center items-center text-neutral-900 bg-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          X
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo block mb-8">
            <img src="/images/logo/logo.png" alt="Logo" />
          </Link>
          <ul className="nav-menu flex flex-col gap-4">
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-main-600 font-medium"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Offcanvas */}
      <div
        className={`twoffcanvas fixed top-0 bottom-0 right-0 w-[420px] bg-black p-12 z-[999999] transition-transform duration-500 transform ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="twoffcanvas__close-btn absolute right-10 top-12">
          <button
            className="close-btn w-10 h-10 flex items-center justify-center bg-main-600 text-heading hover:bg-white hover:text-main-600 transition-colors rounded-full"
            onClick={() => setIsOffcanvasOpen(false)}
          >
            X
          </button>
        </div>
        <div className="twoffcanvas__logo mb-16">
          <Link href="/">
            <img src="/images/logo/logo.png" alt="logo" className="max-w-[180px]" />
          </Link>
        </div>
        <div className="twoffcanvas__title mb-12">
          <p className="text-white/80">
            Agenki is the partner of choice for many of the world’s leading
            enterprises. We help businesses development.
          </p>
        </div>
        <div className="twoffcanvas__contact-info mb-16">
          <div className="twoffcanvas__contact-title mb-8">
            <h4 className="font-body font-semibold text-3xl text-white inline-block">
              Contact Us
            </h4>
          </div>
          <ul className="text-white flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <span className="text-main-600">Map</span>
              <p>Manchester 21, Zurich, CH</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-main-600">Email</span>
              <Link href="mailto:agenkiinfo@mail.com" className="hover:text-main-600">
                agenkiinfo@mail.com
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-main-600">Phone</span>
              <Link href="tel:+48555223224" className="hover:text-main-600">
                (+00) 678 345 98568
              </Link>
            </li>
          </ul>
        </div>
        <div className="twoffcanvas__social">
          <ul className="footer-social flex items-center gap-4">
            <li>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-white/10 hover:bg-main-600 hover:text-heading transition-colors"
              >
                FB
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-white/10 hover:bg-main-600 hover:text-heading transition-colors"
              >
                TW
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-white/10 hover:bg-main-600 hover:text-heading transition-colors"
              >
                LN
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {(isMobileMenuOpen || isOffcanvasOpen) && (
        <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOffcanvasOpen(false);
            }}
        ></div>
      )}
    </>
  );
}
