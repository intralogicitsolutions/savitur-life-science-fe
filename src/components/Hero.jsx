import HeroImg from '../assets/images/Hero_img.svg'
import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUp from '../assets/images/Arrow_Up.svg'

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
          background: 'linear-gradient(to right, rgba(26, 44, 70, 0.96) 0%, rgba(26, 44, 70, 0.85) 25%, rgba(26, 44, 70, 0.5) 45%, rgba(26, 44, 70, 0.1) 65%, transparent 80%)' 
        }} 
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto pr-4 sm:pr-6 lg:pr-8 pt-[110px] pb-20 lg:pt-[172px] lg:pb-28">
        <div className="w-[468px] h-[474px] max-w-2xl overflow-visible">
          {/* Tagline Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20 w-[280px] h-[36px]">
            <img src={CheckAll} alt="" className="w-5 h-5 flex-shrink-0" aria-hidden />
            <span className="text-gray-200 text-sm font-medium">Trusted for Quality & Compliance</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sora-50 text-white mb-6">
            Bridging Global
            <br />
            Pharma Needs With
            <br />
            Trusted Ingredients
            <br />
            & Expertise
          </h1>

          {/* Paragraph */}
          <p className="text-white mb-10 max-w-xl font-manrope font-normal text-[16px] leading-[150%] tracking-[-0.02em]">
            We empower pharmaceutical innovators with high-quality APIs, intermediates, KSMs, solvents, excipients and deep industry consultancy – backed by decades of research & process development experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-block w-[157px] h-[48px] hover:opacity-90 transition-opacity shrink-0">
              <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px] object-contain" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 text-white font-medium min-h-[48px] px-6 py-3 rounded-lg underline transition-colors shrink-0"
            >
              View Product Catalogue
              <img src={ArrowUp} alt="" className="w-[24px] h-[24px] flex-shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
