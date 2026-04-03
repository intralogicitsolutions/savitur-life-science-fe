import HeroImg from '../assets/images/Hero_img.svg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroStrip from '../components/HeroStrip'
import ChevronRightMD from '../assets/images/Chevron_Right_MD.svg'
import CheckAll from '../assets/images/Check_All.svg'
import MailIcon from '../assets/images/mail.svg'
import PhoneIcon from '../assets/images/phone_contact.svg'
import AddressIcon from '../assets/images/Address.png'
import Line1 from '../assets/images/Line1.svg'
import SubmitBtn from '../assets/images/submit_btn.svg'

export default function ContactUs() {
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
          <div className="flex flex-col items-center justify-center text-center sm:w-[267px] sm:h-[93px] w-[166px] max-[393px]:w-[223px] h-[66px]">
            {/* Main heading */}
            <h1 
              className="text-[#FFFFFF] font-sora font-normal sm:text-[50px] text-[32px] max-[393px]:whitespace-nowrap leading-[100%] tracking-[-0.04em] mb-[14px]"
              style={{ 
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-4%',
                leadingTrim: 'none',
              }}
            >
             Contact Us
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

    {/* Contact Us - Get In Touch Section */}
    <div className="w-full flex justify-center max-[393px]:max-w-full ">
      <section
        className="flex sm:w-[1524px] items-center justify-center rounded-[16px] mx-[38px] sm:mt-[38px] sm:mb-[100px] min-h-0 px-0 sm:h-[746px] w-[393px] h-[1202px] max-[393px]:mx-0  max-[393px]:max-w-none max-[393px]:rounded-none"
        style={{ background: '#F4F6F9' }}
      >
      <div
        className="flex w-full max-w-[1046px] flex-col items-stretch justify-between shrink-0 max-[393px]:w-full max-[393px]:max-w-full max-[393px]:mx-4 lg:h-[602px] lg:flex-row lg:items-center lg:gap-0 lg:px-0 lg:py-0 "
      >
        {/* Left Column - Contact Info */}
        <div className="flex w-[393px] h-[428px] flex-col self-center sm:h-[392px] sm:w-[387px] lg:mr-[85px] lg:self-auto max-[393px]:mb-[60px] max-[393px]:mt-[60px] max-[393px]:h-auto max-[393px]:w-full max-[393px]:max-w-full max-[393px]:px-[20px]">
          {/* Contact Us Badge */}
          <div className="w-[123px] h-[32px] sm:w-[138px] sm:h-[36px] inline-flex items-center pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm sm:mb-[14px] mb-[12px]">
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />

            <span
              className="font-sora font-normal sm:text-[16px] text-[14px] leading-[100%] text-[#212121] whitespace-nowrap"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-0.04em',
              }}
            >
              Contact Us
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="sm:mb-[32px] max-[393px]:mb-[20px] w-full text-[#111827] sm:text-[40px] text-[26px] leading-[120%] max-[393px]:text-[26px] max-[393px]:leading-[120%]"
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.04em',
            }}
          >
            Have Questions? <br /> We're Ready to Help.
          </h2>

          {/* Contact Details */}
          <div className="flex w-full max-w-[338px] flex-col max-[393px]:max-w-full">
            <a
              href="mailto:info@saviturlifescience.com"
              className="sm:mb-[24px] max-[393px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-[313px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[393px]:max-w-full"
            >
              <img  
                src={MailIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Email
                </p>
                <p
                  className="font-manrope text-[#000000] sm:text-[20px] text-[18px] leading-[100%] break-words max-[393px]:whitespace-normal sm:truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="info@saviturlifescience.com"
                >
                  info@saviturlifescience.com
                </p>
              </div>
            </a>    
            
            <a href="tel:+917043112818" className="sm:mb-[24px] max-[393px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-[313px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[393px]:max-w-full">
            <img
                src={PhoneIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div>
              <p
                  className="font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                   
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Contact
                </p>
                <p
                  className="font-manrope text-[#000000] sm:text-[20px] text-[18px] leading-[100%] max-[393px]:whitespace-normal sm:truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="+91 70431 12818"
                >+91 70431 12818</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <img
                src={AddressIcon}
                alt=""
                 className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div>
              <p
                  className="font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Address
                </p>
                <p
                  className="font-manrope text-[#000000] sm:text-[20px] text-[18px] leading-[130%] max-[393px]:whitespace-normal sm:truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                  }}
                  title="Rajkot, Gujarat, India - 360110"
                >
                    Rajkot, Gujarat, India - 360110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form Card */}
        <div className="flex w-full flex-1 justify-center lg:min-w-0 max-[393px]:w-full">
          <div
            className="box-border w-[393px] h-[772px] sm:w-[574px] sm:h-[602px] shrink-0 overflow-y-auto rounded-[12px] bg-white pl-8 pr-8 pt-12 pb-8 max-[393px]:max-w-full max-[393px]:rounded-none max-[393px]:px-[20px] max-[393px]:pb-[60px] max-[393px]:pt-[60px] lg:h-[602px]"
          >
            <h3
              className="mb-[36px] max-[393px]:mb-[20px] text-center text-[#000000] sm:text-[40px] text-[26px] leading-[100%]"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.04em',
              }}
            >
              Get In Touch
            </h3>

            <form className="flex flex-col">
              <div className="sm:mb-[20px] mb-[16px] grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="block text-[#000000] sm:mb-[6px] mb-[4px]"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="box-border h-[50px] w-full max-w-full rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] transition-all placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] sm:max-w-[248px]"
                  />
                </div>

                <div>
                <label
                    className="block text-[#000000] sm:mb-[6px] mb-[4px]"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="box-border h-[50px] w-full max-w-full rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] transition-all placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] sm:max-w-[248px]"
                  />
                </div>
              </div>


              <div className="sm:mb-[20px] mb-[16px] grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <label
                    className="block text-[#000000] sm:mb-[6px] mb-[4px]"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="box-border h-[50px] w-full max-w-full rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] transition-all placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] sm:max-w-[248px]"
                  />
                </div>
                <div>
                <label
                    className="block text-[#000000] mb-[6px]"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Phone/Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="box-border flex h-[50px] w-full max-w-full min-w-0 items-center gap-[8px] overflow-hidden rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] py-[10px] pl-4 pr-4 transition-all sm:max-w-[248px]"
                  >
                    <select
                      className="bg-transparent border-0 font-manrope text-[14px] text-[#111827] cursor-pointer shrink-0"
                      style={{ height: '100%', padding: 0, border: 'none' }}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <img
                      src={Line1}
                      alt=""
                      className="w-[1px] h-[20px] shrink-0"
                      aria-hidden
                    />
                    <input
                      type="tel"
                      className="flex-1 border-0 bg-transparent font-manrope text-[14px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
                      style={{ height: '100%', padding: 0, border: 'none' }}
                    />
                  </div>
                </div>

              </div>

              <div>
              <label
                    className="block text-[#000000] sm:mb-[6px] mb-[4px]"
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                  Message/Query/Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter Message"
                  className="box-border h-[130px] w-full max-w-full rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] transition-all placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] lg:max-w-[510px]"
                />
              </div>

              <button
                type="submit"
                className="mt-[38px] flex w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0 max-[393px]:mt-6"
              >
                <img
                  src={SubmitBtn}
                  alt="Submit"
                  className="w-[157px] h-[48px] select-none"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
    </div>

          
      <Footer />
    </>
  )
}

