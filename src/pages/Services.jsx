import { Link } from "react-router-dom";
import HeroImg from "../assets/images/Hero_img.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroStrip from "../components/HeroStrip";
import ChevronRightMD from "../assets/images/Chevron_Right_MD.svg";
import CheckAll from "../assets/images/Check_All.svg";
import IconProcess from "../assets/images/Process.svg";
import IconStrategy from "../assets/images/Strategy.svg";
import IconCompliance from "../assets/images/Compliance.svg";
import IconSourcing from "../assets/images/Sourcing.svg";
import IconTechnology from "../assets/images/Technology.svg";
import IconImprovement from "../assets/images/Improvement.svg";
import ContactBtn from "../assets/images/contact-btn.svg";

export default function Services() {
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
            background: "#1F2A44BF",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full min-h-[460px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-[179px] h-[93px]">
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
              Services
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
                Contact us
              </span>
            </div>
          </div>
        </div>
      </section>
      <HeroStrip />

      {/* Services — expert consultancy */}
      <section
        className="mx-auto mb-[124px] mt-[124px] box-border flex min-h-0 w-full max-w-full flex-col max-[393px]:max-w-[354px] max-[393px]:mt-[60px] max-[393px]:mb-[60px] max-[393px]:px-[20px]"
        style={{ width: '1164px', maxWidth: '100%' }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div
              className="box-border inline-flex shrink-0 items-center justify-center rounded-[60px]"
              style={{
                width: '149px',
                height: '36px',
                opacity: 1,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#0000001A',
                borderRadius: '60px',
                padding: '6px 12px',
                boxShadow: '2px 2px 0px 0px #0000000F',
              }}
            >
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
              
              <span
                    className="whitespace-nowrap font-sora text-[14px] font-medium leading-[100%] tracking-[-0.04em] text-[#1A1A1A] [text-shadow:none] sm:text-[16px] sm:font-sora sm:text-[#111827] sm:[text-shadow:2px_2px_0_rgba(0,0,0,0.06)]"
                    style={{ fontStyle: 'normal' }}
                  >
                Our Services
              </span>
            </div>

          <div className="sm:w-[574px] sm:h-[150px] w-[351px] h-[70px] mt-[14px] max-[393px]:w-[351px] max-[393px]:h-[70px]">
              <h2
                className="box-border sm:text-[40px] text-[26px] max-[393px]:text-[26px] max-[393px]:leading-[120%]"
                style={{
                  fontFamily: "Sora",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "120%",
                  letterSpacing: "-0.04em",
                  width: "574px",
                  height: "150px",
                  textShadow: "2px 2px 0px #0000000F",
                }}
              >
                Expert Consultancy for <br />  Pharmaceutical Development <br /> & Manufacturing
              </h2>
          </div>

          </div>
          
          <p
            className="text-[#4D4D4D] sm:text-[16px] text-[14px] mt-[50px] max-[393px]:mt-0 max-[393px]:w-full"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontStyle: 'normal',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#4D4D4D',
              textShadow: '2px 2px 0px 0px #0000000F',
            }}
          >
            From process understanding to commercial execution, we provide
            practical, science-driven guidance to help you reduce risks, improve
            efficiency, and achieve predictable outcomes across your
            pharmaceutical projects.
          </p>
        
        </div>

        {/* Cards (3 columns x 2 rows) */}
        <div className="grid grid-cols-3 w-[1164px] sm:mt-[56px] mt-[28px] max-[393px]:grid-cols-1 max-[393px]:w-full max-[393px]:mt-[28px] max-[393px]:gap-[14px]">
          {/* 1 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconProcess} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>

              <h3
                className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "semibold",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Process Development & <br /> Optimization
              </h3>
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Improving chemical processes to enhance yield, scalability, and cost-efficiency across development and manufacturing stages.
              </p>
           
          </article>

          {/* 2 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconStrategy} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>
            
              <h3
                className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                API & Intermediate Strategy <br />
                Consulting
              </h3>
            
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Advising on the right selection of APIs, intermediates, and KSMs for reliable supply and process compatibility.
              </p>
           
          </article>

          {/* 3 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconCompliance} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>
            
              <h3
                className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Regulatory & Compliance <br /> Support
              </h3>
            
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Ensuring alignment with regulatory <br /> standards through proper documentation, quality practices, and compliance readiness.
              </p>
           
          </article>

          {/* 4 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconSourcing} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>
            
              <h3
                 className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Vendor & Sourcing <br /> Strategy
              </h3>
            
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Identifying trusted suppliers and manufacturing partners to ensure consistent quality and supply chain reliability.
              </p>
           
          </article>

          {/* 5 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconTechnology} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>
            
              <h3
                 className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Scale-Up & Technology <br /> Transfer
              </h3>
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
              Supporting smooth transition from lab-scale development to commercial production with consistent and efficient processes.
              </p>
           
          </article>

          {/* 6 */}
          <article
            className="box-border sm:w-[377px] sm:h-[285px] w-[354px] h-[209px] shrink-0 rounded-[12px] border border-[#EEF0F4] bg-[#F4F6F9] sm:px-[20px] sm:py-[20px] px-[16px] pt-[16px] pb-[20px] flex flex-col mb-[16px] max-[393px]:w-full max-[393px]:h-auto max-[393px]:mb-0"
            style={{ boxShadow: '2px 2px 0px 0px #0000000F' }}
          >
            <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]  shrink-0 flex items-center justify-center sm:mb-[24px] mb-[12px]">
              <img src={IconImprovement} alt="" className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
            </div>
            
              <h3
                className="text-[#000000] sm:text-[24px] text-[18px] sm:line-height-[120%] line-height-[100%]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Troubleshooting & <br /> Process Improvement
              </h3>
            
            
              <p
                className="text-[#4D4D4D] sm:mt-[12px] mt-[8px] sm:text-[16px] text-[14px]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                  color: "#4D4D4D",
                  textShadow: "2px 2px 0px 0px #0000000F",
                }}
              >
                Resolving process challenges and optimizing workflows to improve performance, consistency, and operational efficiency.
              </p>
           
          </article>
        </div>

        {/* CTA */}
        <div className="mx-auto flex h-[94px] w-[188px] shrink-0 flex-col items-center justify-center mt-[56px] max-[393px]:mt-[32px] sm:h-[84px] sm:w-[376px]">
          <p
            className="text-center text-[#4D4D4D] sm:text-[16px] text-[14px] mb-[12px] sm:mb-[12px]"
            style={{
              fontFamily: "Manrope",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              color: "#4D4D4D",
              textShadow: "2px 2px 0px 0px #0000000F",
            }}
          >
            Discuss Your Queries With Us to Get Best Guidance.
          </p>
          <Link
            to="/contact-us"
          >
           <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
          </Link>
        </div>

      </section>
      <Footer />
    </>
  );
}
