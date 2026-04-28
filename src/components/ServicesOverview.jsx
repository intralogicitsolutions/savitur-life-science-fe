import CheckAll from '../assets/images/Check_All.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import ArrowUp from '../assets/images/Arrow_Up.svg'
import ProcessImg from '../assets/images/Process_img.svg'
import OptimizationImg from '../assets/images/Optimization_img.svg'
import RegulatoryImg from '../assets/images/Regulatory_img.svg'
import ProcessOptimizationImg from '../assets/images/Process Optimization_img.svg'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Process Feasibility Reviews',
    imageUrl: ProcessImg,
  },
  {
    title: 'Optimization & Scale-up Guidance',
    imageUrl:OptimizationImg,
  },
  {
    title: 'Regulatory & Compliance Alignment',
    imageUrl: RegulatoryImg,
      
  },
  {
    title: 'Process Optimization Consultancy',
    imageUrl: ProcessOptimizationImg,
      
  },
]

export default function ServicesOverview() {
  return (
    <section className="w-full bg-white flex justify-center opacity-100">
      <div className="w-full max-w-[393px] min-h-[997px] sm:max-w-[1164px] sm:min-h-0 px-[20px] sm:px-6 lg:px-0 mt-[124px] lg:mt-[140px] pb-[60px] pt-[60px] sm:pb-0 sm:pt-0">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">

          <div className="inline-flex flex-row items-center gap-1 px-[12px] py-[6px] h-[32px] w-[208px] opacity-100 sm:h-[36px] sm:w-[234px] rounded-[60px] border border-[rgba(0,0,0,0.1)] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
          <img src={CheckAll} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
              <span
                className="font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.04em] text-[#000000] [text-shadow:2px_2px_0_#0000000F]"
                
              >
                Our Services at a Glance
              </span>
          </div>  


            <h2 className="[text-shadow:2px_2px_0_#0000000F] w-full max-w-[574px] font-sora font-normal text-[26px]  lg:text-[40px] leading-[120%] tracking-[-0.02em] text-[#000000] sm:mt-[14px] mt-[12px]"
             
            >
             Consulting Services That Remove Uncertainties
            </h2>
          </div>

          <p className="[text-shadow:2px_2px_0_#0000000F] lg:pt-[80px] w-full max-w-[472px] font-semibold text-sm sm:text-[16px] leading-[150%] tracking-[-0.02em] align-middle text-[#4D4D4D] opacity-100 lg:mb-[51px]"
          >
            Harness expert support for manufacturing strategy, regulatory navigation and material utilization.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[12px] lg:mt-[56px] mb-[45px] lg:mb-[64px] w-full rounded-[12px] opacity-100">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative w-[351px] h-[142px] opacity-100 sm:w-full sm:h-[280px] lg:h-[316px] overflow-hidden rounded-[12px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
                aria-hidden
              />

             

              {/* Title */}
              <div className="relative z-10 flex h-full items-end p-4">
                <h3
                  className="[text-shadow:2px_2px_0_#0000000F] font-semibold w-[181px] h-[50px] sm:w-auto sm:h-auto max-w-[241px] text-[16px] sm:text-[20px] lg:text-[22px] leading-[140%] tracking-[-0.04em] text-[#FFFFFF]"
                  
                >
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-row items-center w-[343px] h-[40px] sm:justify-center sm:gap-4 sm:w-[404px] sm:h-auto mx-auto rounded-full">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity mr-[16px]"
            aria-label="Contact Us"
          >
            <img src={ContactBtn} alt="Contact Us" className="sm:w-[157px] sm:h-[48px] w-[132px] h-[40px]" />
          </Link>

          <button
            type="button"
            className="inline-flex items-center font-semibold text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.02em] bg-gradient-to-r from-[#FF8C42] to-[#E65C00] text-transparent bg-clip-text underline whitespace-nowrap"
          >
            <span>Or View Service in Details</span>
            <img src={ArrowUp} alt="Arrow Up" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          </button>
        </div>

      </div>
    </section>
  )
}

