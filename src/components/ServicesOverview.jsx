import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUp from '../assets/images/Arrow_Up.svg'

const services = [
  {
    title: 'Process Feasibility Reviews',
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Optimization & Scale-up Guidance',
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Regulatory & Compliance Alignment',
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Process Optimization Consultancy',
    imageUrl:
      'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

export default function ServicesOverview() {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-[1164px] h-[634px] mt-[124px] overflow-hidden">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
          <div className="inline-flex flex-row items-center pt-[6px] pr-[12px] pb-[6px] pl-[12px] h-[36px] w-[234px] rounded-full border border-[rgba(0,0,0,0.1)] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
              <span className="flex items-center justify-center" aria-hidden>
                <img src={CheckAll} alt="" className="w-[24px] h-[24px]" />
              </span>
              <span
                className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] text-[#000000]"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Our Services at a Glance
              </span>
            </div>

            <h2 className="w-[574px] h-[100px] font-sora-40 text-[#000000] mt-[14px]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
             Consulting Services That Remove Uncertainties
            </h2>
          </div>

          <p className="pt-[80px] w-[472px] h-[100px] font-manrope-16 align-middle text-[#4D4D4D] opacity-100 mb-[51px]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Harness expert support for manufacturing strategy, regulatory navigation and material utilization.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[56px] mb-[64px] w-[1164px] h-[316px] rounded-[12px] opacity-100">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative w-[276px] h-[316px] overflow-hidden rounded-[12px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
                aria-hidden
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.15)]" />

              {/* Title */}
              <div className="relative z-10 flex h-full items-end p-6">
                <h3
                  className="font-manrope font-semibold w-[241px] h-[66px] text-[22px] leading-[140%] tracking-[-0.04em] text-[#FFFFFF]"
                  style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                >
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex items-center justify-center gap-4 w-[404px] h-[48px] mx-auto rounded-full">
          <button
            type="button"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Contact Us"
          >
            <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px]" />
          </button>

          <button
            type="button"
            className="inline-flex items-center font-sora font-semibold text-[16px] leading-[100%] tracking-[-0.02em] bg-gradient-to-r from-[#FF8C42] to-[#E65C00] text-transparent bg-clip-text underline"
          >
            <span>Or View Service in Details</span>
            <img src={ArrowUp} alt="Arrow Up" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </section>
  )
}

