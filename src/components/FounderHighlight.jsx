import FounderImg from '../assets/images/Founder_img.svg'
import FrameImg from '../assets/images/Frame.svg'
import CheckAll from '../assets/images/Check_All.svg'
import MailIcon from '../assets/images/mail.svg'
import CallIcon from '../assets/images/call.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import ContactBtn from '../assets/images/contact-btn.svg'

export default function FounderHighlight() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[1524px] h-[742px] mx-[38px]">
        <div className="relative flex items-center justify-center rounded-[15px] bg-[#F4F6F9] overflow-hidden">
          {/* Decorative frame image on the left */}
          <div className="hidden lg:block absolute w-[72px] h-[776px] top-[-17px] left-[98px] opacity-40% pointer-events-none">
            <img
              src={FrameImg}
              alt=""
              className="w-full h-full object-contain"
              aria-hidden
            />
          </div>

          {/* Combined image + content frame */}
          <div className="flex w-[982px] h-[522px] items-stretch mt-[102px] mb-[102px]">
            {/* Left image / visual */}
            <div className="w-[456px] h-[522px]">
              <div className="relative w-[456px] h-full rounded-[16px] overflow-hidden bg-[#E5E7EB] flex items-center justify-center">
                <img
                  src={FounderImg}
                  alt="Founder"
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="w-[462px] min-w-[462px] max-w-[462px] h-[502px] min-h-[502px] max-h-[502px] flex flex-col justify-between ml-[59px] flex-shrink-0 p-[5px] box-border overflow-hidden">
              {/* Badge + texts */}
              <div className="space-y-[14px]">
                <div className="inline-flex w-[189px] h-[36px] items-center rounded-full border border-[#E5E7EB] bg-white px-[12px] py-[6px] shadow-[0_4px_10px_rgba(15,23,42,0.06)]">
                  <span className="inline-flex items-center justify-center">
                    <img src={CheckAll} alt="" className="h-[24px] w-[24px]" />
                  </span>
                  <span className="font-sora text-[16px] leading-[100%] tracking-[-0.04em] text-[#111827]"
                  style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                  >
                    Founder Highlight
                  </span>
                </div>

                <div>
                  <h2
                    className="inline-block font-sora-40 text-[#000000] mb-[8px]"
                    style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.07)' }}
                  >
                    Dr Rajendra Chavda  
                  </h2>
                  <p
                    className="font-manrope-16 w-[456px] h-[72px] text-[#4D4D4D] mb-[32px]"
                    style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                  >
                    Director -Tivan sciences pvt ltd, Certified Independent
                    <br />
                    Director, Member of the academic council - Dr Shubhas
                    <br />
                    University, Professor of practice (DSU) Junagadh.
                  </p>  
                </div>
                    <hr/>
                <p
                  className="font-manrope-20 w-[456px] h-[150px] text-[#000000] pt-[18px]"
                >
                  “Extensive experience in pharma API development, process optimization and strategic industry partnerships,
                  ensuring quality supply and practical insights across complex chemical processes.”
                </p>

                <p className="font-manrope font-semibold w-[361px] h-[24px] text-[16px] leading-[150%] tracking-[-0.02em] text-[#4D4D4D] mt-[24px] mb-[4px]"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.03)' }}
                >
                  For any query &amp; guidance related to this business.
                </p>
              </div>

              {/* Contact actions */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2 w-[337px] h-[48px] mt-[2px]">
              <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full"
                    aria-label="Email"
                  >
                    <img src={MailIcon} alt="" className="h-[48px] w-[48px]" aria-hidden />
                  </button> 

                  <button
                    type="button"
                    className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full"
                    aria-label="Call"
                  >
                    <img src={CallIcon} alt="" className="h-[48px] w-[48px]" aria-hidden />
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full"
                    aria-label="LinkedIn"
                  >
                    <img src={LinkedinIcon} alt="" className="h-[48px] w-[48px]" aria-hidden />
                  </button>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Contact Us"
                >
                  <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px]" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

