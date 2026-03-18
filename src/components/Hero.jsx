import HeroImg from '../assets/images/Hero_img.svg'
import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUpRightMD from '../assets/images/Arrow_Up_Right_MD.svg'

export default function Hero() {
  return (
    <section className="relative w-full min-w-full h-[788px] min-h-[788px] overflow-hidden" style={{ width: '100vw', minWidth: '100%', maxWidth: '100%' }}>
      
      <div 
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          minHeight: '788px',
          left: 0,
          right: 0,
          width: '100%',
        }}
      />
        
      <div 
        className="absolute inset-0" 
        style={{ 
          background:
            'linear-gradient(256.37deg, #1F2A44 0%, rgba(31, 42, 68, 0) 14.68%, rgba(31, 42, 68, 0) 28.19%, rgba(31, 42, 68, 0.66) 56.12%, #1F2A44 100%), linear-gradient(180deg, #1F2A44 0%, rgba(31, 42, 68, 0) 20.09%, rgba(31, 42, 68, 0) 100%)',
        }} 
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto pr-4 sm:pr-6 pt-[95px] pb-20 lg:pb-28">
        <div className="absolute w-[468px] h-[474px] overflow-visible mt-[78px]">
          {/* Tagline Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 rounded-[60px] px-[12px] py-[6px] mb-[14px] border border-white/20 w-fit max-w-[300px] h-[36px]">
            <img src={CheckAll} alt="" className="w-[24px] h-[24px] flex-shrink-0" aria-hidden />
            <span className="text-gray-200 font-sora-16-tight whitespace-nowrap">Trusted for Quality & Compliance</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-[#FFFFFF] font-sora-50 h-[252px] mb-[6px] shadow-[2px_2px_0px_0px_#0000000F]"
          >
            Bridging Global Pharma Needs With Trusted Ingredients & Expertise
          </h1>

          {/* Paragraph */}
          <p className="text-[#FFFFFF] opacity-95 mb-[22px] font-manrope font-semibold text-[16px] leading-[150%] tracking-[-0.02em] w-[468px] h-[96px] shadow-[2px_2px_0px_0px_#0000000F]">
            We empower pharmaceutical innovators with high-quality APIs, intermediates, KSMs, solvents, excipients and deep industry consultancy – backed by decades of research & process development experience.
          </p>

          {/* Buttons */}
          <div className="flex">
            <a href="#" className="pr-[22px]">
              <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px] object-contain" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center text-white font-sora-16-semibold min-h-[24px] rounded-lg underline text-decoration-skip-ink-auto transition-colors shrink-0"
            >
              View Product Catalogue
              <img src={ArrowUpRightMD} alt="" className="w-[24px] h-[24px] flex-shrink-0 text-[#FFFFFF]" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
