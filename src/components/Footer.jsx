import HeaderLogo from '../assets/images/Header_Logo.svg'
import Fmail from '../assets/images/Fmail.svg'
import Fphone from '../assets/images/Fphone.svg'
import Flinkedin from '../assets/images/Flinkedin.svg'
import Ffacebook from '../assets/images/Ffacebook.svg'
import Finstagram from '../assets/images/Finstagram.svg'
import FSaviturLogo from '../assets/images/FSavitur_Logo.svg'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/', active: true },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact-us' },
]

const productTypes = [
  { label: 'Intermediate', to: '/products/intermediate' },
  { label: 'API', to: '/products/api' },
  { label: 'Lab Chemicals & Reagents', to: '/products/lab-chemicals-reagents' },
  { label: 'Excipients', to: '/products/excipients' },
  { label: 'Finished Formulation', to: '/products/finished-formulation' },
]

export default function Footer() {
  return (
    <div className="flex w-full justify-center px-0 sm:px-6 lg:px-8 mb-[40px] max-[393px]:mb-0">
      <footer className="relative w-full max-w-full min-h-0 overflow-hidden rounded-none border border-white/10 bg-[#1F2A44] pb-28 opacity-100 lg:max-w-[1520px] lg:rounded-2xl lg:min-h-[626px] lg:pb-0">
        <div className="relative z-10 pt-[60px] pl-[20px] pr-[20px] pb-[34px] w-full max-w-[353px] min-h-[719px] text-left lg:mx-0 lg:mt-[124px] lg:ml-[80px] lg:mr-[78px] lg:min-h-0 lg:max-w-none lg:w-[1362px] lg:px-0 lg:pt-0 lg:pb-0">
          {/* Main: mobile = brand, 2-col links, address, contact | lg = 5 columns */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-5 lg:gap-6">
            {/* Company Branding */}
            <div className="Sm:w-[202px] sm:h-[118px] w-[177px] h-[104px] lg:col-span-1 lg:h-auto mb-[36px]">
              <Link to="/" className="sm:mb-[24px] mb-[16px] inline-block">
                <img src={HeaderLogo} alt="Savitur Life Science" className="sm:h-[46px] sm:w-[154px] h-[46px] w-[154px]" />
              </Link>
              <p className="h-auto w-[202px] font-semibold sm:text-[16px] text-[14px] leading-[150%] tracking-[-0.01em] text-white/90 [text-shadow:2px_2px_0_#0000000F]">
                Powering Progress in Pharmaceutical Excellence
              </p>
            </div>

            {/* Quick Links + Product Types: 2 columns on mobile, separate cols on lg */}
            <div className="grid grid-cols-2 gap-6 gap-y-8 lg:contents">
              <div className="min-w-0 lg:w-[104px]">
                <h3 className="[text-shadow:2px_2px_0_#0000000F] sm:mb-[24px] mb-[16px] font-medium sm:text-[16px] text-[15px] leading-[100%] tracking-[-0.04em] text-white">
                  Quick Links
                </h3>
                <ul className="[text-shadow:2px_2px_0_#0000000F] list-inside list-disc space-y-2 text-white">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className={`sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-white transition-colors ${link.active ? 'font-semibold underline decoration-solid' : 'font-medium hover:font-semibold hover:underline hover:decoration-solid hover:text-white/90'}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 lg:w-[208px] mb-[36px]">
                <h3 className="[text-shadow:2px_2px_0_#0000000F] mb-4 font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-white sm:mb-6">
                  Product Type
                </h3>
                <ul className="[text-shadow:2px_2px_0_#0000000F] list-outside list-disc space-y-2 pl-5 text-white marker:text-white">
                  {productTypes.map((type) => (
                    <li key={type.label} className="pl-1 leading-[140%]">
                      <Link
                        to={type.to}
                        className="font-medium text-[14px] leading-[140%] tracking-[-0.04em] text-white transition-colors hover:underline sm:text-[16px] sm:leading-[100%]"
                      >
                        {type.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Office Address */}
            <div className="w-[261px] h-[99px] sm:h-[145px] sm:w-[220px] mb-[30px]">
            <h3 className="[text-shadow:2px_2px_0_#0000000F] sm:mb-[24px] mb-[16px] font-medium sm:text-[16px] text-[15px] leading-[100%] tracking-[-0.04em] text-white">
                Office Address
              </h3>
              <address className="[text-shadow:2px_2px_0_#0000000F] not-italic font-medium text-[12px] leading-[150%] sm:text-[16px] sm:leading-[150%] text-white/90">
              B/103 Siddhi Haritage, Jivraj park main road, Ambika township, Rajkot, Gujarat, India.
                - 360 005
              </address>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-[232px]">
            <h3 className="[text-shadow:2px_2px_0_#0000000F] sm:mb-[24px] mb-[16px] font-medium sm:text-[16px] text-[15px] leading-[100%] tracking-[-0.04em] text-white">
                Contact Info
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:info@saviturlifescience.com"
                  className="[text-shadow:2px_2px_0_#0000000F] flex items-center gap-3 font-medium sm:text-[16px] text-[15px] leading-[150%] tracking-[-0.04em] text-white/90 transition-colors hover:text-white"
                >
                  <img src={Fmail} alt="" className="h-[24px] w-[24px] flex-shrink-0" />
                  dr.rajendra@saviturlifescience.com
                </a>
                <a
                  href="tel:+917043112818"
                  className="[text-shadow:2px_2px_0_#0000000F] flex items-center gap-3 font-medium sm:text-[16px] text-[15px] leading-[150%] tracking-[-0.04em] text-white/90 transition-colors hover:text-white"
                >
                  <img src={Fphone} alt="" className="h-[24px] w-[24px] flex-shrink-0" />
                  +91 96648 94484
                </a>

                <a
                  href="mailto:info@saviturlifescience.com"
                  className="[text-shadow:2px_2px_0_#0000000F] flex items-center gap-3 font-medium sm:text-[16px] text-[15px] leading-[150%] tracking-[-0.04em] text-white/90 transition-colors hover:text-white"
                >
                  <img src={Fmail} alt="" className="h-[24px] w-[24px] flex-shrink-0" />
                  karan@saviturlifescience.com
                </a>

                <a
                  href="tel:+917043112818"
                  className="[text-shadow:2px_2px_0_#0000000F] flex items-center gap-3 font-medium sm:text-[16px] text-[15px] leading-[150%] tracking-[-0.04em] text-white/90 transition-colors hover:text-white"
                >
                  <img src={Fphone} alt="" className="h-[24px] w-[24px] flex-shrink-0" />
                  +91 92270 32237
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-6 mt-8 h-0 max-w-[1361px] border-t border-white/20 w-[393px]:mt-[32px] w-[353px] max-[393px]:mb-[24px] lg:mb-[24px]" />

          {/* Copyright & Social — design: left text, right icons on mobile */}
          <div className="[text-shadow:2px_2px_0_#0000000F] flex flex-row flex-wrap items-start justify-between gap-4 max-[393px]:w-[353px] max-[353px]:h-[42px] max-[393px]:flex-nowrap max-[393px]:items-center">
            <p className="sm:w-[240px] w-[186px] h-[42px] font-medium text-[14px] leading-[150%] tracking-[-0.04em] text-[#FFFFFF] sm:max-w-none sm:text-[16px] lg:w-auto">
            Copyrights © 2023 all rights
            reserved by SaviturLifeScience
            </p>
            <div className="flex h-[24px] w-[96px] flex-shrink-0 items-center justify-between">
              <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="LinkedIn">
                <img src={Flinkedin} alt="" className="h-[24px] w-[24px]" />
              </a>
              <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="Instagram">
                <img src={Finstagram} alt="" className="h-[24px] w-[24px]" />
              </a>
              <a href="#" className="text-white transition-opacity hover:opacity-80" aria-label="Facebook">
                <img src={Ffacebook} alt="" className="h-[24px] w-[24px]" />
              </a>
            </div>
          </div>

        </div>

        {/* Decorative background — scaled + clipped on narrow screens */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 flex-col items-center overflow-hidden max-[393px]:mb-[25px]"
          aria-hidden
        >
          <img
            src={FSaviturLogo}
          />
          <div className="hidden h-[2px] w-full max-w-[1400px] bg-[rgba(100,150,255,0.35)] px-[60px]  lg:block" />
        </div>
      </footer>
    </div>
  )
}
