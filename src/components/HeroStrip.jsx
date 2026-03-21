const phrases = ['Regulatory Insight', 'Process Support', 'Quality Sourcing']

export default function HeroStrip() {
  const repeated = Array(8).fill(phrases).flat()
  return (
    <section 
      className="w-[2103px] h-[62px] mx-auto overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(to right, #E65C00, #FF8C42)' }}
    >
      <div className="flex items-center justify-center flex-nowrap gap-[36px] w-[2103px] h-[14px]">
        {repeated.map((phrase, i) => (
          <span key={i} className="flex items-center gap-[36px] flex-shrink-0">
            <span className="font-sora font-semibold text-[19px] leading-[100%] tracking-[-0.04em] text-white whitespace-nowrap">
              {phrase}
            </span>
            {i < repeated.length - 1 && (
              <span className="w-[8px] h-[8px] rounded-full bg-white flex-shrink-0" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
