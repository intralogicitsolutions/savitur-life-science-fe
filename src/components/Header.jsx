import { Link, useLocation } from 'react-router-dom'
import HeaderLogo from '../assets/images/Header_Logo.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import LineImg from '../assets/images/Line.svg'
import CaretDownMd from '../assets/images/Caret_Down_MD.svg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '#', showArrow: true },
  { label: 'Service', to: '/services' },
]

export default function Header() {
  const location = useLocation()

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="flex items-center justify-between h-[46px] mt-[24px] mb-[24px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={HeaderLogo} alt="Savitur Logo" className="w-[154px] h-[46px] flex-shrink-0" />
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

          {/* Contact Us Button */}
          <Link to="/contact-us" className="inline-block hover:opacity-90 transition-opacity">
            <img src={ContactBtn} alt="Contact Us" className="w-[141px] h-[42px]" />
          </Link>
        </div>
      </div>
      {/* Line image below header */}
      <img
        src={LineImg}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1360px] max-w-full h-auto object-cover object-center pointer-events-none"
        aria-hidden
      />
    </header>
  )
}
