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

const whatSetsUsApartCards = [
  {
    title: 'Scientifically Guided Sourcing',
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=800',
    titleWidth: 177,
    titleHeight: 66,
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
    title: 'Trusted Manufacturing',
    imageUrl:
      'https://images.pexels.com/photos/3912479/pexels-photo-3912479.jpeg?auto=compress&cs=tinysrgb&w=800',
      titleWidth: 158,
      titleHeight: 66,
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
    title: 'Regulatory Conscious Approach',
    imageUrl:
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      titleWidth: 221,
      titleHeight: 66,
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
    title: 'Risk - Mitigated Execution',
    imageUrl:
      'https://images.pexels.com/photos/7821934/pexels-photo-7821934.jpeg?auto=compress&cs=tinysrgb&w=800',
      titleWidth: 163,
      titleHeight: 66,
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
  return (
    <>
      <Header />
      <section className="relative w-full min-w-full h-[460px] min-h-[460px] overflow-hidden" style={{ width: '100vw', minWidth: '100%', maxWidth: '100%' }}>
        {/* Background image */}
        <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center -40px',
          minHeight: '460px',
          left: 0,
          right: 0,
          width: '100%',
        }}
      />

        {/* Overlay gradients (matches Hero style) */}
        <div
          className="absolute inset-0"
          style={{
            background: '#1F2A44BF',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full min-h-[460px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-[223px] h-[93px]">
            {/* Main heading */}
            <h1 
              className="text-[#FFFFFF] font-sora font-normal text-[50px] leading-[100%] tracking-[-0.04em] mb-[14px]"
              style={{ 
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '50px',
                lineHeight: '100%',
                letterSpacing: '-4%',
                leadingTrim: 'none',
              }}
            >
              About Us
            </h1>

            {/* Breadcrumb */}
            <div className="text-[#FFFFFF] font-sora font-normal text-[14px] leading-[100%] tracking-[-0.02em] w-[135px] h-[24px] flex flex-nowrap items-center justify-center gap-0">
              <span 
              className="opacity-90 shrink-0"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                leadingTrim: 'none',
              }}
            >
              Home
            </span>
              <span className="opacity-70 shrink-0 inline-flex items-center justify-center">
                <img src={ChevronRightMD} alt="" className="w-[20px] h-[20px] brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} aria-hidden />
              </span>
              <span 
              className="opacity-100 shrink-0"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '16px',
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
        <div className="w-[1164px] h-[541px] mx-auto mt-[124px] mb-[124px] rounded-[16px] bg-[#FFFFFF] overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Top pill */}
            <div>
              <div
                className="inline-flex items-center w-[202px] h-[36px] px-[12px] py-[6px] rounded-[60px] border-[1px] border-[#EEF0F4] bg-white opacity-100"
                style={{ transform: 'rotate(0deg)' }}
              >
                <span className="inline-flex items-center justify-center w-[24px] h-[24px]">
                    <img src={CheckAll} alt="" className="h-[24px] w-[24px]" />
                </span>
                  
                <span
                  className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] text-[#111827]"
                  style={{
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeightTrim: 'none',
                  }}
                >
                  About Our Business
                </span>
              </div>
            </div>

            {/* Top row */}
            <div className="flex items-start justify-between gap-[118px]">
              <div className="w-[574px] h-[150px] mt-[14px]">
                <h2
                  className="font-sora font-normal text-[40px] leading-[100%] tracking-[-0.04em] text-[#111827] w-[574px] h-[150px]"
                  style={{
                    fontStyle: 'normal',
                    fontSize: '40px',
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

              <div className="w-[520px] flex flex-col items-start">
                <p
                  className="text-[16px] leading-[150%] tracking-[-0.02em] w-[472px] h-[72px] text-[#4D4D4D] mt-[14px] text-left"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.02em',
                    lineHeightTrim: 'none',
                  }}
                >
                  Delivering high-quality pharmaceutical materials and strategic consultancy to support research, development, and commercial manufacturing worldwide.
                </p>

                <div className="flex items-center justify-start mt-[30px] w-[404px] h-[48px]">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-[157px] h-[48px] hover:opacity-90 transition-opacity pr-[22px]"
                  >
                    <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px] object-contain" />
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center hover:opacity-90 transition-opacity"
                  >
                    <span
                      className="font-sora font-semibold text-[16px] leading-[100%] tracking-[-0.02em] underline"
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '16px',
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
                      className="w-[24px] h-[24px] shrink-0"
                      style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(98%) saturate(1500%) hue-rotate(360deg) brightness(105%) contrast(101%)' }}
                      aria-hidden
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Cards row */}
            <div className="flex justify-between w-[1164px] h-[285px] mt-[56px]">
              {/* Who We Are */}
              <div className="w-[377px] h-[285px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[22px] pt-[20px]">
                
                  <img src={WhoWeAreIcon} alt="" className="w-[54px] h-[54px]"/>
              
                <h3
                  className="mt-[24px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',
                  }}
                >
                  Who We Are
                </h3>
                <p
                  className="mt-[12px] text-[#4D4D4D] w-[333px] h-[120px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-2%',
                    leadingTrim: 'none',
                  }}
                >
                  We are a pharmaceutical materials trading and consultancy company dedicated to supporting generic pharmaceutical manufacturers, API producers, and research-driven organizations.
                </p>  
              </div>

              {/* Mission */}
              <div className="w-[377px] h-[286px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[22px] pt-[20px]">
                
                  <img
                    src={MissionIcon}
                    alt=""
                    className="w-[54px] h-[54px]"
                    
                  />
                
                <h3
                  className="mt-[24px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',
                  }}
                >
                  Mission
                </h3>
                <p
                  className="mt-[12px] text-[#4D4D4D] w-[333px] h-[120px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-2%',
                    leadingTrim: 'none',
                  }}
                >
                To deliver high-quality pharmaceutical ingredients and expert guidance that strengthen supply chains, reduce risk, and enable sustainable growth.
                </p>
              </div>

              {/* Vision */}
              <div className="w-[377px] h-[286px] rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] overflow-hidden px-[20px] pt-[20px]">
                
                  <img src={VisionIcon} alt="" className="w-[54px] h-[54px]" />
               
                  <h3
                  className="mt-[24px] text-[#111827]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-4%',
                    leadingTrim: 'none',
                  }}
                >
                  Vision
                </h3>
                <p
                  className="mt-[12px] text-[#4D4D4D] w-[333px] h-[120px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
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
      <section className="w-full flex justify-center bg-white mt-[124px] mb-[124px]">
        <div className="w-[1164px] h-[522px] flex flex-col overflow-hidden rounded-[16px]">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 mb-[56px] w-[1164px] h-[150px]">
            <div className="max-w-[574px] h-[150px]">
              <div
                className="inline-flex items-center justify-center rounded-[60px] bg-white opacity-100 shrink-0 box-border"
                style={{
                  width: '199px',
                  height: '36px',
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
                <span className="inline-flex items-center justify-center w-[24px] h-[24px] shrink-0">
                  <img src={CheckAll} alt="" className="h-[24px] w-[24px]" aria-hidden />
                </span>
                <span className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] text-[#111827] whitespace-nowrap">
                  What Sets Us Apart
                </span>
              </div>
              <h2
                className="mt-[14px] text-[#111827] w-[574px] h-[100px]"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '40px',
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
              className="inline-flex items-center justify-center w-[157px] h-[48px] shrink-0 hover:opacity-90 transition-opacity self-center sm:self-center"
            >
              <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px] object-contain" />
            </a>
          </div>

          {/* Four cards — each 276×316 */}
          <div className="flex flex-row flex-wrap justify-between gap-[14px] w-[1164px] h-[316px] opacity-100 shrink-0">
            {whatSetsUsApartCards.map((card) => (
              <article
                key={card.title}
                className="relative w-[276px] h-[316px] shrink-0 rounded-[12px] overflow-hidden"
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
                  style={
                    card.titlePadding
                      ? { padding: card.titlePadding }
                      : { padding: '20px' }
                  }
                >
                  <h3
                    className={
                      card.titleTypography
                        ? 'text-white drop-shadow-sm shrink-0'
                        : 'font-sora font-semibold text-[15px] sm:text-[16px] leading-[130%] tracking-[-0.03em] text-white drop-shadow-sm shrink-0'
                    }
                    style={{
                      ...(card.titleWidth != null && card.titleHeight != null
                        ? {
                            width: `${card.titleWidth}px`,
                            height: `${card.titleHeight}px`,
                            boxSizing: 'border-box',
                          }
                        : {}),
                      ...(card.titleTypography || {}),
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>           
      <Footer />
    </>
  )
}

