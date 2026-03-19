import CheckAll from '../assets/images/Check_All.svg'
import ViewProductImg from '../assets/images/viewproduct.svg'
import ContactBtn from '../assets/images/contact-btn.svg'
import IntermediateIcon from '../assets/images/intermediate.svg'
import ApiIcon from '../assets/images/api.svg'
import LabIcon from '../assets/images/Lab.svg'
import ExcipientsIcon from '../assets/images/exciplents.svg'
import FinishedIcon from '../assets/images/finished.svg'

const categories = [
  {
    title: 'Intermediate',
    cta: 'View Products ↗',
    icon: IntermediateIcon,
  },
  {
    title: 'API',
    cta: 'View Products ↗',
    icon: ApiIcon,
  },
  {
    title: 'Lab Chemicals & Reagents',
    cta: 'View Products ↗',
    icon: LabIcon,
  },
  {
    title: 'Excipients',
    cta: 'View Products ↗',
    icon: ExcipientsIcon,
  },
  {
    title: 'Finished Formulation',
    cta: 'View Products ↗',
    icon: FinishedIcon,
  },
]

export default function ProductCategories() {
  return (
    <section className="w-full bg-white flex justify-center mt-[124px] mb-[124px]">
      <div className="w-[1164px] h-[648px] mx-auto">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-xl space-y-4">
          <div className="inline-flex flex-row items-center px-[12px] py-[6px] h-[36px] w-[232px] rounded-full border border-[rgba(0,0,0,0.1)] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
              <span className="flex items-center justify-center" aria-hidden>
                <img src={CheckAll} alt="" className="w-[24px] h-[24px]" />
              </span>
              <span
                className="font-sora-16-tight text-[#000000]"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Our Product Categories
              </span>
            </div>

            <h2 className="w-[574px] h-[150px] font-sora-40 text-[#000000]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Comprehensive Pharmaceutical &amp; Process Support Materials
            </h2>
          </div>

          <p className="pt-[80px] w-[472px] h-[150px] font-manrope-16 align-middle text-[#4D4D4D]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Supplying high-quality pharmaceutical materials that power research &amp; development,
            support clinical advancement, and strengthen commercial manufacturing.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] w-[1164px] h-[252px] opacity-100 mt-[56px] mb-[56px]">
          {categories.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between w-[220px] h-[252px] rounded-[24px] border border-[#EEF0F4] bg-[#F4F6F9] px-[16px] lg:px-7 lg:py-7"
            >
              <div className="flex flex-col gap-4">
                <div className="w-[54px] h-[54px mb-[24px]">
                  <img src={item.icon} alt={item.title} className="w-[54px] h-[54px]" />
                </div>

                <h3
                  className="font-manrope font-semibold text-[24px] leading-[120%] tracking-[-0.02em] text-[#111827]"
                  style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                >
                  {item.title}
                </h3>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-start w-[138px] h-[24px]"
              >
                <img src={ViewProductImg} alt="View Products" className="w-[138px] h-[24px]" />
              </button>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center text-center w-[378px] h-[84px] mx-auto">
          <p className="font-manrope-16 text-[#4D4D4D]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Any queries related to Product Availability or Inquiry.
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center w-[157px] h-[48px] hover:opacity-90 transition-opacity mt-[12px]"
          >
            <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px]" />
          </button>
        </div>
      </div>
    </section>
  )
}

