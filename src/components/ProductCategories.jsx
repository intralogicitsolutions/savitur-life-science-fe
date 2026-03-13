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
    <section className="w-full bg-white flex justify-center pt-[124px] pb-16 lg:pb-24">
      <div className="w-full max-w-[1164px] h-[648px] mx-auto py-10">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div className="max-w-xl space-y-4">
          <div className="inline-flex flex-row items-center gap-1 px-3 py-1.5 h-[36px] w-[232px] rounded-full border border-[rgba(0,0,0,0.1)] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
              <span className="flex items-center justify-center" aria-hidden>
                <img src={CheckAll} alt="" className="w-5 h-5" />
              </span>
              <span
                className="font-sora font-normal text-[16px] leading-[100%] tracking-[-0.04em] text-[#1A2C46]"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Our Product Categories
              </span>
            </div>

            <h2 className="w-[574px] font-sora font-normal text-[40px] leading-[100%] tracking-[-0.04em] text-[#000000]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Comprehensive Pharmaceutical &amp; Process
              <br className="hidden sm:block" />
              {' '}Support Materials
            </h2>
          </div>

          <p className="pt-[80px] w-[472px] font-manrope font-semibold text-[16px] leading-[150%] tracking-[-0.02em] align-middle text-[#4D4D4D]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Supplying high-quality pharmaceutical materials that power research &amp; development,
            support clinical advancement, and strengthen commercial manufacturing.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-10 lg:mb-8">
          {categories.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between w-[220px] h-[252px] rounded-[24px] border border-[#EEF0F4] bg-[#F4F6F9] px-6 py-6 lg:px-7 lg:py-7"
            >
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-[54px] h-[54px] rounded-2xl items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-[54px] h-[54px]" />
                </div>

                <h3
                  className="font-manrope font-semibold text-[24px] leading-[100%] tracking-[-0.04em] text-[#111827]"
                  style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                >
                  {item.title}
                </h3>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex items-center justify-start w-[138px] h-[24px] hover:opacity-90 transition-opacity"
              >
                <img src={ViewProductImg} alt="View Products" className="w-[138px] h-[24px]" />
              </button>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-manrope font-semibold text-[16px] leading-[150%] tracking-[-0.02em] text-[#4D4D4D]"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Any queries related to Product Availability or Inquiry.
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center w-[157px] h-[48px] hover:opacity-90 transition-opacity"
          >
            <img src={ContactBtn} alt="Contact Us" className="w-[157px] h-[48px]" />
          </button>
        </div>
      </div>
    </section>
  )
}

