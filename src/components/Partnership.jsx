import CheckAll from '../assets/images/Check_All.svg'
import WcontactUs from '../assets/images/Wcontact-us.svg'

export default function Partnership() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[1524px] px-4 md:px-0 py-16 flex justify-center">
        <div className="w-full h-[746px] rounded-[40px] bg-[#FF9A52] px-6 md:px-16 md:py-12 text-center text-[#000000] flex flex-col items-center">
          {/* Top pill */}
          <div className="mt-[80px] inline-flex items-center gap-[4px] px-[12px] py-[6px] mb-6 rounded-full bg-white border border-[rgba(0,0,0,0.12)] text-[13px] font-manrope font-semibold tracking-[0.18em] uppercase shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full">
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
            className="font-sora font-normal text-[32px] md:text-[40px] leading-[110%] tracking-[-0.05em] mb-12 w-[574px] h-[100px] text-center mt-[5px]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Precision, Partnership &amp; Predictability
          </h2>

          {/* Stats row */}
          <div className="flex w-[1164px] h-[111px] mx-auto items-center justify-between gap-[10px] mb-10">
            <div className="w-[283.5px] h-[111px] mx-[5px]">
              <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                100+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Trusted Global Suppliers
              </p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[5px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                25Y+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Experience</p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[5px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                100+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Quality Products</p>
            </div>
            <div className="w-[283.5px] h-[111px] mx-[5px]">
            <p className="font-sora font-semibold text-[40px] md:text-[64px] leading-[100%] tracking-[-0.04em]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                100+
              </p>
              <p className="mt-2 font-manrope font-semibold text-[14px] md:text-[20px] leading-[150%] tracking-[-0.01em] text-center w-[283.5px] h-[30px] opacity-90 text-[#212121]"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                On-time Delivery</p>
            </div>
          </div>

          {/* Bottom text + button */}
          <div className="flex flex-col items-center justify-center gap-[12px] w-[252px] h-[84px] mx-auto">
            <p className="font-manrope font-semibold text-[14px] md:text-[16px] leading-[150%] tracking-[-0.02em] md:tracking-[-0.02em]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Get best quality pharma materials.
            </p>

            <button type="button" className="inline-flex items-center justify-center">
              <img src={WcontactUs} alt="About Us" className="h-[48px] w-[157px] mt-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

