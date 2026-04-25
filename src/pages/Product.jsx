import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import HeroImg from '../assets/images/Hero_img.svg'
import ChevronRightMD from '../assets/images/Chevron_Right_MD.svg'
import HeroStrip from '../components/HeroStrip'
import SearchIcon from '../assets/images/Search_Magnifying_Glass.svg'
import Footer from '../components/Footer'


const Product = () => {
  const { productType } = useParams()
  const [search, setSearch] = useState('')
  const [productMap, setProductMap] = useState({})
  const [loading, setLoading] = useState(true)

  const PRODUCT_LABELS = {
    api: 'API',
    intermediate: 'Intermediate',
    'finished-formulation': 'Finished Formulation',
    'lab-chemicals-reagents': 'Lab Chemicals & Reagents',
    excipients: 'Excipients',
  }

  const activeLabel = PRODUCT_LABELS[productType] ?? 'Products'

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/db.json', { cache: 'no-store' })
        const json = await res.json()
        const map = json?.products ?? {}
        if (!cancelled) {
          setProductMap(map)
          setLoading(false)
        }
      } catch {
        if (!cancelled) {
          setProductMap({})
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const rows = useMemo(() => productMap?.[productType] ?? [], [productMap, productType])

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => {
      const hay = `${r.name} ${r.casNo} ${r.grade ?? ''} ${r.endUse ?? ''}`.toLowerCase()
      return hay.includes(q)
    })
  }, [rows, search])

  const thirdColLabel = productType === 'intermediate' ? 'End Use' : 'Grade'
  const isFinishedFormulation = productType === 'finished-formulation'
  const totalCount =
    productType === 'intermediate'
      ? rows.filter((r) => (r.endUse ?? '').trim() !== '' && (r.endUse ?? '').trim() !== '-').length
      : rows.length

  const formattedEndUse = (endUse) => {
    if (!endUse || endUse === '-') return '-'
    const s = String(endUse)

    // Put the part after "&" on a new line (as per design).
    const withAmpBreak = s.replace(/\s&\s/g, ' &\n')

    // Break after "from" for the long "protect the polymer from ..." sentence.
    const shouldBreakAfterFrom = /protect the polymer from/i.test(withAmpBreak)
    const withFromBreak = shouldBreakAfterFrom ? withAmpBreak.replace(/\bfrom\s+/i, 'from\n') : withAmpBreak

    // Only break after "API of" for specific long "API of X, Y" cases (e.g. Glipizide, Gliclazide).
    const shouldBreakAfterApiOf =
      /\bAPI of\b/i.test(withFromBreak) && (withFromBreak.includes(',') || /Glipizide|Gliclazide/i.test(withFromBreak))

    return shouldBreakAfterApiOf ? withFromBreak.replace(/\bAPI of\s+/gi, 'API of\n') : withFromBreak
  }

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
          <div className="flex flex-col items-center justify-center text-center w-full px-4 sm:px-0 sm:w-auto">
            {/* Main heading */}
            <h1 
              className="[text-shadow:2px_2px_0_#0000000F] text-[#FFFFFF] font-sora font-normal sm:text-[50px] text-[32px] leading-[100%] tracking-[-0.04em] mb-[14px] whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ 
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-4%',
                leadingTrim: 'none',
              }}
            >
              {activeLabel}
            </h1>

            {/* Breadcrumb */}
            <div className="text-[#FFFFFF] font-sora font-normal text-[14px] sm:text-[16px] leading-[100%] tracking-[-0.02em] h-[24px] flex flex-nowrap items-center justify-center gap-0 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              <span 
              className="[text-shadow:2px_2px_0_#0000000F] opacity-90 shrink-0"
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
             Products
            </span>
            <span className="opacity-70 shrink-0 inline-flex items-center justify-center sm:text-[16px] text-[14px]">
                <img src={ChevronRightMD} alt="" className="w-[20px] h-[20px] brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} aria-hidden />
              </span>
              <span 
              className="[text-shadow:2px_2px_0_#0000000F] opacity-100 shrink-0 whitespace-nowrap"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-2%',
                leadingTrim: 'none',
              }}
            >
              {activeLabel}
            </span>
            </div>
           
          </div>
        </div>
      </section>
      <HeroStrip />

      {/* API Products */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1164px] mt-[60px] sm:mt-[124px] mb-[60px] sm:mb-[124px] px-[20px] sm:px-0">
          <div className="w-full sm:w-[1164px] sm:h-[136px] sm:mx-auto flex flex-col justify-center">
            <h2
              className="font-sora font-normal text-[24px] sm:text-[40px] leading-[100%] text-[#0F172A] w-auto sm:w-[299px] h-auto sm:h-[50px] whitespace-nowrap"
              style={{ letterSpacing: '-0.04em' }}
            >
              {activeLabel}: {totalCount} Products
            </h2>

            <div className="mt-[24px] w-full mb-[20px]">
              <div className="flex h-[44px] w-full items-center rounded-[10px] border border-[#1F2A4433] bg-[#F4F6F9] px-3">
                <img
                  src={SearchIcon}
                  alt=""
                  className="mr-[8px] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 opacity-80"
                  aria-hidden
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="h-full w-full bg-transparent font-manrope text-[14px] font-semibold leading-[100%] tracking-[-0.02em] text-[#0F172A] outline-none placeholder:font-manrope placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#94A3B8]"
                />
              </div>
            </div>
          </div>

          {/* Mobile (393px): card list */}
          <div className="sm:hidden space-y-[12px]">
            {loading ? (
              <div className="rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-6 text-center font-manrope text-[14px] font-semibold text-[#64748B]">
                Loading...
              </div>
            ) : filteredRows.length === 0 ? (
              <div className="rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-6 text-center font-manrope text-[14px] font-semibold text-[#64748B]">
                No products found.
              </div>
            ) : (
              filteredRows.map((r) => (
                <div
                  key={`${r.name}-${r.casNo}`}
                  className="w-full rounded-[12px] bg-[#F4F6F9] px-4 py-4"
                >
                  {/* Finished Formulation: 2 cols (Product Name + Inquiry) */}
                  {isFinishedFormulation ? (
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="font-sora text-[15px] font-semibold leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          Product Name
                        </div>
                        <div className="mt-1 font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] whitespace-normal break-words">
                          {r.name}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mt-[2px] flex-shrink-0 font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                      >
                        Inquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-2">
                        <div className="min-w-[120px] font-sora text-[15px] font-semibold leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          Product Name
                        </div>
                        <div className="min-w-0 flex-1 font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] whitespace-nowrap overflow-hidden text-ellipsis">
                          : {r.name}
                        </div>
                      </div>

                      <div className="mt-2 flex items-start gap-2">
                        <div className="min-w-[120px] font-sora text-[15px] font-semibold leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          Case No.
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          : {r.casNo}
                        </div>
                      </div>

                      <div className="mt-2 flex items-start gap-2">
                        <div className="min-w-[120px] font-sora text-[15px] font-semibold leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          {thirdColLabel}
                        </div>
                        <div className="font-sora font-normal text-[15px] leading-[120%] tracking-[-0.04em] text-[#0F172A] whitespace-pre-line">
                          : {productType === 'intermediate' ? formattedEndUse(r.endUse) : r.grade}
                        </div>
                      </div>

                      <div className="mt-2 flex items-start gap-2">
                        <div className="min-w-[120px] font-sora text-[15px] font-semibold leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          Contact Us
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          :{' '}
                          <button
                            type="button"
                            className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                          >
                            Inquiry
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block w-full sm:mx-auto sm:w-[1164px] overflow-hidden rounded-[10px] border border-[#E5E7EB]">
            <div>
              <table className="w-full border-collapse table-fixed">
                <thead className="bg-[#F4F6F9]">
                  {isFinishedFormulation ? (
                    <tr className="text-left">
                      <th className="w-[980px] p-[18px] font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-[#E5E7EB]">
                        Product Name
                      </th>
                      <th className="w-[184px] p-[18px] text-right font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-[#E5E7EB]">
                        Inquiry
                      </th>
                    </tr>
                  ) : (
                    <tr className="text-left">
                      <th
                        className={`p-[18px] font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-[#E5E7EB] ${
                          productType === 'intermediate' ? 'w-[260px]' : 'w-[190px]'
                        }`}
                      >
                        Product Name
                      </th>
                      <th className="w-[180px] p-[18px] font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-l border-[#E5E7EB]">
                        CAS NO.
                      </th>
                      <th
                        className={`p-[18px] pr-24 font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-l border-[#E5E7EB] ${
                          productType === 'intermediate' ? 'w-[420px]' : 'w-[340px]'
                        }`}
                      >
                        {thirdColLabel}
                      </th>
                      <th className="w-[120px] p-[18px] text-right font-sora text-[16px] font-semibold uppercase leading-[100%] tracking-[-0.04em] text-[#0F172A] border-b border-[#E5E7EB]">
                        Inquiry
                      </th>
                    </tr>
                  )}
                </thead>
                <tbody className="bg-white">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={isFinishedFormulation ? 2 : 4}
                        className="px-4 py-8 text-center font-manrope text-[14px] font-semibold text-[#64748B]"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : filteredRows.length === 0 ? (
                    <tr>
                      <td
                        colSpan={isFinishedFormulation ? 2 : 4}
                        className="px-4 py-8 text-center font-manrope text-[14px] font-semibold text-[#64748B]"
                      >
                        No products found.
                      </td>
                    </tr>
                  ) : (
                    filteredRows.map((r) => (
                      <tr key={`${r.name}-${r.casNo}`}>
                        {isFinishedFormulation ? (
                          <>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[120%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB] whitespace-normal break-words">
                              {r.name}
                            </td>
                            <td className="px-4 py-3 text-right border-b border-[#E5E7EB]">
                              <button
                                type="button"
                                className="font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                              >
                                Inquiry
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[100%] tracking-[-0.04em] text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis border-b border-[#E5E7EB]">
                              {r.name}
                            </td>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-l border-[#E5E7EB]">
                              {r.casNo}
                            </td>
                            <td
                              className={`px-4 py-3 pr-24 font-sora font-normal text-[#000000] border-b border-l border-[#E5E7EB] ${
                                productType === 'intermediate'
                                  ? 'text-[15px] leading-[120%] tracking-[-0.04em]'
                                  : 'text-[15px] leading-[100%] tracking-[-0.04em]'
                              }`}
                            >
                              <span className={productType === 'intermediate' ? 'whitespace-pre-line' : undefined}>
                                {productType === 'intermediate' ? formattedEndUse(r.endUse) : r.grade}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right border-b border-[#E5E7EB]">
                              <button
                                type="button"
                                className="font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                              >
                                Inquiry
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default Product

