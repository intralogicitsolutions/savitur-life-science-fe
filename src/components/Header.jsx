import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeaderLogo from '../assets/images/Header_Logo.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import LineImg from '../assets/images/Line.svg'
import CaretDownMd from '../assets/images/Caret_Down_MD.svg'
import HeaderBar from '../assets/images/Header_Bar.svg'
import MailIcon from '../assets/images/mail.svg'
import CallIcon from '../assets/images/call.svg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  {
    label: 'Products',
    to: '#',
    showArrow: true,
    dropdown: [
      { label: 'Intermediate', to: '/products/intermediate' },
      { label: 'API', to: '/products/api' },
      { label: 'Lab Chemicals & Reagents', to: '/products/lab-chemicals-reagents' },
      { label: 'Excipients', to: '/products/excipients' },
      { label: 'Finished Formulation', to: '/products/finished-formulation' },
    ],
  },
  { label: 'Services', to: '/services' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const desktopProductsRef = useRef(null)

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  useEffect(() => {
    if (!desktopProductsOpen) return

    const onPointerDown = (e) => {
      if (!desktopProductsRef.current) return
      if (!desktopProductsRef.current.contains(e.target)) setDesktopProductsOpen(false)
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setDesktopProductsOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [desktopProductsOpen])

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full mx-auto max-w-[480px] px-[20px] max-[360px]:px-[16px] mt-[20px] mb-[20px] md:px-0 md:mt-0 md:mb-0 md:max-w-[1360px]">
        <div className="flex items-center justify-between h-[46px] mt-0 mb-0 md:mt-[24px] md:mb-[24px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={HeaderLogo}
              alt="Savitur Logo"
              className="w-[130px] h-[40px] md:w-[154px] md:h-[46px] flex-shrink-0"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-between w-[402px] h-[24px]">
            {navLinks.map((link) => {
              const active = link.to.startsWith('/') && isLinkActive(link.to)
              const className = `flex items-center gap-0.5 text-white hover:text-white transition-colors font-normal ${
                active ? 'underline hover:font-semibold' : 'hover:font-semibold hover:underline'
              }`

              const inner = (
                <>
                  <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#FFFFFF]">
                    {link.label}
                  </span>
                  {link.showArrow && (
                    <img src={CaretDownMd} alt="" className="w-[24px] h-[24px] brightness-0 invert" aria-hidden />
                  )}
                </>
              )

              if (link.dropdown) {
                const productsInner = (
                  <>
                    <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#FFFFFF]">
                      {link.label}
                    </span>
                    {link.showArrow && (
                      <img
                        src={CaretDownMd}
                        alt=""
                        className={`w-[24px] h-[24px] brightness-0 invert transition-transform ${
                          desktopProductsOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      />
                    )}
                  </>
                )

                return (
                  <div
                    key={link.label}
                    ref={desktopProductsRef}
                    className="relative"
                    onMouseEnter={() => setDesktopProductsOpen(true)}
                    onMouseLeave={() => setDesktopProductsOpen(false)}
                  >
                    <button
                      type="button"
                      className={`${className} cursor-pointer bg-transparent border-0 p-0`}
                      aria-haspopup="true"
                      aria-expanded={desktopProductsOpen}
                      onClick={() => setDesktopProductsOpen((v) => !v)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setDesktopProductsOpen(false)
                      }}
                    >
                      {productsInner}
                    </button>
                    <div
                      className={`absolute left-0 top-full z-[70] w-[250px] lg:w-[250px] pt-2 transition-[opacity,visibility] duration-150 ${
                        desktopProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      role="menu"
                    >
                      <ul className="rounded-[12px] bg-white py-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                        {link.dropdown.map((item) => (
                          <li key={item.label} role="none">
                            <Link
                              role="menuitem"
                              to={item.to}
                              className="block px-4 py-2.5 font-sora text-[15px] leading-[120%] tracking-[-0.02em] text-[#1F2A44] transition-colors hover:bg-[#F4F6F9] hover:font-medium"
                              onClick={() => setDesktopProductsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              }

              if (link.to.startsWith('/')) {
                return (
                  <Link key={link.label} to={link.to} className={className}>
                    {inner}
                  </Link>
                )
              }

              return (
                <a key={link.label} href={link.to} className={className}>
                  {inner}
                </a>
              )
            })}
          </nav>

          {/* Mobile icons (matches 393px header screenshot) */}
          <div className="flex md:hidden items-center justify-end gap-[12px] flex-shrink-0">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dr.rajendra%40saviturlifescience.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email karan@saviturlifescience.com"
              className="inline-flex items-center justify-center sm:hidden"
            >
              <img src={MailIcon} alt="" className="w-[40px] h-[40px]" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dr.rajendra%40saviturlifescience.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email karan@saviturlifescience.com"
              className="hidden sm:inline-flex items-center justify-center"
            >
              <img src={MailIcon} alt="" className="w-[40px] h-[40px]" />
            </a>
            <a href="tel:+919664894484" aria-label="Call +919664894484" className="inline-flex items-center justify-center">
              <img src={CallIcon} alt="" className="w-[40px] h-[40px]" aria-hidden />
            </a>

          

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((v) => {
                  if (v) setMobileProductsOpen(false)
                  return !v
                })
              }}
            >
              <img src={HeaderBar} alt="" className="w-[40px] h-[40px]" aria-hidden />
            </button>
          </div>

          {/* Contact Us Button (desktop only) */}
          <Link
            to="/contact-us"
            className="hidden md:inline-block hover:opacity-90 transition-opacity"
          >
            <img src={ContactBtn} alt="Contact Us" className="w-[141px] h-[42px]" />
          </Link>
        </div>  
      </div>

      {/* Mobile dropdown nav (names only) */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[86px] z-[60] w-full">
          <div className="w-full px-[20px] max-[360px]:px-[16px]">
            <div className="w-full rounded-[16px] bg-white px-[16px] py-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <nav className="flex flex-col gap-[14px]">
                {navLinks.map((link) => {
                  const className = `flex items-center text-[#1F2A44] transition-colors font-normal`

                  if (link.dropdown) {
                    return (
                      <div key={link.label} className="flex flex-col gap-[10px]">
                        <button
                          type="button"
                          className={`${className} w-full justify-between text-left cursor-pointer bg-transparent border-0 p-0`}
                          onClick={() => setMobileProductsOpen((v) => !v)}
                          aria-expanded={mobileProductsOpen}
                        >
                          <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#1F2A44]">
                            {link.label}
                          </span>
                          {link.showArrow && (
                            <img
                              src={CaretDownMd}
                              alt=""
                              className={`w-[20px] h-[20px] transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                              aria-hidden
                            />
                          )}
                        </button>
                        {mobileProductsOpen && (
                          <ul className="ml-2 flex flex-col gap-[10px] pl-3">
                            {link.dropdown.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.to}
                                  className="block font-sora text-[15px] leading-[130%] tracking-[-0.02em] text-[#4D4D4D] hover:text-[#1F2A44]"
                                  onClick={() => {
                                    setMenuOpen(false)
                                    setMobileProductsOpen(false)
                                  }}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  }

                  if (link.to.startsWith('/')) {
                    return (
                      <Link
                        key={link.label}
                        to={link.to}
                        className={className}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#1F2A44]">
                          {link.label}
                        </span>
                      </Link>
                    )
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      className={className}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#1F2A44]">
                        {link.label}
                      </span>
                    </a>
                  )
                })}

                <Link
                  to="/contact-us"
                  className="flex items-center text-[#1F2A44] transition-colors font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#1F2A44]">
                    Contact Us
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Line image below header */}
      <hr
        className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-[360px]:w-[calc(100%-32px)] border border-[#FFFFFF] bg-transparent"
        style={{ height: '0px', opacity: 0.2 }}
        aria-hidden
      />
      <img
        src={LineImg}
        alt=""
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[1360px] max-w-full h-auto object-cover object-center pointer-events-none"
        aria-hidden
      />
    </header>
  )
}
