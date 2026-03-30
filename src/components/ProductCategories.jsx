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
    <section className="w-full bg-white flex justify-center mt-[60px] mb-[60px] sm:mt-[124px] sm:mb-[124px]">
      <div className="mx-auto h-[931px] min-h-[931px] w-[354px] max-w-[354px] sm:h-[648px] sm:min-h-0 sm:max-h-none sm:w-full sm:max-w-[1164px] sm:overflow-visible">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-xl space-y-4">
          <div className="inline-flex h-auto min-h-[36px] w-fit max-w-full flex-row items-center rounded-full border border-[rgba(0,0,0,0.1)] bg-white px-[12px] py-[6px] shadow-[0_6px_16px_rgba(15,23,42,0.06)] sm:h-[36px] sm:w-[232px]">
              <img src={CheckAll} alt="" className="mr-[2px] h-5 w-5 sm:h-6 sm:w-6" />
              <span
                className="font-sora font-normal text-[12px] leading-[100%] tracking-[-0.04em] text-[#000000] sm:text-[16px]"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
              >
                Our Product Categories
              </span>
            </div>

            <h2 className="h-auto w-full max-w-full font-sora font-normal text-[26px] leading-[120%] tracking-[-0.02em] text-[#000000] !mt-[12px] min-[1600px]:!mt-[16px] sm:h-[150px] sm:w-[574px] sm:text-[40px]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
            >
              Comprehensive Pharmaceutical &amp; Process Support Materials
            </h2>
          </div>

          <p className="h-auto w-full pt-[8px] font-semibold text-[14px] leading-[150%] tracking-[-0.02em] text-[#4D4D4D] sm:pt-[80px] sm:h-[150px] sm:w-[472px] sm:text-[16px]"
             style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Supplying high-quality pharmaceutical materials that power research &amp; development,
            support clinical advancement, and strengthen commercial manufacturing.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-[28px] mb-[39px] grid w-full grid-cols-2 gap-3 opacity-100 sm:mt-[56px] sm:mb-[56px] sm:gap-[16px] lg:grid-cols-5">
          {categories.map((item) => (
            <article
              key={item.title}
              className="flex h-[170px] min-w-0 w-[169px] flex-col justify-between overflow-hidden rounded-[16px] border border-[#EEF0F4] bg-[#F4F6F9] px-[12px] py-[12px] sm:rounded-[24px] sm:px-[16px] sm:py-5 lg:h-[252px] lg:w-[220px] lg:px-7 lg:py-7"
            >
              <div className="flex flex-col">
                <div className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] mb-[12px] sm:mb-[24px]">
                  <img src={item.icon} alt={item.title} className="sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]" />
                </div>

                <h3
                  className="font-manrope font-semibold sm:text-[24px] text-[16px] leading-[100%] tracking-[-0.04em] text-[#111827]"
                  style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
                >
                  {item.title}
                </h3>
              </div>

              <button
                type="button"
                className="inline-flex h-[20px] sm:h-[24px] w-full max-w-[138px] items-center justify-start"
              >
                <img src={ViewProductImg} alt="View Products" className="h-[24px] w-full max-w-[138px] object-contain object-left" />
              </button>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto flex sm:max-w-[378px] w-[195px] h-[94px] flex-col items-center px-2 text-center sm:h-[84px]">
          <p
            className="flex h-[42px] w-[195px] items-center justify-center font-manrope font-semibold text-[14px] leading-[150%] tracking-[-0.02em] text-[#4D4D4D] opacity-95 text-center min-[1600px]:whitespace-nowrap sm:whitespace-normal"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.06)' }}
          >
            Any queries related to Product Availability or Inquiry.
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center w-[132px] h-[40px] hover:opacity-90 transition-opacity mt-[12px] sm:w-[157px] sm:h-[48px]"
          >
            <img
              src={ContactBtn}
              alt="Contact Us"
              className="w-[195px] h-[94px] sm:w-[157px] sm:h-[48px] mb-0"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

