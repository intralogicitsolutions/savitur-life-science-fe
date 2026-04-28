import FounderImg from '../assets/images/Founder_img.svg'
import FrameImg from '../assets/images/Frame.svg'
import CheckAll from '../assets/images/Check_All.svg'
import MailIcon from '../assets/images/mail.svg'
import CallIcon from '../assets/images/call.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import { Link } from 'react-router-dom'

export default function FounderHighlight() {
  return (
    <section className="w-full flex justify-center pt-0 sm:pt-[60px]">
      <div className="mx-auto w-[393px] h-[778px] sm:max-w-none sm:w-[1524px] sm:h-[742px] sm:mx-[38px]">
        <div className="relative flex w-full items-center justify-center rounded-[15px] bg-[#F9F9F9] overflow-hidden sm:bg-[#F4F6F9]">
          {/* Decorative frame image on the left */}
          <div className="hidden lg:block absolute w-[72px] h-[776px] top-[-17px] left-[98px] opacity-40 pointer-events-none">
            <img
              src={FrameImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Combined image + content frame */}
          <div className="mx-auto flex h-[778px] w-full max-w-[393px] flex-col items-stretch justify-center gap-3 ml-[20px] mr-[20px] mt-[60px] mb-[60px] sm:mx-0 sm:h-[522px] sm:w-[982px] sm:max-w-none sm:justify-start sm:gap-0 sm:p-0 sm:flex-row sm:mt-[102px] sm:mb-[102px]">
            {/* Left image — 353×353 on 393px-wide layout; desktop unchanged */}
            <div className="flex w-full shrink-0 justify-center sm:block sm:w-[456px] sm:h-[522px] sm:justify-start">
              <div className="relative aspect-square w-full max-w-[353px] overflow-hidden rounded-[20px] bg-[#E5E7EB] sm:aspect-auto sm:h-full sm:max-w-none sm:w-full sm:rounded-[16px]">
                <img
                  src={FounderImg}
                  alt="Founder"
                  className="h-full w-full object-cover rounded-[20px] sm:rounded-[16px]"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="w-full min-w-0 max-w-full flex flex-col justify-between gap-4 ml-0 flex-shrink-0 sm:gap-0 sm:overflow-hidden sm:relative sm:top-[6px] sm:w-[462px] sm:min-w-[462px] sm:max-w-[462px] sm:h-[502px] sm:min-h-[502px] sm:max-h-[502px] sm:ml-[64px] mt-[20px]">
              {/* Badge + texts */}
              <div>
                <div
                  className="inline-flex w-[168px] h-[32px] items-center rounded-[60px] border border-[#E0E0E0] bg-white px-[12px] py-[6px] opacity-100 mb-[12px] shadow-none sm:mb-[14px] sm:w-[189px] sm:h-[36px] sm:gap-0 sm:border-[#E5E7EB] sm:shadow-[0_4px_10px_rgba(15,23,42,0.06)]"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <span className="inline-flex items-center justify-center w-[24px] h-[24px]">
                  <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
                  </span>

                  <span
                    className="whitespace-nowrap font-sora text-[14px] font-medium leading-[100%] tracking-[-0.04em] text-[#1A1A1A] sm:text-[16px] sm:font-sora sm:text-[#111827] [text-shadow:2px_2px_0_#0000000F]"
                    style={{ fontStyle: 'normal' }}
                  >
                    Founder Highlight
                  </span>
                </div>

                <div>
                  <h2
                    className="inline-block font-sora font-bold text-[26px] leading-[120%] tracking-[-0.04em] text-[#1A1A1A] w-full h-auto opacity-100 mb-[8px] sm:mb-[8px] sm:font-normal sm:text-[40px] sm:leading-[100%] sm:text-[#000000] sm:w-[456px] sm:h-[50px] sm:[text-shadow:2px_2px_0_#0000000F]"
                    style={{
                      fontStyle: 'normal',
                      transform: 'rotate(0deg)',
                    }}
                  >
                    Dr Rajendra Chavda
                  </h2>

                  <p
                    className="font-manrope text-[14px] font-normal leading-[150%] tracking-[-0.02em] w-full h-auto text-[#666666]  mb-[16px] sm:mb-[32px] sm:font-semibold sm:text-[16px] sm:text-[#4D4D4D] sm:w-[456px] sm:h-[72px] [text-shadow:2px_2px_0_#0000000F]"
                    style={{
                      fontStyle: 'normal',
                      lineHeightTrim: 'none',
                    }}
                  >
                    Director - Tivan sciences pvt ltd, Certified Independent
                    Director, Member of the academic council - Dr Shubhas
                    University, Professor of practice (DGU) Junagadh.
                  </p>
                </div>

                <hr className="m-0 border-0 border-t border-[#E5E5E5] sm:border-[#E5E7EB]" />

                <p
                  className="font-manrope text-[14px] font-medium leading-[150%] tracking-[-0.02em] w-full h-auto text-[#1A1A1A] mt-[16px] sm:mt-[32px] sm:font-semibold sm:text-[20px] sm:text-[#000000] sm:w-[456px] sm:h-[150px] [text-shadow:2px_2px_0_#0000000F]"
                  style={{
                    fontStyle: 'normal',
                    lineHeightTrim: 'none',
                  }}
                >
                  “Extensive experience in pharma API development, process optimization and strategic industry partnerships,
                  ensuring quality supply and practical insights across complex chemical processes.”
                </p>

                <p
                  className="font-manrope w-full h-auto text-[12px] font-normal leading-[150%] tracking-[-0.02em] text-[#757575] mt-[24px] mb-0 sm:mb-[12px] sm:mt-[24px] sm:font-semibold sm:text-[16px] sm:text-[#4D4D4D] sm:w-[361px] sm:h-[24px] [text-shadow:2px_2px_0_#0000000F]"
                  style={{
                    fontStyle: 'normal',
                    lineHeightTrim: 'none',
                  }}
                >
                  For any query &amp; guidance related to this business.
                </p>
               
              </div>
              
             

              {/* Contact actions */}
              <div className="flex flex-wrap items-center gap-2 w-full h-auto sm:gap-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] sm:h-[48px] sm:w-[48px] sm:rounded-full"
                    aria-label="Email"
                  >
                    <img src={MailIcon} alt="" className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]" aria-hidden />
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] sm:h-[48px] sm:w-[48px] sm:rounded-full"
                    aria-label="Call"
                  >
                    <img src={CallIcon} alt="" className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]" aria-hidden />
                  </button>

                  <a
                    href="https://www.linkedin.com/in/dr-rajendra-chavda-7b8072b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] sm:h-[48px] sm:w-[48px] sm:rounded-full"
                    aria-label="LinkedIn"
                  >
                    <img src={LinkedinIcon} alt="" className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]" aria-hidden />
                  </a>
                </div>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Contact Us"
                >
                  <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

