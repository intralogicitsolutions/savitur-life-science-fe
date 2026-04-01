import { useState } from 'react'
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
  { label: 'Products', to: '#', showArrow: true },
  { label: 'Service', to: '/services' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-[353px] mx-[20px] px-0 mt-[20px] mb-[20px] md:mx-auto md:mt-0 md:mb-0 md:max-w-[1360px]">
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
              const className = `flex items-center text-white hover:text-white transition-colors font-normal ${
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
              href="mailto:info@saviturlifescience.com"
              aria-label="Email"
              className="inline-flex items-center justify-center"
            >
              <img src={MailIcon} alt="" className="w-[40px] h-[40px]" />
            </a>
            <a
              href="tel:+917043112818"
              aria-label="Call"
              className="inline-flex items-center justify-center"
            >
              <img src={CallIcon} alt="" className="w-[40px] h-[40px]" aria-hidden />
            </a>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
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
          <div className="w-full px-[20px]">
            <div className="w-full rounded-[16px] bg-white px-[16px] py-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <nav className="flex flex-col gap-[14px]">
                {navLinks.map((link) => {
                  const className = `flex items-center text-[#1F2A44] transition-colors font-normal`

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
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Line image below header */}
      <hr
        className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[353px] border border-[#FFFFFF] bg-transparent"
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
