import HeaderLogo from '../assets/images/Header_Logo.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import LineImg from '../assets/images/Line.svg'

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
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={HeaderLogo} alt="Savitur Logo" className="w-[154px] h-[46px] flex-shrink-0" />
            
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 text-white hover:text-white transition-colors pb-0.5 hover:border-b-[1px] hover:border-white ${
                  link.active ? 'font-medium border-b-[1px] border-white' : ''
                }`}
              >
                {link.label}
                {link.showArrow && (
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
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
