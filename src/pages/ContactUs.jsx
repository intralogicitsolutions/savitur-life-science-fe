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
    <div className="w-full flex justify-center ">
      <section
        className="flex items-center justify-center rounded-[16px] mr-[38px] ml-[38px] mt-[38px] mb-[100px]"
        style={{ width: '1524px', maxWidth: '100%', height: '746px', background: '#F4F6F9' }}
      >
      <div
        className="flex flex-col lg:flex-row items-center justify-between shrink-0"
        style={{ width: '1046px', height: '602px' }}
      >
        {/* Left Column - Contact Info */}
        <div className="flex flex-col mr-[85px]" style={{ width: '387px', height: '392px' }}>
          {/* Contact Us Badge */}
          <div className="inline-flex items-center pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm mb-[14px] w-fit h-9 " style={{ width: '138px', height: '36px' }}>
            <span className="inline-flex items-center justify-center h-[24px] w-[24px] mr-[2px]">
              <img src={CheckAll} alt="" className="h-[24px] w-[24px]" aria-hidden />
            </span>
            <span
              className="font-sora font-normal text-[16px] leading-[100%] text-[#212121] whitespace-nowrap"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '-0.04em',
              }}
            >
              Contact Us
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-[#111827] mb-[32px]"
            style={{
                width: '387px',
                height: '100px',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '40px',
              lineHeight: '120%',
              letterSpacing: '-0.04em',
            }}
          >
            Have Questions? We're Ready to Help.
          </h2>

          {/* Contact Details */}
          <div className="flex flex-col" style={{ width: '338px', height: '210px' }}>
            <a
              href="mailto:info@saviturlifescience.com"
              className="flex items-center gap-4 group shrink-0 overflow-hidden mb-[24px]"
              style={{ width: '325px', height: '48px' }}
            >
              <img
                src={MailIcon}
                alt=""
                className="w-[48px] h-[48px] shrink-0 object-contain group-hover:opacity-90 transition-opacity pt-[3px] pb-[3px]"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="font-manrope text-[16px] text-[#4D4D4D] leading-[100%] mb-[5px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Email
                </p>
                <p
                  className="font-manrope text-[#000000] leading-[100%] truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="info@saviturlifescience.com"
                >
                  info@saviturlifescience.com
                </p>
              </div>
            </a>    
            
            <a href="tel:+917043112818" className="flex items-center gap-4 group shrink-0 overflow-hidden mb-[24px]">
            <img
                src={PhoneIcon}
                alt=""
                className="w-[48px] h-[48px] shrink-0 object-contain group-hover:opacity-90 transition-opacity pt-[3px] pb-[3px]"
                aria-hidden
              />
              <div>
              <p
                  className="font-manrope text-[16px] text-[#4D4D4D] leading-[100%] mb-[5px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Contact
                </p>
                <p
                  className="font-manrope text-[#000000] leading-[100%] truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="info@saviturlifescience.com"
                >+91 70431 12818</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <img
                src={AddressIcon}
                alt=""
                 className="w-[48px] h-[48px] shrink-0 object-contain group-hover:opacity-90 transition-opacity pt-[3px] pb-[3px]"
                aria-hidden
              />
              <div>
              <p
                  className="font-manrope text-[16px] text-[#4D4D4D] leading-[100%] mb-[5px]"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Address
                </p>
                <p
                  className="font-manrope text-[#000000] leading-[100%] truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="info@saviturlifescience.com"
                >
                    Rajkot, Gujarat, India - 360110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form Card */}
        <div className="flex-1 w-full flex justify-center">
          <div
            className="w-full bg-white rounded-[12px] pl-[32px] pr-[32px] pt-[48px] shrink-0 overflow-y-auto box-border"
            style={{ width: '574px', height: '602px', maxWidth: '100%' }}
          >
            <h3
              className="text-[#000000] text-center mb-[36px]"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '100%',
                letterSpacing: '-0.04em',
              }}
            >
              Get In Touch
            </h3>

            <form className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[20px]">
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
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="rounded-[12px] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] transition-all"
                    style={{ width: '248px', height: '50px', opacity: 1, border: '1px solid #1F2A4433' }}
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
                    Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="rounded-[12px] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] transition-all"
                    style={{ width: '248px', height: '50px', opacity: 1, border: '1px solid #1F2A4433' }}
                  />
                </div>
              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[20px]">
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="rounded-[12px] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] transition-all"
                    style={{ width: '248px', height: '50px', opacity: 1, border: '1px solid #1F2A4433' }}
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
                    className="flex items-center gap-[8px] rounded-[12px] overflow-hidden bg-[#F4F6F9] transition-all box-border"
                    style={{
                      width: '248px',
                      height: '50px',
                      border: '1px solid #1F2A4433',
                      paddingTop: '10px',
                      paddingRight: '16px',
                      paddingBottom: '12px',
                      paddingLeft: '16px',
                    }}
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
                  Message/Query/Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter"
                  className="rounded-[12px] bg-[#F4F6F9] pt-[10px] pr-[16px] pb-[12px] pl-[16px] font-manrope text-[14px] text-[#111827] placeholder:font-semibold placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#4D4D4D] transition-all"
                    style={{ width: '510px', height: '130px', opacity: 1, border: '1px solid #1F2A4433' }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer mt-[38px]"
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

