import HeroImg from '../assets/images/Hero_img.svg'
import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUpRightMD from '../assets/images/Arrow_Up_Right_MD.svg'

export default function Hero() {
  return (
    <section
      className="relative mx-auto w-[393px] min-w-[393px] h-[689px] min-h-[689px] overflow-hidden sm:w-full sm:min-w-full sm:h-[788px] sm:min-h-[788px] min-[1600px]:w-[1600px] min-[1600px]:min-w-[1600px] min-[1600px]:h-[788px] min-[1600px]:min-h-[788px]"
    >
      
      {/* Mobile (393): full-bleed background */}
      <div className="absolute inset-0 sm:hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: 'cover',
            // Mobile crop focus: keep face visible (shift to right)
            backgroundPosition: '65% calc(0% + 40px)',
            backgroundRepeat: 'no-repeat',
          
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(256.37deg, #1F2A44 0%, rgba(31, 42, 68, 0) 14.68%, rgba(31, 42, 68, 0) 28.19%, rgba(31, 42, 68, 0.66) 56.12%, #1F2A44 100%), linear-gradient(180deg, #1F2A44 0%, rgba(31, 42, 68, 0) 20.09%, rgba(31, 42, 68, 0) 100%)',
          }}
        />
      </div>

      {/* Desktop: background width = image width (1600/788) */}
      <div className="absolute inset-y-0 left-1/2 hidden h-full -translate-x-1/2 aspect-[1600/788] sm:block">
        <div
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
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
      <div className="relative z-10 w-full max-w-[1360px] mx-auto pr-4 sm:pr-6 pt-[95px] pb-20 lg:pb-28">
        <div className="absolute w-[330px] h-[373px] overflow-visible mt-0 ml-[22px] sm:ml-0 sm:w-[468px] sm:h-[474px] sm:overflow-visible sm:mt-[78px]">
          {/* Tagline Badge */}
          <div
            className="inline-flex items-center justify-center bg-white/10 rounded-[60px] px-[12px] py-[6px] mt-[204px] mb-[8px] sm:mt-0 sm:ml-0 sm:mb-[14px] border border-[#FFFFFF80] shadow-[2px_2px_0px_0px_#0000000F] w-fit max-w-[300px] h-[36px]"
          >
            <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-gray-200 font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] whitespace-nowrap">Trusted for Quality & Compliance</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[#FFFFFF] font-sora font-normal text-[32px] leading-[120%] tracking-[-0.04em] w-[330px] h-[160px] [text-shadow:2px_2px_0px_#0000000F] sm:text-[50px] sm:leading-[120%] sm:w-[468px] sm:h-[252px] sm:mb-[6px]">
            Bridging Global Pharma Needs With Trusted Ingredients <br /> & Expertise
          </h1>

          {/* Paragraph */}
         <p
           className="text-[#FFFFFF] opacity-95 mb-[24px] font-manrope font-semibold text-[14px] leading-[150%] tracking-[-0.02em] w-[330px] h-[105px] [text-shadow:2px_2px_0px_#0000000F] sm:mb-[22px] sm:text-[16px] sm:w-[468px] sm:h-[96px]"
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
          <div className="flex h-[40px] w-[325px] flex-nowrap items-center justify-between gap-x-[10px] sm:h-auto sm:w-auto sm:flex-wrap sm:gap-y-2 sm:justify-start min-[1600px]:flex-nowrap min-[1600px]:gap-y-0 min-[1600px]:w-[378px] min-[1600px]:h-[48px] min-[1600px]:justify-between">
            <a
              href="#"
              className="h-[40px] w-[132px] flex-shrink-0 sm:w-auto sm:h-auto"
            >
              <img
                src={ContactBtn}
                alt="Contact Us"
                className="h-[40px] w-[132px] object-contain sm:h-[48px] sm:w-[157px]"
              />
            </a>

            <a
              href="#"
              className="inline-flex h-[24px] w-[177px] flex-nowrap items-center justify-center text-white font-sora font-semibold text-[14px] sm:h-[40px] sm:w-[132px] sm:text-[16px] min-[1600px]:text-[16px] leading-[100%] tracking-[-0.02em] min-h-[24px] whitespace-nowrap rounded-lg underline [text-decoration-skip-ink:auto] transition-colors shrink-0 [text-shadow:2px_2px_0px_#0000000F] min-[1600px]:h-[24px] min-[1600px]:w-[199px] min-[1600px]:[text-decoration-style:solid] min-[1600px]:[text-decoration-offset:0%] min-[1600px]:[text-decoration-thickness:0%]"
            >
              View Product Catalogue
              <img src={ArrowUpRightMD} alt="" className="inline-block h-[24px] w-[24px] flex-shrink-0 text-[#FFFFFF]" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
