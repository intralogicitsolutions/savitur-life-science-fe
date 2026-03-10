const phrases = ['Regulatory Insight', 'Process Support', 'Quality Sourcing']

export default function HeroStrip() {
  const repeated = Array(8).fill(phrases).flat()
  return (
    <section 
      className="w-[1920px] max-w-full h-[62px] mx-auto overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(to right, #E65C00, #FF8C42)' }}
    >
      <div className="flex items-center justify-center flex-nowrap gap-[36px] h-full">
        {repeated.map((phrase, i) => (
          <span key={i} className="flex items-center gap-[36px] flex-shrink-0">
            <span className="font-sora font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-white whitespace-nowrap">
              {phrase}
            </span>
            {i < repeated.length - 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
