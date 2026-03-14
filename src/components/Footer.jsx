import HeaderLogo from '../assets/images/Header_Logo.svg'
import Fmail from '../assets/images/Fmail.svg'
import Fphone from '../assets/images/Fphone.svg'
import Flinkedin from '../assets/images/Flinkedin.svg'
import Ffacebook from '../assets/images/Ffacebook.svg'
import Finstagram from '../assets/images/Finstagram.svg'

const quickLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#' },
  { label: 'Service', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const productTypes = [
  'Intermediate',
  'API',
  'Lab Chemicals & Reagents',
  'Excipients',
  'Finished Formulation',
]

export default function Footer() {
  return (
    <footer className="w-full max-w-[1524px] min-h-[630px] mx-auto rounded-2xl overflow-hidden relative font-manrope border border-white/10 bg-[#1F2A44]">
      <div className="relative z-10 w-full max-w-[1362px] min-h-[295px] mx-auto px-[80px] pt-[124px] pb-12 md:pb-16">
        {/* Main content - 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Branding */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src={HeaderLogo} alt="Savitur Life Science" className="h-[46px] w-[154px]" />
            </a>
            <p className="font-manrope font-semibold text-[16px] leading-[150%] tracking-[-0.01em] text-white/90 w-[202px]">
              Powering Progress in Pharmaceutical Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 list-disc list-inside text-white">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`font-manrope font-medium text-[16px] leading-[100%] tracking-[-0.04em] text-white hover:text-white/90 hover:underline transition-colors ${link.active ? 'underline' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Types */}
          <div>
            <h3 className="font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Product Types</h3>
            <ul className="space-y-2 list-disc list-inside text-white">
              {productTypes.map((type) => (
                <li key={type}>
                  <a href="#" className="font-manrope font-medium text-[16px] leading-[100%] tracking-[-0.04em] text-white/90 hover:text-white hover:underline transition-colors">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Office Address</h3>
            <address className="font-manrope font-medium text-[16px] leading-[150%] tracking-[-0.04em] text-white/90 not-italic">
              Sr. No. 117, Plot No. 1, Taluka:
              <br />
              behind Balaji Multiflex Pvt. Ltd,
              <br />
              Village:, Amreli, Paddhari,
              <br />
              Gujarat, India - 360110.
            </address>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@saviturlifescience.com"
                className="font-manrope font-medium text-[16px] leading-[150%] tracking-[-0.04em] flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <img src={Fmail} alt="" className="w-[24px] h-[24px] flex-shrink-0" />
                info@saviturlifescience.com
              </a>
              <a
                href="tel:+917043112818"
                className="font-manrope font-medium text-[16px] leading-[150%] tracking-[-0.04em] flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <img src={Fphone} alt="" className="w-[24px] h-[24px] flex-shrink-0" />
                +917043112818
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[1361px] h-0 border-t border-white/20 my-8" />

        {/* Copyright & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-manrope font-medium text-[16px] leading-[150%] tracking-[-0.04em] text-[#FFFFFF]">
            Copyrights © 2023 all rights reserved by SaviturLifeScience
          </p>
          <div className="flex items-center justify-between gap-6 w-[96px] h-[24px]">
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <img src={Flinkedin} alt="" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
              <img src={Finstagram} alt="" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
              <img src={Ffacebook} alt="" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center overflow-visible pointer-events-none"
        aria-hidden
      >
        <div className="w-full max-w-[1400px] px-[60px] flex justify-center items-end overflow-visible">
          <span
            className="font-sora font-bold leading-[100%] tracking-[0] whitespace-nowrap select-none bg-clip-text"
            style={{
              fontSize: '139.06px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E0E4E8 25%, #B0B8C0 50%, #707880 75%, rgba(96,96,96,0.3) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Savitur Life Science
          </span>
        </div>
        <div className="w-full max-w-[1400px] px-[60px] h-[2px] bg-[rgba(100,150,255,0.35)]" />
      </div>
    </footer>
  )
}
