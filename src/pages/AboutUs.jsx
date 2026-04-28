import HeroImg from '../assets/images/Hero_img.svg'
import Footer from '../components/Footer'
import FounderHighlight from '../components/FounderHighlight'
import Header from '../components/Header'
import HeroStrip from '../components/HeroStrip'
import ArrowUpRightMD from '../assets/images/Arrow_Up_Right_MD.svg'
import WhoWeAreIcon from '../assets/images/who_icon.svg'
import MissionIcon from '../assets/images/mission_icon.svg'
import VisionIcon from '../assets/images/Vision_icon.svg'
import CheckAll from '../assets/images/Check_All.svg'
import ChevronRightMD from '../assets/images/Chevron_Right_MD.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FounderImg from '../assets/images/Founder_img.svg'
import FrameImg from '../assets/images/Frame.svg'
import MailIcon from '../assets/images/mail.svg'
import CallIcon from '../assets/images/call.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import ProcessImg from '../assets/images/Process_img.svg'
import OptimizationImg from '../assets/images/Optimization_img.svg'
import RegulatoryImg from '../assets/images/Regulatory_img.svg'
import ProcessOptimizationImg from '../assets/images/Process Optimization_img.svg'

const whatSetsUsApartCards = [
  {
    title: (
      <>
        Scientifically <br /> Guided Sourcing
      </>
    ),
    imageUrl: ProcessImg,
    titleWidth: 177,
    titleHeight: 66,
    titleWidthMobile: 133,
    titleHeightMobile: 50,
    titleFontSizeMobile: 18,
    titlePadding: '20px',
    titleTypography: {
      fontFamily: 'Manrope',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '120%',
      letterSpacing: '-4%',
      leadingTrim: 'none',
    },
  },
  {
    title: (
      <>
        Trusted <br /> Manufacturing
      </>
    ),
    
      imageUrl:OptimizationImg,
      titleWidth: 158,
      titleHeight: 66,
      titleWidthMobile: 119,
      titleHeightMobile: 50,
      titleFontSizeMobile: 18,
      titlePadding: '20px',
      titleTypography: {
        fontFamily: 'Manrope',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '120%',
        letterSpacing: '-4%',
        leadingTrim: 'none',
  },
  },
  {
    title: (
      <>
        Regulatory <br /> Conscious Approach
      </>
    ),
  
      imageUrl: RegulatoryImg,
      titleWidth: 221,
      titleHeight: 66,
      titleWidthMobile: 166,
      titleHeightMobile: 50,
      titleFontSizeMobile: 18,
      titlePadding: '20px',
      titleTypography: {
        fontFamily: 'Manrope',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '120%',
        letterSpacing: '-4%',
        leadingTrim: 'none',
  },

  },
  {
    title: (
      <>
        Risk - Mitigated <br /> Execution
      </>
    ),
    
      imageUrl: ProcessOptimizationImg,
      titleWidth: 163,
      titleHeight: 66,
      titleWidthMobile: 123,
      titleHeightMobile: 50,
      titleFontSizeMobile: 18,
      titlePadding: '20px',
      titleTypography: {
        fontFamily: 'Manrope',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '120%',
        letterSpacing: '-4%',
        leadingTrim: 'none',
  },
  },
]

export default function AboutUs() {
  const [isMobile393, setIsMobile393] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mql = window.matchMedia('(max-width: 393px)')
    const update = () => setIsMobile393(mql.matches)

    update()
    if (mql.addEventListener) mql.addEventListener('change', update)
    else mql.addListener(update)

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update)
      else mql.removeListener(update)
    }
  }, [])

  return (
    <>
      <Header />
      <section
      className="relative w-full min-w-full h-[689px] min-h-[689px] overflow-hidden sm:h-[460px] sm:min-h-[460px]"
    >
        {/* Background image */}
        <div
          className="absolute inset-0  bg-no-repeat bg-cover bg-[position:65%_calc(0%+40px)] sm:bg-top top-[-37px]"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />

        {/* Overlay gradients (matches Hero style) */}
        <div
          className="absolute inset-0"
          style={{
            background: '#1F2A44BF',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full min-h-[689px] sm:min-h-[460px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center sm:w-[223px] sm:h-[93px] w-[143px] h-[66px]">
            {/* Main heading */}
            <h1 
              className="[text-shadow:2px_2px_0_#0000000F] text-[#FFFFFF] font-sora font-normal sm:text-[50px] text-[32px] leading-[100%] tracking-[-0.04em] mb-[14px]"
              style={{ 
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-4%',
                leadingTrim: 'none',
              }}
            >
              About Us
            </h1>

            {/* Breadcrumb */}
            <div className=" text-[#FFFFFF] font-sora font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.02em] w-[135px] h-[24px] flex flex-nowrap items-center justify-center gap-0">
              <span 
              className="[text-shadow:2px_2px_0_#0000000F] opacity-90 shrink-0"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-2%',
                leadingTrim: 'none',
              }}
            >
              Home
            </span>
              <span className="opacity-70 shrink-0 inline-flex items-center justify-center sm:text-[16px] text-[14px]">
                <img src={ChevronRightMD} alt="" className="w-[20px] h-[20px] brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} aria-hidden />
              </span>
              <span 
              className="[text-shadow:2px_2px_0_#0000000F] opacity-100 shrink-0"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-2%',
                leadingTrim: 'none',
              }}
            >
              About us
            </span>
            </div>
           
          </div>
        </div>
      </section>
      <HeroStrip />

      {/* About Us business panel */}
      <section className="w-full">
        <div className="w-full max-w-[1164px] h-auto mx-auto mt-[124px] mb-[124px] rounded-[16px] bg-[#FFFFFF] overflow-hidden max-[393px]:w-[354px] max-[393px]:max-w-[354px] max-[393px]:h-auto max-[393px]:min-h-[978px] max-[393px]:overflow-visible max-[393px]:mt-[60px] max-[393px]:mb-[60px]">
          <div className="flex flex-col h-full">
            {/* Top pill */}
            <div>
              <div
                className="inline-flex items-center sm:w-[202px] sm:h-[36px] w-[179px] h-[32px] px-[12px] py-[6px] rounded-[60px] border-[1px] border-[#EEF0F4] bg-white opacity-100"
                style={{ transform: 'rotate(0deg)' }}
              >
                <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
                  
                <span
                    className="[text-shadow:2px_2px_0_#0000000F] whitespace-nowrap font-sora text-[14px] font-medium leading-[100%] tracking-[-0.04em] text-[#1A1A1A] sm:text-[16px] sm:font-sora sm:text-[#111827] sm:[text-shadow:2px_2px_0_rgba(0,0,0,0.06)]"
                    style={{ fontStyle: 'normal' }}
                  >
                  About Our Business
                </span>
              </div>
            </div>

            {/* Top row */}
            <div className="flex items-start justify-between gap-[118px] max-[393px]:flex-col max-[393px]:gap-[16px]">
              <div className="sm:w-[574px] sm:h-[150px] w-[351px] h-[99px] mt-[14px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mt-[12px]">
                <h2
                  className="[text-shadow:2px_2px_0_#0000000F] font-sora font-normal sm:text-[40px] text-[26px] leading-[100%] tracking-[-0.04em] text-[#111827] w-[574px] h-[150px] max-[393px]:w-full max-[393px]:h-auto"
                  style={{
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '-0.04em',
                    lineHeightTrim: 'none',
                  }}
                >
                  Driven by Science.
                  <br />
                  Committed to Reliable
                  <br />
                  Supply.
                </h2>
                
              </div>

              <div className="w-[520px] flex flex-col items-start max-[393px]:w-full">
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] sm:text-[16px] text-[14px] leading-[150%] tracking-[-0.02em] sm:w-[472px] sm:h-[72px] w-[351px] h-[84px] text-[#4D4D4D] mt-[14px] text-left max-[393px]:w-full max-[393px]:h-auto max-[393px]:mt-0"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '150%',
                    letterSpacing: '-0.02em',
                    lineHeightTrim: 'none',
                  }}
                >
                  Delivering high-quality pharmaceutical materials and strategic consultancy to support research, development, and commercial manufacturing worldwide.
                </p>

                <div className="flex items-center justify-start mt-[30px] sm:w-[404px] sm:h-[48px] w-[343px] h-[40px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:flex-wrap max-[393px]:gap-y-[12px] max-[393px]:mt-[24px]">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center w-[157px] h-[48px] hover:opacity-90 transition-opacity sm:pr-[22px] pr-[16px]"
                    aria-label="Contact Us"
                  >
                   <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
                  </Link>

                  <a
                    href="#"
                    className="inline-flex items-center hover:opacity-90 transition-opacity"
                  >
                    <span
                      className="font-sora font-semibold sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.02em] underline max-[393px]:whitespace-nowrap"
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        lineHeight: '100%',
                        letterSpacing: '-2%',
                        leadingTrim: 'none',
                        background: 'linear-gradient(180deg, #FF8C42 0%, #E65C00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textDecoration: 'underline',
                        textDecorationStyle: 'solid',
                        textDecorationColor: '#FF8C42',
                        textDecorationSkipInk: 'auto',
                        textUnderlineOffset: '2px',
                      }}
                    >
                      Or View Service in Details
                    </span>
                    <img
                      src={ArrowUpRightMD}
                      alt=""
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(98%) saturate(1500%) hue-rotate(360deg) brightness(105%) contrast(101%)' }}
                      aria-hidden
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Cards row */}
            <div className="flex justify-between w-[1164px] h-[285px] mt-[56px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:flex-col max-[393px]:gap-[14px] max-[393px]:mt-[32px]">
              {/* Who We Are */}
              <div className="sm:w-[377px] sm:h-[286px] w-[354px] h-[205px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[22px] pt-[20px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:px-[16px] max-[393px]:pb-[20px]">
                
                  <img src={WhoWeAreIcon} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]"/>
              
                <h3
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',
                  }}
                >
                  Who We Are
                </h3>
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '-2%',
                    leadingTrim: 'none',
                  }}
                >
                  We are a pharmaceutical materials trading and consultancy company dedicated to supporting generic pharmaceutical manufacturers, API producers, and research-driven organizations.
                </p>  
              </div>

              {/* Mission */}
              <div className="sm:w-[377px] sm:h-[286px] w-[354px] h-[205px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[22px] pt-[20px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:p-[16px]">
                
                  <img
                    src={MissionIcon}
                    alt=""
                    className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]"
                    
                  />
                
                <h3
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',  
                  }}
                >
                  Mission
                </h3>
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '-1%',
                    leadingTrim: 'none',
                  }}
                >
                To deliver high-quality pharmaceutical ingredients and expert guidance that strengthen supply chains, reduce risk, and enable sustainable growth.
                </p>
              </div>

              {/* Vision */}
              <div className="sm:w-[377px] sm:h-[286px] w-[354px] h-[205px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[22px] pt-[20px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:p-[16px]">
                
                  <img src={VisionIcon} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] mb-[8px]" />
               
                  <h3
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',
                  }}
                >
                  Vision
                </h3>
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '-2%',
                    leadingTrim: 'none',
                  }}
                >
                To become a trusted global partner in pharmaceutical sourcing and technical consultancy, recognized for integrity, scientific expertise, and predictable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      
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
            <div className="w-full min-w-0 max-w-full flex flex-col justify-between gap-4 ml-0 flex-shrink-0 sm:gap-0 sm:overflow-hidden sm:relative sm:top-[6px] sm:w-[456px] sm:min-w-[456px] sm:max-w-[456px] sm:h-[440px] sm:min-h-[440px] sm:max-h-[440px] sm:ml-[64px] mt-[20px]">
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
                    className="inline-block font-sora font-normal text-[26px] leading-[120%] tracking-[-0.04em] text-[#1A1A1A] w-full h-auto opacity-100 mb-[12px] sm:mb-[8px] sm:text-[40px] sm:leading-[120%] sm:tracking-[-0.04em] sm:text-[#000000] sm:w-[456px] sm:h-[150px] sm:[text-shadow:2px_2px_0_#0000000F]"
                    style={{
                      fontStyle: 'normal',
                      transform: 'rotate(0deg)',
                    }}
                  >
                    Leadership Backed by Deep Pharmaceutical Expertise of 25+ Years
                  </h2>

                  <p
                    className="font-manrope text-[14px] font-semibold leading-[150%] tracking-[-0.02em]  text-[#666666] opacity-100 mb-[8px] sm:mb-[12px] sm:font-semibold sm:text-[16px] sm:leading-[150%] sm:tracking-[-0.02em] sm:text-[#4D4D4D] sm:w-[436px] sm:h-[120px] w-[353px] h-[105px] [text-shadow:2px_2px_0_#0000000F]"
                    style={{
                      fontStyle: 'normal',
                      lineHeightTrim: 'none',
                      transform: 'rotate(0deg)',
                    }}
                  >
                    Led by Dr. Rajendra Chavda, a seasoned pharmaceutical research professional with extensive experience in API development, synthetic chemistry, and process optimization, our company is built on a strong scientific foundation.
                  </p>
                </div>

                

               

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

                <button
                  type="button"
                  className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Contact Us"
                >
                  <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* What Sets Us Apart — We focus on long-term */}
      <section className="w-full flex justify-center bg-white sm:mt-[124px] sm:mb-[124px] max-[393px]:mt-[60px] ">
        <div className="w-[1164px] h-[522px] flex flex-col overflow-hidden rounded-[16px] max-[393px]:w-[354px] max-[393px]:h-auto max-[393px]:overflow-visible">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 sm:mb-[56px] w-[1164px] h-[150px] max-[393px]:mt-[120px] max-[393px]:mb-[78px]  max-[393px]:w-full max-[393px]:h-auto">
            <div className="max-w-[574px] h-[150px] max-[393px]:w-full max-[393px]:h-auto">
              <div
                className="inline-flex items-center justify-center rounded-[60px] bg-white opacity-100 shrink-0 box-border sm:w-[199px] sm:h-[36px] w-[176px] h-[32px]"
                style={{
                  paddingTop: '6px',
                  paddingRight: '12px',
                  paddingBottom: '6px',
                  paddingLeft: '12px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#EEF0F4',
                  gap: '4px',
                }}
              >
                <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
                <span className="[text-shadow:2px_2px_0_#0000000F] font-sora font-normal sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-[#111827] whitespace-nowrap">
                  What Sets Us Apart
                </span>
              </div>
              <h2
                className="[text-shadow:2px_2px_0_#0000000F] mt-[12px] text-[#111827] w-[574px] h-[100px] sm:text-[40px]  leading-[120%] max-[393px]:w-full max-[393px]:h-auto max-[393px]:text-[26px] max-[393px]:leading-[150%]"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '120%',
                  letterSpacing: '-4%',
                  leadingTrim: 'none',
                }}
              >
                We focus on long-term value, not transactional supply.
              </h2>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center w-[157px] h-[48px] shrink-0 hover:opacity-90 transition-opacity self-center sm:self-center max-[393px]:hidden"
              aria-label="Contact Us"
            >
              <img
                src={ContactBtn}
                alt="Contact Us"
                className="w-[157px] h-[48px] object-contain"
              />
            </Link>
          </div>

          {/* Four cards — each 276×316 */}
          <div className="flex flex-row flex-wrap justify-between gap-[14px] w-[1164px] h-[316px] opacity-100 shrink-0 max-[393px]:flex-col max-[393px]:w-full max-[393px]:h-auto max-[393px]:justify-start">
            {whatSetsUsApartCards.map((card) => (
              <article
                key={card.title}
                className="relative w-[276px] h-[316px] shrink-0 rounded-[12px] overflow-hidden max-[393px]:w-[351px] max-[393px]:h-[142px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  aria-hidden
                />
                <div />
                <div
                  className="relative z-10 flex h-full items-end w-full"
                  style={{ padding: 'clamp(12px, 3.5vw, 20px)' }}
                >
                  <h3
                    className={
                      card.titleTypography
                        ? 'text-white drop-shadow-sm shrink-0'
                        : '[text-shadow:2px_2px_0_#0000000F] font-sora font-semibold text-[15px] sm:text-[16px] leading-[130%] tracking-[-0.03em] text-white drop-shadow-sm shrink-0'
                    }
                    style={{
                      ...(isMobile393 &&
                      card.titleWidthMobile != null &&
                      card.titleHeightMobile != null
                        ? {
                            width: `${card.titleWidthMobile}px`,
                            height: `${card.titleHeightMobile}px`,
                            boxSizing: 'border-box',
                          }
                        : card.titleWidth != null && card.titleHeight != null
                          ? {
                              width: `clamp(140px, 45vw, ${card.titleWidth}px)`,
                              height: `clamp(44px, 9vw, ${card.titleHeight}px)`,
                              boxSizing: 'border-box',
                            }
                          : {}),
                      ...(card.titleTypography || {}),
                      ...(isMobile393 && card.titleFontSizeMobile != null
                        ? { fontSize: `${card.titleFontSizeMobile}px` }
                        : card.titleTypography
                          ? { fontSize: 'clamp(14px, 3.7vw, 24px)' }
                          : {}),
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile: button below cards */}
          <div className="hidden max-[393px]:flex w-full justify-center max-[393px]:mt-[45px] max-[393px]:mb-[27px]">
            <Link to="/contact-us" className="inline-flex items-center justify-center w-[150px] h-[42px] hover:opacity-90 transition-opacity" aria-label="Contact Us">
              <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
            </Link>
          </div>
        </div>
      </section>           
      <Footer />
    </>
  )
}

