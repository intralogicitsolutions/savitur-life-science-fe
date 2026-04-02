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

const whatSetsUsApartCards = [
  {
    title: (
      <>
        Scientifically <br /> Guided Sourcing
      </>
    ),
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    
    imageUrl:
      'https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=800',
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
  
    imageUrl:
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    
    imageUrl:
      'https://images.pexels.com/photos/7821934/pexels-photo-7821934.jpeg?auto=compress&cs=tinysrgb&w=800',
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
              className="text-[#FFFFFF] font-sora font-normal sm:text-[50px] text-[32px] leading-[100%] tracking-[-0.04em] mb-[14px]"
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
            <div className="text-[#FFFFFF] font-sora font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.02em] w-[135px] h-[24px] flex flex-nowrap items-center justify-center gap-0">
              <span 
              className="opacity-90 shrink-0"
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
              className="opacity-100 shrink-0"
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
                    className="whitespace-nowrap font-sora text-[14px] font-medium leading-[100%] tracking-[-0.04em] text-[#1A1A1A] [text-shadow:none] sm:text-[16px] sm:font-sora sm:text-[#111827] sm:[text-shadow:2px_2px_0_rgba(0,0,0,0.06)]"
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
                  className="font-sora font-normal sm:text-[40px] text-[26px] leading-[100%] tracking-[-0.04em] text-[#111827] w-[574px] h-[150px] max-[393px]:w-full max-[393px]:h-auto"
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
                  className="sm:text-[16px] text-[14px] leading-[150%] tracking-[-0.02em] sm:w-[472px] sm:h-[72px] w-[351px] h-[84px] text-[#4D4D4D] mt-[14px] text-left max-[393px]:w-full max-[393px]:h-auto max-[393px]:mt-0"
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
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-[157px] h-[48px] hover:opacity-90 transition-opacity sm:pr-[22px] pr-[16px]"
                  >
                   <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
                  </a>

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
                  className="sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
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
                  className="sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
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
                  className="sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
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
                  className="sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
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
                  className="sm:mt-[24px] mt-[12px] sm:text-[24px] text-[18px] text-[#111827]"
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
                  className="sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px] text-[#4D4D4D] w-[333px] h-[120px] leading-[150%] max-[393px]:leading-[22px] max-[393px]:h-auto"
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

      <FounderHighlight />

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
                <span className="font-sora font-normal sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] text-[#111827] whitespace-nowrap">
                  What Sets Us Apart
                </span>
              </div>
              <h2
                className="mt-[12px] text-[#111827] w-[574px] h-[100px] sm:text-[40px]  leading-[120%] max-[393px]:w-full max-[393px]:h-auto max-[393px]:text-[26px] max-[393px]:leading-[150%]"
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
            <a
              href="#"
              className="inline-flex items-center justify-center w-[157px] h-[48px] shrink-0 hover:opacity-90 transition-opacity self-center sm:self-center max-[393px]:hidden"
            >
              <img
                src={ContactBtn}
                alt="Contact Us"
                className="w-[157px] h-[48px] object-contain"
              />
            </a>
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
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(20, 30, 48, 0.58)' }}
                />
                <div
                  className="relative z-10 flex h-full items-end w-full"
                  style={{ padding: 'clamp(12px, 3.5vw, 20px)' }}
                >
                  <h3
                    className={
                      card.titleTypography
                        ? 'text-white drop-shadow-sm shrink-0'
                        : 'font-sora font-semibold text-[15px] sm:text-[16px] leading-[130%] tracking-[-0.03em] text-white drop-shadow-sm shrink-0'
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
            <a href="#" className="inline-flex items-center justify-center w-[150px] h-[42px] hover:opacity-90 transition-opacity">
            <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
            </a>
          </div>
        </div>
      </section>           
      <Footer />
    </>
  )
}

