import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import HeroImg from '../assets/images/Hero_img.svg'
import ChevronRightMD from '../assets/images/Chevron_Right_MD.svg'
import HeroStrip from '../components/HeroStrip'
import SearchIcon from '../assets/images/Search_Magnifying_Glass.svg'
import CloseCircleIcon from '../assets/images/Close_Circle.svg'
import Footer from '../components/Footer'

const PAGE_SIZE = 13

// Lab desktop table: keep empty-state vertical center calc in sync when this changes
const LAB_DESKTOP_TABLE_MIN_HEIGHT_PX = 1030

const Product = () => {
  const { productType } = useParams()
  const [search, setSearch] = useState('')
  const [productMap, setProductMap] = useState({})
  const [loading, setLoading] = useState(true)
  const [labCategoryId, setLabCategoryId] = useState(null)
  const [labPage, setLabPage] = useState(1)
  const [labMobilePickerOpen, setLabMobilePickerOpen] = useState(true)
  const [page, setPage] = useState(1)

  const setLabSearch = (v) => {
    setSearch(v)
    setLabPage(1)
  }

  const setNormalSearch = (v) => {
    setSearch(v)
    setPage(1)
  }

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

  const isLabChemicals = productType === 'lab-chemicals-reagents'
  const prevIsLabChemicalsRef = useRef(isLabChemicals)
  const rawProducts = productMap?.[productType]
  const labData =
    isLabChemicals && rawProducts && typeof rawProducts === 'object' && !Array.isArray(rawProducts)
      ? rawProducts
      : null

  const rows = useMemo(() => (Array.isArray(rawProducts) ? rawProducts : []), [rawProducts])

  // For Lab Chemicals page: do NOT auto-select a category on first visit.
  const validLabCategoryId = useMemo(() => {
    const cats = labData?.categories
    if (!cats?.length) return null
    if (labCategoryId && cats.some((c) => c.id === labCategoryId)) return labCategoryId
    return null
  }, [labData, labCategoryId])

  const activeLabCategory = useMemo(
    () => labData?.categories?.find((c) => c.id === validLabCategoryId) ?? null,
    [labData, validLabCategoryId]
  )

  const labProductList = useMemo(() => activeLabCategory?.products ?? [], [activeLabCategory])

  const labFiltered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return labProductList
    return labProductList.filter((r) => {
      const hay = `${r.name} ${r.casNo} ${r.productCode ?? ''}`.toLowerCase()
      return hay.includes(q)
    })
  }, [labProductList, search])

  const labTotalPages = Math.max(1, Math.ceil(labFiltered.length / PAGE_SIZE))

  const effectiveLabPage = useMemo(
    () => Math.min(Math.max(1, labPage), labTotalPages),
    [labPage, labTotalPages]
  )

  const labPageRows = useMemo(() => {
    const total = labFiltered.length
    const idealStart = (effectiveLabPage - 1) * PAGE_SIZE
    const maxStart = Math.max(0, total - PAGE_SIZE)
    const start = Math.min(idealStart, maxStart)
    return labFiltered.slice(start, start + PAGE_SIZE)
  }, [labFiltered, effectiveLabPage])

  const labShowsPrice = useMemo(
    () => labFiltered.some((r) => r?.price !== undefined && r?.price !== null && String(r.price).trim() !== ''),
    [labFiltered]
  )

  const labEmptyMessage = useMemo(
    () => (validLabCategoryId ? 'No products found.' : 'Please select a category to view products.'),
    [validLabCategoryId]
  )

  useEffect(() => {
    const wasLab = prevIsLabChemicalsRef.current
    if (isLabChemicals && !wasLab) {
      // Entering lab page from another page: start with no selection.
      // Defer state updates to avoid synchronous setState-in-effect lint.
      const t = setTimeout(() => {
        setLabCategoryId(null)
        setLabPage(1)
        setSearch('')
        setLabMobilePickerOpen(true)
      }, 0)
      return () => clearTimeout(t)
    }
    prevIsLabChemicalsRef.current = isLabChemicals
  }, [isLabChemicals])

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
  const isExcipients = productType === 'excipients'
  const totalCount =
    productType === 'intermediate'
      ? rows.filter((r) => (r.endUse ?? '').trim() !== '' && (r.endUse ?? '').trim() !== '-').length
      : rows.length

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE))
  const effectivePage = useMemo(() => Math.min(Math.max(1, page), totalPages), [page, totalPages])
  const pageRows = useMemo(() => {
    const total = filteredRows.length
    const idealStart = (effectivePage - 1) * PAGE_SIZE
    const maxStart = Math.max(0, total - PAGE_SIZE)
    const start = Math.min(idealStart, maxStart)
    return filteredRows.slice(start, start + PAGE_SIZE)
  }, [filteredRows, effectivePage])

  const rowKey = (r) => `${r.name}-${r.casNo}`

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
    <div className="[text-shadow:2px_2px_0_#0000000F]">
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
              className="[text-shadow:2px_2px_0_#0000000F] text-[#FFFFFF] font-sora font-normal text-[28px] sm:text-[50px] leading-[110%] tracking-[-0.04em] mb-[14px] whitespace-normal break-words max-w-[353px] sm:max-w-none"
              style={{ 
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '-0.04em',
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
        <div className="mx-auto w-full max-w-[1200px] mt-[60px] sm:mt-[124px] mb-[60px] sm:mb-[124px] px-[20px] sm:px-0">
          {isLabChemicals ? (
            <>
              <div className="mx-auto w-full sm:w-[1164px] flex flex-col justify-center">
                <h2
                  className="font-sora font-normal text-[26px] sm:text-[40px] leading-[100%] tracking-[-0.04em] text-[#0F172A]"
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    leadingTrim: 'none',
                  }}
                >
                  {activeLabel}
                </h2>
                <div className="mt-[36px] w-full mb-[36px]">
                  <div className="flex h-[44px] w-full items-center rounded-[10px] border border-[#1F2A4433] bg-[#F4F6F9] px-3">
                    <img
                      src={SearchIcon}
                      alt=""
                      className="mr-[8px] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 opacity-80"
                      aria-hidden
                    />
                    <input
                      value={search}
                      onChange={(e) => setLabSearch(e.target.value)}
                      placeholder="Seacrh products..."
                      className="h-full w-full bg-transparent font-manrope text-[14px] font-semibold leading-[100%] tracking-[-0.02em] text-[#0F172A] outline-none placeholder:font-manrope placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[100%] placeholder:tracking-[-0.02em] placeholder:text-[#94A3B8]"
                    />
                  </div>  
                </div>
              </div>

              {loading ? (
                <div className="rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-10 text-center font-manrope text-[14px] font-semibold text-[#64748B]">
                  Loading...
                </div>
              ) : !labData?.categories?.length ? (
                <div className="rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-10 text-center font-manrope text-[14px] font-semibold text-[#64748B]">
                  Lab categories are not available. Please check back later.
                </div>
              ) : (
                <div className="mx-auto w-full sm:w-[1164px] flex flex-col lg:flex-row lg:items-stretch gap-[20px]">
                  <aside className="hidden lg:flex shrink-0 w-[236px] flex-col h-full">
                    <h3
                      className="font-sora font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#0F172A]"
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '-0.04em',
                        leadingTrim: 'none',
                      }}
                    >
                      Category
                    </h3>
                    <nav
                      className="mt-[24px] flex-1 overflow-auto space-y-1.5 rounded-[10px] border border-[#E5E7EB] bg-white pt-[10px] pb-[12px] px-[8px]"
                      aria-label="Lab chemical categories"
                    >
                      {labData.categories.map((c) => {
                        const isActive = c.id === validLabCategoryId
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              setLabCategoryId(c.id)
                              setLabPage(1)
                            }}
                            style={{
                              fontFamily: 'Sora',
                              fontWeight: 400,
                              fontStyle: 'normal',
                              fontSize: '16px',
                              lineHeight: '100%',
                              letterSpacing: '-0.04em',
                              leadingTrim: 'none',
                            }}
                            className={
                              isActive
                                ? 'w-full rounded-lg bg-[linear-gradient(95.58deg,_#E65C00_0%,_#FF8C42_112.63%)] px-3 py-2.5 text-center font-sora font-normal text-white shadow-sm transition-colors whitespace-nowrap overflow-hidden text-ellipsis'
                                : 'w-full bg-white px-2 py-2.5 text-center font-sora font-normal text-[#4D4D4D] transition-colors hover:bg-[#F4F6F9] whitespace-nowrap overflow-hidden text-ellipsis'
                            }
                          >
                            {c.label}
                          </button>
                        )
                      })}
                    </nav>
                  </aside>

                  <div className="min-w-0 flex-1 w-full lg:w-[908px] h-full">
                    {/* Mobile header (393px) */}
                    {!labMobilePickerOpen && (
                      <button
                        type="button"
                        onClick={() => setLabMobilePickerOpen(true)}
                        className="lg:hidden flex w-full items-center justify-between text-left"
                        aria-label="Choose category"
                      >
                        <div className="min-w-0">
                          <h3
                            className="font-sora font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000] whitespace-nowrap overflow-hidden text-ellipsis"
                            style={{
                              fontFamily: 'Sora',
                              fontWeight: 400,
                              fontStyle: 'normal',
                              fontSize: '24px',
                              lineHeight: '100%',
                              letterSpacing: '-0.04em',
                              leadingTrim: 'none',
                            }}
                          >
                            {activeLabCategory?.label ?? '—'}
                          </h3>
                        </div>
                        <img src={CloseCircleIcon} alt="" className="ml-3 h-6 w-6" aria-hidden />
                      </button>
                    )}

                    {/* Desktop header */}
                    <h3
                      className="hidden lg:block font-sora font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]"
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '-0.04em',
                        leadingTrim: 'none',
                      }}
                    >
                      {activeLabCategory?.label ?? '—'}
                    </h3>

                    {labMobilePickerOpen && (
                      <div className="lg:hidden w-[353px]">
                        <div
                          className="font-sora font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#0F172A]"
                          style={{
                            fontFamily: 'Sora',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '24px',
                            lineHeight: '100%',
                            letterSpacing: '-0.04em',
                            leadingTrim: 'none',
                          }}
                        >
                          Category
                        </div>
                        <div className="mt-3 rounded-[10px] border border-[#E5E7EB] bg-white pt-[10px] pb-[12px] px-[8px]">
                          <div className="space-y-2">
                            {labData.categories.map((c) => {
                              const isActive = c.id === validLabCategoryId
                              return (
                                <button
                                  key={c.id}
                                  type="button"
                                  onClick={() => {
                                    setLabCategoryId(c.id)
                                    setLabPage(1)
                                    setLabMobilePickerOpen(false)
                                  }}
                                  style={{
                                    fontFamily: 'Sora',
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '-0.04em',
                                    leadingTrim: 'none',
                                  }}
                                  className={
                                    isActive
                                      ? 'w-full rounded-lg bg-[linear-gradient(95.58deg,_#E65C00_0%,_#FF8C42_112.63%)] px-3 py-2.5 text-center font-sora font-normal text-white shadow-sm transition-colors whitespace-nowrap overflow-hidden text-ellipsis'
                                      : 'w-full rounded-lg bg-white px-3 py-2.5 text-center font-sora font-normal text-[#4D4D4D] transition-colors hover:bg-[#F4F6F9] whitespace-nowrap overflow-hidden text-ellipsis'
                                  }
                                >
                                  {c.label}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile lab cards (393px design) */}
                    <div className={`mt-4 space-y-3 sm:hidden ${labMobilePickerOpen ? 'hidden' : ''}`}>
                      {labPageRows.length === 0 ? (
                        <div className="rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-6 text-center flex min-h-[120px] items-center justify-center">
                          <span className="mx-auto inline-block max-w-[300px] text-center font-manrope text-[16px] leading-[140%] font-semibold text-[#64748B]">
                            {labEmptyMessage}
                          </span>
                        </div>
                      ) : (
                        labPageRows.map((r) => (
                          <div
                            key={`${r.name}|${r.casNo}|${r.productCode}`}
                            className="w-full rounded-[12px] border border-[#E5E7EB] bg-[#F4F6F9] px-4 py-4"
                          >
                            <div className="space-y-2">
                              <div className="grid grid-cols-[110px_12px_1fr] items-start gap-x-2">
                                <div className="font-sora text-[14px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                                  Product Name
                                </div>
                                <div className="font-sora text-[14px] font-semibold leading-[100%] text-[#0F172A]">
                                  :
                                </div>
                                <div className="min-w-0 font-sora text-[14px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                                  {r.name}
                                </div>
                              </div>

                              <div className="grid grid-cols-[110px_12px_1fr] items-start gap-x-2">
                                <div className="font-sora text-[14px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                                  Case No.
                                </div>
                                <div className="font-sora text-[14px] font-semibold leading-[100%] text-[#0F172A]">
                                  :
                                </div>
                                <div className="font-sora text-[14px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                                  {r.casNo}
                                </div>
                              </div>

                              <div className="grid grid-cols-[110px_12px_1fr] items-start gap-x-2">
                                <div className="font-sora text-[14px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                                  Product Code
                                </div>
                                <div className="font-sora text-[14px] font-semibold leading-[100%] text-[#0F172A]">
                                  :
                                </div>
                                <div className="font-sora text-[14px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                                  {r.productCode}
                                </div>
                              </div>

                              <div className="grid grid-cols-[110px_12px_1fr] items-start gap-x-2">
                                <div className="font-sora text-[14px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                                  Contact Us
                                </div>
                                <div className="font-sora text-[14px] font-semibold leading-[100%] text-[#0F172A]">
                                  :
                                </div>
                                <div className="font-sora text-[14px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                                  <Link
                                    to="/contact-us"
                                    className="font-sora text-[14px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                                  >
                                    Inquiry
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Desktop lab table */}
                    <div
                      className="mt-[24px] hidden sm:block w-full lg:w-[908px] rounded-[10px] border border-[#E5E7EB]"
                      style={{ minHeight: `${LAB_DESKTOP_TABLE_MIN_HEIGHT_PX}px` }}
                    >
                      <table className="w-full h-full border-collapse table-fixed overflow-y-auto">
                        <thead className="bg-[#F4F6F9]">
                          <tr>
                            <th className="w-[45%] p-[16px] text-left font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB]">
                              Product name
                            </th>
                            <th className="w-[15%] p-[16px] text-left font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB]">
                              CAS NO.
                            </th>
                            <th className="w-[17%] p-[16px] text-left font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB]">
                              Product code
                            </th>
                            <th className="w-[12%] p-[16px] text-right font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB]">
                              Price
                            </th>
                            <th className="w-[11%] p-[16px] text-right font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB]">
                              Inquiry
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {labPageRows.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="align-middle px-4 py-0">
                                <div
                                  className="flex w-full flex-col items-center justify-center px-4 py-10 text-center sm:py-16"
                                  style={{
                                    minHeight: `${LAB_DESKTOP_TABLE_MIN_HEIGHT_PX - 56}px`,
                                  }}
                                >
                                  <span className="mx-auto inline-block max-w-[720px] font-manrope text-[16px] font-semibold leading-[140%] text-[#64748B] sm:text-[18px]">
                                    {labEmptyMessage}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            labPageRows.map((r) => (
                              <tr key={`${r.name}|${r.casNo}|${r.productCode}`} className="h-[75px]">
                                <td className="h-[75px] px-4 py-3 font-sora text-[15px] font-normal leading-[130%] tracking-[-0.04em] capitalize text-[#0F172A] border-b border-[#E5E7EB] align-middle break-words">
                                  {r.name}
                                </td>
                                <td className="h-[75px] px-4 py-3 font-sora text-[15px] font-normal leading-[130%] tracking-[-0.04em] capitalize text-[#0F172A] border-b border-[#E5E7EB] align-middle break-words">
                                  {r.casNo}
                                </td>
                                <td className="h-[75px] px-4 py-3 font-sora text-[15px] font-normal leading-[130%] tracking-[-0.04em] capitalize text-[#0F172A] border-b border-[#E5E7EB] align-middle break-words">
                                  {r.productCode}
                                </td>
                                <td className="h-[75px] px-4 py-3 text-right border-b border-[#E5E7EB] align-middle">
                                  <span className="font-sora text-[15px] font-semibold text-[#0F172A]">
                                    {labShowsPrice ? (r.price ?? '—') : '—'}
                                  </span>
                                </td>
                                <td className="h-[75px] px-4 py-3 text-right border-b border-[#E5E7EB] align-middle">
                                  <Link
                                    to="/contact-us"
                                    className="font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                                  >
                                    Inquiry
                                  </Link>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile pagination: only when picker is closed */}
                    {labTotalPages > 1 && !labMobilePickerOpen && (
                      <div className="mt-[24px] flex flex-wrap items-center justify-center gap-2 sm:hidden">
                        {Array.from({ length: labTotalPages }, (_, i) => i + 1).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setLabPage(p)}
                            className={
                              p === effectiveLabPage
                                ? 'flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#E65C00] font-sora text-[14px] font-semibold text-white'
                                : 'flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F4F6F9] font-sora text-[14px] font-semibold text-[#0F172A] transition-colors hover:bg-[#EEF2F6]'
                            }
                            aria-label={`Page ${p}`}
                            aria-current={p === effectiveLabPage ? 'page' : undefined}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Desktop pagination: always visible when pages > 1 */}
                    {labTotalPages > 1 && (
                      <div className="mt-[24px] hidden flex-wrap items-center justify-center gap-2 sm:flex">
                        {Array.from({ length: labTotalPages }, (_, i) => i + 1).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setLabPage(p)}
                            className={
                              p === effectiveLabPage
                                ? 'flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#E65C00] font-sora text-[14px] font-semibold text-white'
                                : 'flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F4F6F9] font-sora text-[14px] font-semibold text-[#0F172A] transition-colors hover:bg-[#EEF2F6]'
                            }
                            aria-label={`Page ${p}`}
                            aria-current={p === effectiveLabPage ? 'page' : undefined}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              )}
            </>
          ) : (
            <>
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
                  onChange={(e) => setNormalSearch(e.target.value)}
                  placeholder="Seacrh products..."
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
              pageRows.map((r) => (
                <div
                  key={rowKey(r)}
                  className="w-full rounded-[12px] bg-[#F4F6F9] px-4 py-4"
                >
                  {/* Finished Formulation: 2 cols (Product Name + Inquiry) */}
                  {isFinishedFormulation || isExcipients ? (
                    <div className="space-y-2">
                      <div className="grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          Product Name
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                          {r.name}
                        </div>
                      </div>

                      <div className="grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          Contact Us
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          <Link
                            to="/contact-us"
                            className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                          >
                            Inquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          Product Name
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="min-w-0 font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                          {r.name}
                        </div>
                      </div>

                      <div className="mt-2 grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          Case No.
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A] break-words">
                          {r.casNo}
                        </div>
                      </div>

                      <div className="mt-2 grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          {thirdColLabel}
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="font-sora font-normal text-[15px] leading-[120%] tracking-[-0.04em] text-[#0F172A] whitespace-pre-line break-words">
                          {productType === 'intermediate' ? formattedEndUse(r.endUse) : r.grade}
                        </div>
                      </div>

                      <div className="mt-2 grid grid-cols-[120px_12px_1fr] items-start gap-x-2">
                        <div className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0F172A]">
                          Contact Us
                        </div>
                        <div className="font-sora text-[15px] font-semibold leading-[100%] text-[#0F172A]">
                          :
                        </div>
                        <div className="font-sora text-[15px] font-normal leading-[120%] tracking-[-0.04em] text-[#0F172A]">
                          <Link
                            to="/contact-us"
                            className="font-sora text-[15px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                          >
                            Inquiry
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-[24px] flex flex-wrap items-center justify-center gap-2 sm:hidden">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={
                    p === effectivePage
                      ? 'flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E65C00] font-sora text-[14px] font-semibold text-white shadow-sm'
                      : 'flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F1F5F9] font-sora text-[14px] font-semibold text-[#64748B] transition-colors hover:bg-[#E2E8F0]'
                  }
                  aria-label={`Page ${p}`}
                  aria-current={p === effectivePage ? 'page' : undefined}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Desktop table */}
          <div className="hidden sm:block w-full sm:mx-auto sm:w-[1164px] min-h-[520px] overflow-hidden rounded-[10px] border border-[#E5E7EB]">
            <div>
              <table className="w-full border-collapse table-fixed">
                <thead className="bg-[#F4F6F9]">
                  {isFinishedFormulation || isExcipients ? (
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
                        colSpan={isFinishedFormulation || isExcipients ? 2 : 4}
                        className="px-4 py-8 text-center font-manrope text-[14px] font-semibold text-[#64748B]"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : filteredRows.length === 0 ? (
                    <tr>
                      <td
                        colSpan={isFinishedFormulation || isExcipients ? 2 : 4}
                        className="px-4 py-8 text-center font-manrope text-[14px] font-semibold text-[#64748B]"
                      >
                        No products found.
                      </td>
                    </tr>
                  ) : (
                    pageRows.map((r) => (
                      <tr key={rowKey(r)}>
                        {isFinishedFormulation || isExcipients ? (
                          <>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[120%] tracking-[-0.04em] text-[#000000] border-b border-[#E5E7EB] whitespace-normal break-words">
                              {r.name}
                            </td>
                            <td className="px-4 py-3 text-right border-b border-[#E5E7EB]">
                              <Link
                                to="/contact-us"
                                className="font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                              >
                                Inquiry
                              </Link>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[130%] tracking-[-0.04em] text-[#000000] whitespace-normal break-words border-b border-[#E5E7EB]">
                              {r.name}
                            </td>
                            <td className="px-4 py-3 font-sora font-normal text-[15px] leading-[130%] tracking-[-0.04em] text-[#000000] border-b border-l border-[#E5E7EB] break-words">
                              {r.casNo}
                            </td>
                            <td
                              className={`px-4 py-3 pr-24 font-sora font-normal text-[#000000] border-b border-l border-[#E5E7EB] ${
                                productType === 'intermediate'
                                  ? 'text-[15px] leading-[120%] tracking-[-0.04em]'
                                  : 'text-[15px] leading-[130%] tracking-[-0.04em]'
                              }`}
                            >
                              <span className={productType === 'intermediate' ? 'whitespace-pre-line' : undefined}>
                                {productType === 'intermediate' ? formattedEndUse(r.endUse) : r.grade}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right border-b border-[#E5E7EB]">
                              <Link
                                to="/contact-us"
                                className="font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-[linear-gradient(95.49deg,_#E65C00_0.91%,_#FF8C42_113.49%)]"
                              >
                                Inquiry
                              </Link>
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

          {totalPages > 1 && (
            <div className="mt-[24px] hidden sm:flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={
                    p === effectivePage
                      ? 'flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E65C00] font-sora text-[14px] font-semibold text-white shadow-sm'
                      : 'flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F1F5F9] font-sora text-[14px] font-semibold text-[#64748B] transition-colors hover:bg-[#E2E8F0]'
                  }
                  aria-label={`Page ${p}`}
                  aria-current={p === effectivePage ? 'page' : undefined}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
                     </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Product

