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
    <section className="w-full bg-white mt-[124px] flex justify-center">
        <div className="w-[1524px] h-[746px] rounded-[15px] bg-[#FF9A52] text-center text-[#000000] flex flex-col items-center border border-[rgba(0,0,0,0.12)] opacity-100 box-border">
          {/* Top pill */}
          <div className=" mb-[14px] mt-[124px] inline-flex items-center pt-[6px] pr-[12px] pb-[6px] pl-[12px] w-[172px] h-[36px] rounded-[60px] bg-white border border-[rgba(0,0,0,0.12)] opacity-100 text-[13px] font-manrope font-semibold tracking-[0.18em] uppercase shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
            <span>
              <img src={CheckAll} alt="" className="h-[24px] w-[24px]" />
            </span>
            <span
              className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] normal-case"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Why Choose Us
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="font-sora font-normal text-[32px] md:text-[40px] leading-[110%] tracking-[-0.05em] w-[574px] h-[100px] text-center mb-[69px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Precision, Partnership &amp; Predictability
          </h2>

          {/* Stats row */}
          <div className="flex w-[1164px] h-[111px] mx-auto items-center justify-between mb-[84px]">
            <div className="w-[284px] h-[111px] mx-[2px]">
              <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count1}+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Trusted Global Suppliers
              </p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[2px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count2}Y+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Experience</p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[2px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count3}+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Quality Products</p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[2px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                {count4}+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                On-time Delivery</p>
            </div>
          </div>

          {/* Bottom text + button */}
          <div className="flex flex-col items-center justify-center gap-[12px] w-[252px] h-[84px] mb-[124px]">
            <p className="font-manrope font-semibold text-[16px] leading-[150%] tracking-[-0.02em] md:tracking-[-0.02em] w-[252px] h-[24px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Get best quality pharma materials.
            </p>

            <button type="button" className="inline-flex items-center justify-center">
              <img src={WcontactUs} alt="About Us" className="h-[48px] w-[157px] mt-[12px]" />
            </button>
          </div>
        </div>
    </section>
  )
}

