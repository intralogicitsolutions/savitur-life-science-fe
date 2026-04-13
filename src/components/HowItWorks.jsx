import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import HeroImg from '../assets/images/Hero_img.svg'

export default function HowItWorks() {
  return (
    <section className="w-full bg-white flex justify-center px-[20px] sm:px-6 lg:px-0">
      <div className="w-full max-w-[982px] min-h-0 opacity-100 box-border mt-[60px] mb-[60px] md:mt-[160px] md:mb-[124px] max-[393px]:max-w-[353px] max-[393px]:min-h-[855px]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 bg-white w-full">
          {/* Hero image — full width on mobile, left column on md+ */}
          <div className="w-full max-[393px]:w-[353px] md:w-[456px] md:shrink-0 h-[353px] max-[393px]:h-[353px] sm:h-[280px] md:h-[522px] rounded-[16px] overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${HeroImg})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(1,18,36,0.85)] via-[rgba(1,18,36,0.65)] to-[rgba(1,18,36,0.2)]" />
          </div>

          {/* Content */}
          <div className="w-full md:w-[456px] md:max-w-[456px] flex flex-col items-start text-left h-auto max-[393px]:mt-[28px] md:mt-0">
            {/* Pill */}
            <div
              className="inline-flex items-center gap-1 pt-[6px] pr-[12px] pb-[6px] pl-[12px] w-[141px] h-[32px] sm:w-[158px] sm:h-[36px]  rounded-[60px] bg-white border border-[rgba(0,0,0,0.12)] opacity-100 sm:text-[13px] text-[11px] font-semibold tracking-[0.18em] uppercase mb-[12px]"
              style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
              <span
                className="[text-shadow:2px_2px_0_#0000000F] font-normal sm:text-[16px] text-[14px] leading-[100%] normal-case tracking-[-0.04em]"
               
              >
                How it works?
              </span>
            </div>

            {/* Heading */}
            <h2
              className="[text-shadow:2px_2px_0_#0000000F] font-normal text-[26px] sm:text-[32px] md:text-[39px] leading-[120%] text-[#000000] max-[393px]:w-[351px] max-[393px]:h-[99px] w-full h-auto md:max-w-[456px]"
              
            >
              From Sample to Commercial Scale — Seamless at Every Stage
            </h2>

            {/* Divider */}
            <div className="h-px w-full max-w-[462px] bg-[#4D4D4D]/20 md:my-8 my-[16px]" />

            {/* Steps */}
            <ol className="w-full list-none p-0 m-0">
              {[
                'Explore Catalogues & Submit Inquiry',
                'Acquire Sample Load',
                'Regulatory Alignment',
                'Get Commercial Supply',
              ].map((label, index) => (
                <li
                  key={label}
                  className="flex items-center sm:items-start gap-3 sm:gap-4 w-full max-w-[402px] min-h-[48px] rounded-[52px] sm:py-[8px] py-[7px] first:pt-0 last:pb-0"
                >
                  <span
                    className="flex h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] shrink-0 items-center justify-center rounded-full text-white font-semibold sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.02em]"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #FF8C42, #E65C00) [text-shadow:2px_2px_0_#0000000F]',
                      
                    }}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="[text-shadow:2px_2px_0_#0000000F] font-semibold text-[14px] sm:text-[20px] leading-[130%] md:leading-[100%] tracking-[-0.01em] text-[#000000] sm:pt-0.5"
                    
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Bottom text + button */}
        <div className="flex flex-col items-start md:items-center gap-3 text-left md:text-center mt-[24px] md:mt-[56px] w-full max-w-[378px] md:max-w-full md:mx-auto md:h-auto">
          <p
            className="[text-shadow:2px_2px_0_#0000000F] font-semibold text-[14px] md:text-[16px] leading-[150%] tracking-[-0.02em] text-[#4D4D4D] w-full"
            
          >
            Any queries related to Product Availability or Inquiry.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
          >
           <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
          </button>
        </div>
      </div>
    </section>
  )
}
