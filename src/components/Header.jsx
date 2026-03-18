import HeaderLogo from '../assets/images/Header_Logo.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import LineImg from '../assets/images/Line.svg'
import CaretDownMd from '../assets/images/Caret_Down_MD.svg'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#' },
  { label: 'Products', href: '#', showArrow: true },
  { label: 'Service', href: '#' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent font-sora">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="flex items-center justify-between h-[46px] mt-[24px] mb-[24px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={HeaderLogo} alt="Savitur Logo" className="w-[154px] h-[46px] flex-shrink-0" />
            
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-between w-[402px] h-[24px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center text-white hover:text-white transition-colors font-normal ${
                  link.active ? 'underline hover:font-semibold' : 'hover:font-semibold hover:underline'
                }`}
              >
                <span className="font-sora-16 text-[#FFFFFF]">
                  {link.label}
                </span>
                {link.showArrow && (
                  <img src={CaretDownMd} alt="" className="w-[24px] h-[24px] brightness-0 invert" aria-hidden />
                )}
              </a>
            ))}
          </nav>

          {/* Contact Us Button */}
          <a href="#" className="inline-block hover:opacity-90 transition-opacity">
            <img src={ContactBtn} alt="Contact Us" className="w-[141px] h-[42px]" />
          </a>

        </div>
        
      </div>
      {/* Line image below header */}
      <img src={LineImg} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1360px] max-w-full h-auto object-cover object-center pointer-events-none" aria-hidden />
    </header>
  )
}
