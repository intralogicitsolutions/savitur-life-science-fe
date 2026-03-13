import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import HeroImg from '../assets/images/Hero_img.svg'

export default function HowItWorks() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[982px] px-4 md:px-0 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center bg-white px-0 py-10 h-[522px] overflow-hidden">
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
          <div className="w-full md:w-[462px] h-[504px] flex flex-col gap-6 px-6 md:px-10">
            {/* Pill */}
            <div
              className="inline-flex items-center gap-[4px] px-[12px] py-[6px] w-[160px] h-[36px] rounded-[60px] bg-white border border-[rgba(0,0,0,0.12)] text-[13px] font-manrope font-semibold tracking-[0.18em] uppercase"
              style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full">
                <img src={CheckAll} alt="" className="h-[16px] w-[16px]" />
              </span>
              <span
                className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] normal-case"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                How it works?
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-sora font-normal text-[39px] leading-[120%] tracking-[-0.04em] text-[#000000] w-[456px] h-[150px]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              From Sample to Commercial Scale — Seamless at Every Stage
            </h2>

            {/* Divider */}
            <div className="h-px w-[462px] bg-[#4D4D4D]/20" />

            {/* Steps */}
            <ol className="space-y-4">
              {[
                'Explore Catalogues & Submit Inquiry',
                'Acquire Sample Load',
                'Regulatory Alignment',
                'Get Commercial Supply',
              ].map((label, index) => (
                <li key={label} className="flex items-center gap-4">
                  <span
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-white font-sora font-semibold text-[16px] leading-[100%] tracking-[-0.02em]"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #FF8C42, #E65C00)',
                      boxShadow: '2px 2px 0 rgba(0,0,0,0.06)',
                    }}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="font-manrope font-semibold text-[20px] leading-[100%] tracking-[-0.01em] text-[#000000]"
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
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="font-manrope font-semibold text-[14px] md:text-[16px] leading-[150%] tracking-[-0.02em] md:tracking-[-0.02em] text-[#4D4D4D]"
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

