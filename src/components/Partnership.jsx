import { useState, useEffect } from 'react'
import CheckAll from '../assets/images/Check_All.svg'
import WcontactUs from '../assets/images/Wcontact-us.svg'

export default function Partnership() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(1)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)

  useEffect(() => {
    const target = 100
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount1(target)
        clearInterval(timer)
      } else {
        setCount1(Math.min(Math.floor(current), target))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const target = 25
    const duration = 2000
    const step = (target - 1) / (duration / 16)
    let current = 1
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount2(target)
        clearInterval(timer)
      } else {
        setCount2(Math.min(Math.floor(current), target))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const target = 100
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount3(target)
        clearInterval(timer)
      } else {
        setCount3(Math.min(Math.floor(current), target))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const target = 100
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount4(target)
        clearInterval(timer)
      } else {
        setCount4(Math.min(Math.floor(current), target))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-white sm:mt-[124px] flex justify-center px-0 sm:px-6">
        <div className="w-full max-w-[393px] h-[601px] sm:max-w-none sm:w-[1524px] sm:rounded-[16px] sm:h-[746px] bg-[#FF9A52] text-center text-[#000000] flex flex-col items-center border border-[rgba(0,0,0,0.12)] opacity-100 box-border px-[20px] py-[60px] sm:px-0 sm:py-0">
          {/* Top pill */}
          <div className="mb-[14px] mt-0 inline-flex items-center gap-1 pt-[6px] pr-[12px] pb-[6px] pl-[12px] w-[153px] h-[32px] opacity-100 sm:w-[172px] sm:h-[36px] rounded-[60px] bg-white border border-[rgba(0,0,0,0.12)] text-[13px] font-semibold tracking-[0.18em] uppercase shadow-[0_6px_16px_rgba(15,23,42,0.12)] sm:mt-[124px]">
            <span>
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span
              className="font-normal sm:text-[16px] text-[14px] leading-[100%] tracking-[-0.04em] normal-case"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Why Choose Us
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="font-normal text-[26px] sm:text-[32px] md:text-[40px] leading-[110%] tracking-[-0.05em] w-full max-w-[330px] sm:max-w-[574px] h-auto text-center mb-[40px] sm:mb-[69px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Precision, Partnership &amp; Predictability
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-x-[22px] gap-y-[28px] max-w-[351px] sm:max-w-none sm:flex sm:w-[1164px] sm:h-[111px] sm:mx-auto sm:items-center sm:justify-between mb-[40px] sm:mb-[84px] w-[354px] h-[218px]">
            
            <div className="w-[169px] h-[95px] sm:w-full sm:h-auto">
              <p className="font-semibold text-[42px] sm:text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count1}+
              </p>
              <p className="mt-2 font-semibold text-[14px] sm:text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[169px] h-[42px] sm:w-full sm:h-auto opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Trusted Global <span className="sm:hidden"><br /></span> Suppliers
              </p>
            </div>

            <div className="w-[169px] h-[95px] sm:w-full sm:h-auto">
            <p className="font-semibold text-[42px] sm:text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count2}Y+
              </p>
              <p className="mt-2 font-semibold text-[14px] sm:text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[169px] h-[42px] sm:w-full sm:h-auto opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Experience</p>
            </div>
            <div className="w-[169px] h-[95px] sm:w-full sm:h-auto">
            <p className="font-semibold text-[42px] sm:text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count3}+
              </p>
              <p className="mt-2 font-semibold text-[14px] sm:text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[169px] h-[42px] sm:w-full sm:h-auto opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Quality Products</p>
            </div>
            <div className="w-[169px] h-[95px] sm:w-full sm:h-auto">
            <p className="font-semibold text-[42px] sm:text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count4}+
              </p>
              <p className="mt-2 font-semibold text-[14px] sm:text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[169px] h-[42px] sm:w-full sm:h-auto opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                On-time Delivery</p>
            </div>
          </div>

          {/* Bottom text + button */}
          <div className="flex flex-col items-center justify-center gap-[12px] w-full max-w-[252px] h-auto mb-0 sm:mb-[124px]">
            <p className="font-semibold text-[14px] sm:text-[16px] leading-[150%] tracking-[-0.02em] md:tracking-[-0.02em] w-full h-auto"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Get best quality pharma materials.
            </p>

            <button type="button" className="inline-flex items-center justify-center">
              <img src={WcontactUs} alt="About Us" className="h-[40px] sm:h-[48px] w-[132px] sm:w-[157px] mt-[6px] sm:mt-[12px]" />
            </button>
          </div>
        </div>
    </section>
  )
}

