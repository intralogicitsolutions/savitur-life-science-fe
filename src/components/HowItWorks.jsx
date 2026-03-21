import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import HeroImg from '../assets/images/Hero_img.svg'

export default function HowItWorks() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[982px] h-[662px] mt-[160px] mb-[124px] opacity-100 box-border">
        <div className="flex flex-col md:flex-row items-center gap-[64px] bg-white w-[982px] h-[522px]">
          {/* Left image */}
          <div className="w-[456px] h-[522px] rounded-[16px] overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${HeroImg})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(1,18,36,0.85)] via-[rgba(1,18,36,0.65)] to-[rgba(1,18,36,0.2)]" />
          </div>

          {/* Right content */}
          <div className="w-full md:w-[456px] h-[504px] flex flex-col">
            {/* Pill */}
            <div
              className="inline-flex items-center pt-[6px] pr-[12px] pb-[6px] pl-[12px] w-[158px] h-[36px] rounded-[60px] bg-white border border-[rgba(0,0,0,0.12)] opacity-100 text-[13px] font-semibold tracking-[0.18em] uppercase mb-[14px]"
              style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full">
                <img src={CheckAll} alt="" className="h-[16px] w-[16px]" />
              </span>
              <span
                className="font-normal text-[16px] leading-[100%] tracking-[-0.04em] normal-case"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                How it works?
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-normal text-[39px] leading-[120%] tracking-[-0.04em] text-[#000000] w-[456px] h-[150px]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.03)' }}
            >
              From Sample to Commercial Scale — Seamless at Every Stage
            </h2>

              {/* Divider */}
              <div className="h-px w-[462px] bg-[#4D4D4D]/20 "/>
                  <hr className='mb-[32px] mt-[32px]'/>
            {/* Steps */}
            <ol>
              {[
                'Explore Catalogues & Submit Inquiry',
                'Acquire Sample Load',
                'Regulatory Alignment',
                'Get Commercial Supply',
              ].map((label, index) => (
                <li
                  key={label}
                  className="flex items-center gap-4 w-[402px] h-[48px] rounded-[52px] my-[16px]"
                >
                  <span
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-white font-semibold text-[16px] leading-[100%] tracking-[-0.02em]"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #FF8C42, #E65C00)',
                      boxShadow: '2px 2px 0 rgba(0,0,0,0.06)',
                    }}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="font-semibold text-[20px] leading-[100%] tracking-[-0.01em] text-[#000000]"
                    style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
       
        </div>
          {/* Bottom text + button */}
          <div className="flex flex-col items-center gap-3 text-center mt-[56px] w-[378px] h-[84px] mx-auto">
            <p className="font-semibold text-[14px] md:text-[16px] leading-[150%] tracking-[-0.02em] md:tracking-[-0.02em] text-[#4D4D4D] w-[378px] h-[24px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Any queries related to Product Availability or Inquiry.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <img src={ContactBtn} alt="Contact Us" className="h-[48px] w-[157px]" />
            </button>
          </div>
      </div>
    </section>
  )
}

