import { useEffect, useMemo, useRef, useState } from 'react'
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
import CaretDownMd from '../assets/images/Caret_Down_MD.svg'
import SubmitBtn from '../assets/images/submit_btn.svg'
import TickCircle from '../assets/images/tick-circle.svg'
import SubmitAnotherBtn from '../assets/images/Submitanother.svg'

const FALLBACK_DIAL_CODES = [
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
]

export default function ContactUs() {
  const [successOpen, setSuccessOpen] = useState(false)
  const [dialOpen, setDialOpen] = useState(false)
  const [dialSearch, setDialSearch] = useState('')
  const [dialCodes, setDialCodes] = useState(FALLBACK_DIAL_CODES)
  const [selectedDial, setSelectedDial] = useState(FALLBACK_DIAL_CODES[0])
  const dialWrapRef = useRef(null)

  const filteredDialCodes = useMemo(() => {
    const q = dialSearch.trim().toLowerCase()
    if (!q) return dialCodes
    return dialCodes.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.toLowerCase().includes(q),
    )
  }, [dialCodes, dialSearch])

  useEffect(() => {
    if (!dialOpen) return
    const onPointerDown = (e) => {
      if (!dialWrapRef.current) return
      if (!dialWrapRef.current.contains(e.target)) setDialOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [dialOpen])

  useEffect(() => {
    const controller = new AbortController()

    async function loadCountries() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2', {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`Failed to load countries: ${res.status}`)
        const data = await res.json()

        const rows = (Array.isArray(data) ? data : [])
          .map((c) => {
            const name = c?.name?.common
            const code = c?.cca2
            const root = c?.idd?.root
            const suffixes = Array.isArray(c?.idd?.suffixes) ? c.idd.suffixes : []
            if (!name || !code || !root || suffixes.length === 0) return null
            return { code, name, dial: `${root}${suffixes[0]}` }
          })
          .filter(Boolean)

        // de-dupe by code+dial (some countries have multiple)
        const seen = new Set()
        const unique = []
        for (const r of rows) {
          const k = `${r.code}|${r.dial}`
          if (seen.has(k)) continue
          seen.add(k)
          unique.push(r)
        }

        unique.sort((a, b) => a.name.localeCompare(b.name))
        if (unique.length > 0) setDialCodes(unique)

        // Keep selection stable; prefer India if present
        const preferred =
          unique.find((x) => x.code === selectedDial.code && x.dial === selectedDial.dial) ||
          unique.find((x) => x.code === 'IN' && x.dial === '+91') ||
          unique[0]
        if (preferred) setSelectedDial(preferred)
      } catch (e) {
        if (e?.name === 'AbortError') return
        // keep fallback list on error
      }
    }

    loadCountries()
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="flex flex-col items-center justify-center text-center sm:w-[267px] sm:h-[93px] w-[166px] max-[480px]:w-[223px] h-[66px]">
            {/* Main heading */}
            <h1 
              className="[text-shadow:2px_2px_0_#0000000F] text-[#FFFFFF] font-sora font-normal sm:text-[50px] text-[32px] max-[480px]:whitespace-nowrap leading-[100%] tracking-[-0.04em] mb-[14px]"
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
            <div className="[text-shadow:2px_2px_0_#0000000F] text-[#FFFFFF] font-sora font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.02em] w-[135px] h-[24px] flex flex-nowrap items-center justify-center gap-0">
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
              Contact us
            </span>
            </div>
           
          </div>
        </div>
      </section>
      <HeroStrip />

    {/* Contact Us - Get In Touch Section */}
    <div className="w-full flex justify-center max-[480px]:max-w-full">
      <section
        className="flex w-full max-w-[480px] items-center justify-center rounded-[16px] mx-auto sm:w-[1524px] sm:max-w-none sm:mx-[38px] sm:mt-[38px] sm:mb-[100px] min-h-0 px-0 sm:h-[746px] h-auto max-[480px]:rounded-none"
        style={{ background: '#F4F6F9' }}
      >
      <div
        className="flex w-full max-w-[1046px] flex-col items-stretch justify-between shrink-0 max-[480px]:w-full max-[480px]:max-w-full max-[480px]:mx-0 lg:h-[602px] lg:flex-row lg:items-center lg:gap-0 lg:px-0 lg:py-0"
      >
        {/* Left Column - Contact Info */}
        <div className="flex w-full max-w-[387px] flex-col self-center sm:w-[387px] lg:mr-[85px] lg:self-auto max-[480px]:mb-[60px] max-[480px]:mt-[80px] max-[480px]:h-auto max-[480px]:w-full max-[480px]:max-w-full px-[20px] max-[360px]:px-[16px] sm:px-0">
          {/* Contact Us Badge */}
          <div className="w-[123px] h-[32px] sm:w-[138px] sm:h-[36px] inline-flex items-center pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm sm:mb-[14px] mb-[12px]">
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />

            <span
              className="[text-shadow:2px_2px_0_#0000000F] font-sora font-normal sm:text-[16px] text-[14px] leading-[100%] text-[#212121] whitespace-nowrap"
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
            className="[text-shadow:2px_2px_0_#0000000F] sm:mb-[32px] max-[480px]:mb-[20px] w-full text-[#111827] sm:text-[40px] text-[26px] leading-[120%] max-[480px]:text-[26px] max-[480px]:leading-[120%]"
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
          <div className="flex w-full max-w-[338px] flex-col max-[480px]:max-w-full">
            <a
              href="mailto:dr.rajendra@saviturlifescience.com"
              className="sm:mb-[24px] max-[480px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full sm:hidden"
            >
              <img  
                src={MailIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[15px] text-[14px] leading-[100%] whitespace-nowrap max-w-full"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                  }}
                  title="info@saviturlifescience.com"
                >
                  dr.rajendra@saviturlifescience.com
                </p>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dr.rajendra%40saviturlifescience.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:mb-[24px] max-[480px]:mb-[20px] sm:flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full"
            >
              <img  
                src={MailIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[15px] text-[14px] leading-[100%] whitespace-nowrap max-w-full"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                  }}
                  title="info@saviturlifescience.com"
                >
                  dr.rajendra@saviturlifescience.com
                </p>
              </div>
            </a>
            
            <a href="tel:+917043112818" className="sm:mb-[24px] max-[480px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full">
            <img
                src={PhoneIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div>
              <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[16px] leading-[100%] max-[480px]:whitespace-normal sm:truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="+91 70431 12818"
                >+91 96648 94484</p>
              </div>
            </a>

           
            <a
              href="mailto:karan@saviturlifescience.com"
              className="sm:mb-[24px] max-[480px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full sm:hidden"
            >
              <img  
                src={MailIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[15px] text-[14px] leading-[100%] whitespace-nowrap max-w-full"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                  }}
                  title="karan@saviturlifescience.com"
                >
                  karan@saviturlifescience.com
                </p>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karan%40saviturlifescience.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:mb-[24px] max-[480px]:mb-[20px] sm:flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full"
            >
              <img  
                src={MailIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div className="min-w-0 flex flex-col justify-center leading-none">
                <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[15px] text-[14px] leading-[100%] whitespace-nowrap max-w-full"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                  }}
                  title="karan@saviturlifescience.com"
                >
                  karan@saviturlifescience.com
                </p>
              </div>
            </a>
            
            <a href="tel:+919227032237" className="sm:mb-[24px] max-[480px]:mb-[20px] flex sm:h-[54px] sm:w-[325px] w-full max-w-[325px] h-[46px] shrink-0 items-center gap-4 overflow-hidden group max-[480px]:max-w-full">
            <img
                src={PhoneIcon}
                alt=""
                className="sm:w-[48px] sm:h-[48px] w-[40px] h-[40px] shrink-0 object-contain group-hover:opacity-90 transition-opacity"
                aria-hidden
              />
              <div>
              <p
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px] text-[14px] text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[16px] leading-[100%] max-[480px]:whitespace-normal sm:truncate"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                  }}
                  title="+91 92270 32237"
                >+91 92270 32237</p>
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope sm:text-[16px]  text-[#4D4D4D] leading-[100%] sm:mb-[5px] mb-[2px]"
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
                  className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[#000000] sm:text-[16px] leading-[130%] whitespace-pre-line"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '-0.02em',
                  }}
                  title="Rajkot, Gujarat, India - 360110"
                >
                  {'B/103 Siddhi Haritage, Jivraj park main road, Ambika township, Rajkot, Gujarat, India.- 360 005.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form Card */}
        <div className="flex w-full flex-1 justify-center lg:min-w-0 max-[480px]:w-full">
          <div
            className="box-border w-full max-w-[480px] h-[750px] sm:w-[574px] sm:max-w-none sm:h-[602px] shrink-0 overflow-y-auto rounded-[12px] bg-white pl-8 pr-8 pt-12 pb-8 max-[480px]:h-auto max-[480px]:max-w-full max-[480px]:rounded-none max-[480px]:px-[20px] max-[360px]:px-[16px] max-[480px]:pb-[60px] max-[480px]:pt-[60px] lg:h-[602px]"
          >
            <h3
              className="[text-shadow:2px_2px_0_#0000000F] mb-[36px] max-[480px]:mb-[20px] text-center text-[#000000] sm:text-[40px] text-[26px] leading-[100%]"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.04em',
              }}
            >
              Get In Touch
            </h3>

            <form
              className="flex flex-col"
              onSubmit={(e) => {
                e.preventDefault()
                setSuccessOpen(true)
              }}
            >
              <div className="sm:mb-[20px] mb-[16px] grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="[text-shadow:2px_2px_0_#0000000F] block text-[#000000] sm:mb-[6px] mb-[4px]"
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
                    className="[text-shadow:2px_2px_0_#0000000F] block text-[#000000] sm:mb-[6px] mb-[4px]"
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
                    className="[text-shadow:2px_2px_0_#0000000F] block text-[#000000] sm:mb-[6px] mb-[4px]"
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
                    className="[text-shadow:2px_2px_0_#0000000F] block text-[#000000] mb-[6px]"
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
                    className="relative box-border flex h-[50px] w-full max-w-full min-w-0 items-center gap-[8px] overflow-visible rounded-[12px] border border-[#1F2A4433] bg-[#F4F6F9] py-[10px] pl-4 pr-4 transition-all sm:max-w-[248px]"
                  >
                    <div ref={dialWrapRef} className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setDialOpen((v) => !v)}
                        className="inline-flex items-center gap-2 bg-transparent border-0 p-0 font-manrope text-[14px] text-[#111827] cursor-pointer"
                        style={{ height: '100%' }}
                        aria-haspopup="listbox"
                        aria-expanded={dialOpen}
                      >
                        <span>{selectedDial.dial}</span>
                        <img
                          src={CaretDownMd}
                          alt=""
                          className="w-[18px] h-[18px] opacity-70"
                          style={{ filter: 'brightness(0)' }}
                          aria-hidden
                        />
                      </button>

                      {dialOpen && (
                        <div className="absolute left-0 top-[calc(100%+10px)] z-[80] w-[240px] rounded-[10px] border border-[#E5E7EB] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                          <div className="p-2">
                            <input
                              value={dialSearch}
                              onChange={(e) => setDialSearch(e.target.value)}
                              placeholder="Search country..."
                              className="w-full rounded-[8px] border border-[#E5E7EB] px-3 py-2 font-manrope text-[14px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1F2A44]/20"
                              autoFocus
                            />
                          </div>
                          <div className="max-h-[220px] overflow-auto pb-2" role="listbox">
                            {filteredDialCodes.map((c) => {
                              const isActive = c.code === selectedDial.code && c.dial === selectedDial.dial
                              return (
                                <button
                                  key={`${c.code}-${c.dial}`}
                                  type="button"
                                  role="option"
                                  aria-selected={isActive}
                                  onClick={() => {
                                    setSelectedDial(c)
                                    setDialOpen(false)
                                    setDialSearch('')
                                  }}
                                  className={`w-full px-3 py-2 text-left font-manrope text-[14px] ${
                                    isActive ? 'bg-[#F4F6F9] text-[#111827]' : 'bg-white text-[#111827] hover:bg-[#F4F6F9]'
                                  }`}
                                >
                                  {c.name} ({c.dial})
                                </button>
                              )
                            })}
                            {filteredDialCodes.length === 0 && (
                              <div className="px-3 py-2 font-manrope text-[14px] text-[#6B7280]">No results</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
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
                    className="[text-shadow:2px_2px_0_#0000000F] block text-[#000000] sm:mb-[6px] mb-[4px]"
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
                className="mt-[38px] flex w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0 max-[480px]:mt-6"
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

      {/* Success modal */}
      {successOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-5 max-[480px]:items-stretch max-[480px]:justify-stretch max-[480px]:p-0"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <div className="flex h-[772px] w-full max-w-[480px] flex-col overflow-hidden rounded-[12px] bg-white text-center shadow-[0_12px_40px_rgba(0,0,0,0.15)] max-[480px]:h-[100dvh] max-[480px]:min-h-[100dvh] max-[480px]:w-full max-[480px]:max-w-[480px] max-[480px]:rounded-none max-[480px]:shadow-none sm:h-[602px] sm:max-w-[574px]">
            
            <div className="box-border mb-[60px] ml-[38px] mr-[38px] flex h-[272px] w-[459px] max-w-full min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto text-center max-[480px]:mx-0 max-[480px]:mb-0 max-[480px]:mt-8 max-[480px]:h-auto max-[480px]:w-full max-[480px]:max-w-[480px] max-[480px]:px-4 max-[480px]:pt-8 max-[480px]:overflow-visible sm:mb-[110px] sm:ml-[57px] sm:mr-[58px] sm:mt-[100px] sm:h-[272px] sm:w-[459px] sm:flex-none">
              <img
                src={TickCircle}
                alt=""
                className="mb-[16px] h-[46px] w-[46px] shrink-0 select-none sm:mb-[32px] sm:h-[64px] sm:w-[64px]"
                aria-hidden
              />
              <h2
                id="contact-success-title"
                className="[text-shadow:2px_2px_0_#0000000F] mb-[12px] font-sora text-[20px] font-normal leading-[120%] tracking-[-0.04em] text-[#000000] sm:mb-[16px] sm:text-[32px]"
              >
                Message Submitted!
              </h2>

              <p className="[text-shadow:2px_2px_0_#0000000F] font-manrope text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-[#4D4D4D] sm:text-[14px]">
                Thank you for reaching out! Your message has been received, and our team will get back to you as soon as
                possible. <br /> <br /> If your request is urgent, please contact us directly at
                info@saviturlifescience.com or +91 70431 12818.
              </p>
            </div>

            <div className="mt-auto shrink-0">
              <div className="mb-[30px] h-px w-full bg-[#E5E7EB]" />
              <div className="flex justify-center px-6 pb-8 max-[480px]:px-4 max-[480px]:pb-8">
                <button
                  type="button"
                  onClick={() => setSuccessOpen(false)}
                  className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
                >
                  <img
                    src={SubmitAnotherBtn}
                    alt="Submit another"
                    className="h-[40px] w-[132px] sm:h-[48px] sm:w-[157px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

