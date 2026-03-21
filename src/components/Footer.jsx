import HeaderLogo from '../assets/images/Header_Logo.svg'
import Fmail from '../assets/images/Fmail.svg'
import Fphone from '../assets/images/Fphone.svg'
import Flinkedin from '../assets/images/Flinkedin.svg'
import Ffacebook from '../assets/images/Ffacebook.svg'
import Finstagram from '../assets/images/Finstagram.svg'
import FSaviturLogo from '../assets/images/FSavitur_Logo.svg'

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
    <footer className="w-[1520px] h-[626px] mx-auto rounded-2xl overflow-hidden relative border border-white/10 bg-[#1F2A44] opacity-100">
      <div className="relative z-10 w-[1362px] min-h-[295px] mt-[124px] ml-[80px] mr-[78px]">
        {/* Main content - 5 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 w-[1362px]">
          {/* Company Branding */}
          <div className="lg:col-span-1 w-[202px] h-[118px]">
            <a href="#" className="inline-block mb-4">
              <img src={HeaderLogo} alt="Savitur Life Science" className="h-[46px] w-[154px]" />
            </a>
            <p className="font-semibold text-[16px] leading-[150%] tracking-[-0.01em] text-white/90 w-[202px] h-[48px]">
              Powering Progress in Pharmaceutical Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-[104px] h-[167px]">
            <h3 className="font-medium text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 list-disc list-inside text-white">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-[16px] leading-[100%] tracking-[-0.04em] text-white transition-colors ${link.active ? 'font-semibold underline decoration-solid' : 'font-medium hover:font-semibold hover:underline hover:decoration-solid hover:text-white/90'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Types */}
          <div className="w-[208px] h-[199px]">
            <h3 className="font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Product Types</h3>
            <ul className="space-y-2 list-disc list-inside text-white">
              {productTypes.map((type) => (
                <li key={type}>
                  <a href="#" className="font-medium text-[16px] leading-[100%] tracking-[-0.04em] text-white/90 hover:text-white hover:underline transition-colors">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="w-[220px] h-[145px]">
            <h3 className="font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Office Address</h3>
            <address className="font-medium text-[16px] leading-[150%] tracking-[-0.04em] text-white/90 not-italic">
              Sr. No. 117, Plot No. 1, Taluka:
              
              behind Balaji Multiflex Pvt. Ltd,
              
              Village:, Amreli, Paddhari,
              
              Gujarat, India - 360110.
            </address>
          </div>

          {/* Contact Info */}
          <div className="w-[232px] h-[111px]">
            <h3 className="font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@saviturlifescience.com"
                className="font-medium text-[16px] leading-[150%] tracking-[-0.04em] flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <img src={Fmail} alt="" className="w-[24px] h-[24px] flex-shrink-0" />
                info@saviturlifescience.com
              </a>
              <a
                href="tel:+917043112818"
                className="font-medium text-[16px] leading-[150%] tracking-[-0.04em] flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <img src={Fphone} alt="" className="w-[24px] h-[24px] flex-shrink-0" />
                +917043112818
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[1361px] h-0 border-t border-white/20 mb-[24px]" />

        {/* Copyright & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-medium text-[16px] leading-[150%] tracking-[-0.04em] text-[#FFFFFF] w-[406px] h-[24px]">
            Copyrights © 2023 all rights reserved by SaviturLifeScience
          </p>
          <div className="flex items-center justify-between w-[96px] h-[24px]">
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

      {/* Decorative background image */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center overflow-visible pointer-events-none"
        aria-hidden
      >
        <img
          src={FSaviturLogo}
          alt=""
          className="w-[1400px] h-[102px] select-none opacity-100 object-contain"
        />
        <div className="w-full max-w-[1400px] px-[60px] h-[2px] bg-[rgba(100,150,255,0.35)]" />
      </div>
    </footer>
  )
}
