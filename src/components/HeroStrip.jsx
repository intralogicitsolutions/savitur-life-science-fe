const phrases = ['Regulatory Insight', 'Process Support', 'Quality Sourcing']

export default function HeroStrip() {
  const repeated = Array(8).fill(phrases).flat()
  const loop = [...repeated, ...repeated]

  return (
    <section
      className="mx-auto flex h-[52px] w-full max-w-[393px] items-center justify-center overflow-hidden sm:h-[62px] sm:w-[2103px] sm:max-w-none"
      style={{ background: 'linear-gradient(to right, #E65C00, #FF8C42)' }}
    >
      <div className="[text-shadow:2px_2px_0_#0000000F] hero-strip-marquee-track items-center gap-[22px] sm:gap-[36px]">
        {loop.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="flex flex-shrink-0 items-center gap-[22px] sm:gap-[36px]"
          >
            <span className="[text-shadow:2px_2px_0_#0000000F] whitespace-nowrap font-sora text-[16px] font-semibold leading-[100%] tracking-[-0.04em] text-white sm:text-[19px]">
              {phrase}
            </span>
            {i < loop.length - 1 && (
              <span className="h-[8px] w-[8px] flex-shrink-0 rounded-full bg-white" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
