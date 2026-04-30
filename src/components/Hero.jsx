import HeroImg from '../assets/images/Hero_img.svg'
import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUpRightMD from '../assets/images/Arrow_Up_Right_MD.svg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative mx-auto w-full h-[689px] min-h-[689px] overflow-hidden sm:h-[788px] sm:min-h-[788px] min-[1920px]:w-[1920px] min-[1920px]:h-[788px] min-[1920px]:min-h-[788px]"
    >
      
      {/* Mobile (320–480): fill full hero height */}
      <div className="absolute inset-0 bg-[#1F2A44] sm:hidden">
        <img
          src={HeroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '65% 40px' }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(256.37deg, #1F2A44 0%, rgba(31, 42, 68, 0) 14.68%, rgba(31, 42, 68, 0) 28.19%, rgba(31, 42, 68, 0.66) 56.12%, #1F2A44 100%), linear-gradient(180deg, #1F2A44 0%, rgba(31, 42, 68, 0) 20.09%, rgba(31, 42, 68, 0) 100%)',
          }}
        />
      </div>

      {/* Desktop: same image treatment as About Us — full width, cover, top */}
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HeroImg})`, backgroundPosition: 'top' }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(256.37deg, #1F2A44 0%, rgba(31, 42, 68, 0) 14.68%, rgba(31, 42, 68, 0) 28.19%, rgba(31, 42, 68, 0.66) 56.12%, #1F2A44 100%), linear-gradient(180deg, #1F2A44 0%, rgba(31, 42, 68, 0) 20.09%, rgba(31, 42, 68, 0) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[393px] px-[20px] max-[360px]:px-[16px] pt-[95px] max-[480px]:pt-[80px] max-[360px]:pt-[72px] pb-20 sm:max-w-[1360px] sm:px-0 sm:pr-6 lg:pb-28">
        <div className="absolute left-[20px] right-[20px] max-[360px]:left-[16px] max-[360px]:right-[16px] w-auto max-w-[330px] h-[373px] max-[360px]:h-auto overflow-visible mt-0 sm:left-auto sm:right-auto sm:w-[468px] sm:max-w-none sm:h-[474px] sm:overflow-visible sm:mt-[78px]">
          {/* Tagline Badge */}
          <div
            className="inline-flex items-center justify-center bg-white/10 rounded-[60px] px-[12px] py-[6px] mt-[204px] max-[480px]:mt-[176px] max-[360px]:mt-[160px] mb-[8px] sm:mt-0 sm:ml-0 sm:mb-[14px] border border-[#FFFFFF80] shadow-[2px_2px_0px_0px_#0000000F] w-fit max-w-[300px] h-[36px]"
          >
            <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-gray-200 font-sora font-normal text-[16px] max-[360px]:text-[14px] leading-[100%] tracking-[-0.04em] whitespace-nowrap [text-shadow:2px_2px_0_#0000000F]">
                Illuminating Life Through Science
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[#FFFFFF] font-sora font-normal text-[30px] max-[360px]:text-[26px] leading-[120%] tracking-[-0.04em] w-full max-w-[330px] h-[160px] max-[360px]:h-auto [text-shadow:2px_2px_0_#0000000F] sm:text-[50px] sm:leading-[120%] sm:w-[468px] sm:max-w-none sm:h-[252px] sm:mb-[6px]">
            Bridging Global Pharma Needs With Trusted Ingredients & Expertise
          </h1>

          {/* Paragraph */}
         <p
           className="text-[#FFFFFF] opacity-95 mb-[24px] font-manrope font-semibold text-[14px] max-[360px]:text-[13px] leading-[150%] tracking-[-0.02em] w-full max-w-[330px] h-[105px] max-[360px]:h-auto [text-shadow:2px_2px_0_#0000000F] sm:mb-[22px] sm:text-[16px] sm:w-[468px] sm:max-w-none sm:h-[96px]"
           style={{
             fontStyle: 'normal',
             letterSpacing: '-0.02em',
             // Not supported in all browsers, but safe to set.
             lineHeightTrim: 'none',
           }}
         >
            We empower pharmaceutical innovators with high-quality APIs, intermediates, KSMs, solvents, excipients and deep industry consultancy – backed by decades of research & process development experience.
          </p>

          {/* Buttons */}
          <div className="flex h-[40px] w-full max-w-[325px] flex-nowrap items-center justify-between gap-x-[10px] max-[360px]:h-auto max-[360px]:flex-col max-[360px]:items-start max-[360px]:justify-start max-[360px]:gap-y-[10px] sm:h-auto sm:w-auto sm:flex-wrap sm:gap-y-2 sm:justify-start min-[1600px]:flex-nowrap min-[1600px]:gap-y-0 min-[1600px]:w-[378px] min-[1600px]:h-[48px] min-[1600px]:justify-between">
            <Link to="/contact-us" className="h-[40px] w-[132px] flex-shrink-0 sm:w-auto sm:h-auto">
              <img
                src={ContactBtn}
                alt="Contact Us"
                className="h-[40px] w-[132px] object-contain sm:h-[48px] sm:w-[157px]"
              />
            </Link>

            <Link
              to="/products/api"
              className="inline-flex h-[24px] min-h-[24px] flex-nowrap items-center justify-center gap-[6px] text-white font-sora font-semibold text-[14px] max-[360px]:text-[13px] leading-[100%] tracking-[-0.02em] whitespace-nowrap rounded-lg underline [text-decoration-skip-ink:auto] transition-colors shrink-0 [text-shadow:2px_2px_0px_#0000000F] sm:h-[40px] sm:text-[16px] min-[1600px]:h-[24px] min-[1600px]:text-[16px] min-[1600px]:[text-decoration-style:solid] min-[1600px]:[text-decoration-offset:0%] min-[1600px]:[text-decoration-thickness:0%]"
            >
              View Product Catalogue
              <img src={ArrowUpRightMD} alt="" className="inline-block h-[24px] w-[24px] flex-shrink-0 text-[#FFFFFF]" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
